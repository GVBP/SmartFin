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
    <div className="h-full">
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <h1 className="mb-3 text-4xl font-bold text-primary">Bem-vindo</h1>
        <p className="mb-8 text-muted-foreground">
          A SmartFin é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, e oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <SignInButton>
          <Button className="bg-primary" variant="outline">
            <LogInIcon className="mr-2" />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>
    </div>
  );
};

export default LoginPage;
