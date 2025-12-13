import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import FuzzyText from "@/components/ui/animations/fuzzy-text";
import { TextScramble } from "@/components/ui/text-scramble";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen text-white p-4 relative overflow-hidden bg-transparent">
        <div className="max-w-3xl w-full text-center space-y-8 relative z-20">
          <div className="relative py-12">
            <h1 className="text-9xl font-bold flex justify-center">
              <FuzzyText>404</FuzzyText>
            </h1>
          </div>

          <h2 className="text-3xl font-medium text-gray-700 dark:text-gray-300">
            <TextScramble
              className="font-mono text-sm"
              duration={1.2}
              characterSet=". "
            >
              Stránka nenájdená...
            </TextScramble>
          </h2>
          <p className="dark:text-gray-400 text-gray-700 max-w-md mx-auto">
            Ľutujeme, ale stránka, ktorú hľadáte, neexistuje alebo bola
            presunutá.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500/10"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Späť
            </Button>

            <Button
              className="bg-green-500 hover:bg-green-600 text-black"
              asChild
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Domov
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {},
  };
};
