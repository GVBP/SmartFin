import { SignInButton } from "@clerk/nextjs";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/");
  }
  return (
    <div className="flex h-full items-center">
      <div className="mx-auto my-auto h-[500px] max-w-[550px] rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 py-32 shadow-2xl">
        <h1 className="mb-3 text-center text-6xl font-bold text-orange-50">
          Bem-vindo
        </h1>
        <p className="mx-16 mb-8 py-4 text-center text-muted-foreground text-orange-50">
          A <strong>SmartFin</strong> é uma plataforma de gestão financeira que
          utiliza IA para monitorar suas movimentações, e oferecer insights
          personalizados, facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <div className="mx-16">
            <Button
              className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-orange-50 hover:text-orange-100"
              variant="outline"
            >
              <LogInIcon className="mr-2" />
              Fazer login ou criar conta
            </Button>
          </div>
        </SignInButton>
      </div>
    </div>
  );
};

export default LoginPage;
