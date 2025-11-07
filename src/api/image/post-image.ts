import instance from "@/utils/axios";

interface ImageData {
  url: File;
}

export default async function postImage(data: ImageData) {
  const formData = new FormData();

  if (data.url) {
    formData.append("image", data.url);
  }

  const response = await instance.post("/images/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}
