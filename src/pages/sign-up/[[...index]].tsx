import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-16 text-center mb-8 space-y-2">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Create an Account</h1>
        <p className="text-muted-foreground">Get started with our platform</p>
      </div>
      <SignUp
        appearance={{
          elements: {
            socialButtonsBlockButton: "border-gray-700 hover:border-gray-600",
            socialButtonsBlockButtonText: "text-white",
            footerActionLink: "text-green-500 hover:text-green-400",
            dividerLine: "bg-gray-800",
          },
        }}
        routing="path"
        path="/sign-up"
        fallbackRedirectUrl="/"
        signInUrl="/sign-in"
      />
    </div>
  );
};

export default SignUpPage;
