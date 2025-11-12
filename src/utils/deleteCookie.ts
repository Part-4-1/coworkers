export const deleteCookie = (cookieName: string) => {
  const secureFlag = process.env.NODE_ENV === "production" ? "secure" : "";
  document.cookie = `${cookieName}=; path=/; max-age=0; ${secureFlag}`;
};
