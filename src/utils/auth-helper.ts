const SOCIAL_LOGIN_EMAIL_PATTERNS = [
  /^\d+@KAKAO\.com$/,
  /^[a-z0-9._%+-]+@googleusercontent\.com$/,
];

const isSocialLogin = (email?: string): boolean => {
  if (!email) return true;

  return SOCIAL_LOGIN_EMAIL_PATTERNS.some((pattern) => pattern.test(email));
};

export default isSocialLogin;
