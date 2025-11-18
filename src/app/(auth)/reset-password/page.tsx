import { Suspense } from "react";
import ResetPasswordPage from "./reset-password-page";

const Page = () => {
  return (
    <Suspense fallback={null}>
      <ResetPasswordPage />
    </Suspense>
  );
};
export default Page;
