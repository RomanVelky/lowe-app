import { SignIn } from "@clerk/nextjs";
import { useTranslations } from "@/context/useTranslations";
import { useAuthStore } from "@/lib/store/authStore";
import { useLanguageStore } from "@/lib/store/langStore";

const SignInPage = () => {
  const t = useTranslations("AUTH.sign_in");
  const { locale } = useLanguageStore();
  const { lastVisitedUrl } = useAuthStore();
  const signInPath = locale === "en" ? "/en/sign-in" : "/sign-in";
  const signUpPath = locale === "en" ? "/en/sign-up" : "/sign-up";

  return (
    <>
      <div className="flex-col pt-16 text-center mb-8 space-y-2">
        <h1 className="text-4xl font-bold text-white">{t("title")}</h1>
        <p className="text-gray-400 max-w-md mx-auto">{t("description")}</p>
      </div>
      <div className="flex justify-center">
        <SignIn
          routing="path"
          path={signInPath}
          fallbackRedirectUrl={lastVisitedUrl || "/"}
          signUpUrl={signUpPath}
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

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {},
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { index: [] }, locale: "en" },
      { params: { index: [] }, locale: "sk" },
    ],
    fallback: "blocking",
  };
};
