import { SignIn } from "@clerk/nextjs";
import { useTranslations } from "next-intl";

//TODO clerk localization prekladane prihlasovacie komponenty
const SignInPage = () => {
  const t = useTranslations("AUTH.sign_in");

  return (
    <>
      <div className="flex-col pt-16 text-center mb-8 space-y-2">
        <h1 className="text-4xl font-bold text-white">{t("title")}</h1>
        <p className="text-gray-400 max-w-md mx-auto">{t("description")}</p>
      </div>
      <div className="flex justify-center">
        <SignIn
          routing="path"
          path="/sign-in"
          fallbackRedirectUrl="/"
          signUpUrl="/sign-up"
          appearance={{
            elements: {
              socialButtonsBlockButton: "border-gray-700 hover:border-gray-600",
              socialButtonsBlockButtonText: "text-white",
              footerActionLink: "text-green-500 hover:text-green-400",
              dividerLine: "bg-gray-800",
            },
          }}
        />
      </div>
    </>
  );
};

export default SignInPage;
