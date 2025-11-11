export const getCookie = (cookieName: string) => {
  if (typeof document === "undefined") {
    return undefined;
  }

  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(cookieName + "=")) {
      return cookie.slice(cookieName.length + 1);
    }
  }
  return undefined;
};
