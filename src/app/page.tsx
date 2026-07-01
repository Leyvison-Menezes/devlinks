import Image from "next/image";

import avatarLight from "../../public/avatar-light-mode.svg";
import avatarDark from "../../public/avatar-dark-mode.svg";
import bgLight from '../../public/bg-desktop-light.jpg'
import bgDark from '../../public/bg-desktop.jpg'

import { Button } from "../components/ui/button";
import { ThemeToggle } from "../components/ui/theme-toggle";

export default function Home() {

  return (
    <div className="flex flex-col items-center mt-14 mx-auto max-w-90 md:max-w-147 p-6">
      <Image 
        src={bgLight} 
        alt="Background Claro" 
        fill
        className="absolute inset-0 object-cover -z-10 dark:hidden"
        priority
      />

      <Image
        src={bgDark} 
        alt="Background Escuro" 
        fill
        className="absolute inset-0 object-cover -z-10 hidden dark:block"
        priority
      />

      <div className="w-full flex flex-col gap-2 items-center pb-6">
        <Image src={avatarLight} alt="avatar" width={112} height={112} className="dark:hidden"/>
        <Image src={avatarDark} alt="avatar" width={112} height={112} className="hidden dark:block"/>
        <h1>@juliasilva</h1>
      </div>

      <ThemeToggle />

      <div className="w-full flex flex-col items-center gap-4 py-6">
        <Button href={"/"}>Inscreva-se no NLW</Button>
        <Button href={"/"}>Baixe meu e-book</Button>
        <Button href={"/"}>Veja meu portfólio</Button>
        <Button href={"/"}>Conheça meu curso</Button>
      </div>

      <div className="flex gap-4 items-center pb-6">
        <p>a</p>
        <p>b</p>
        <p>c</p>
        <p>d</p>
      </div>

      <p>
        Feito com ♥ por
        <a href="https://github.com/Leyvison-Menezes" className="hover:text-stroke transition-colors duration-200 underline"> Leyvison Menezes</a>
      </p>
    </div>
  );
}
