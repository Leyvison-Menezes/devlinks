import { ComponentProps } from "react";
import Link from "next/link";

type ButtonProps = ComponentProps<typeof Link>;

export const Button = ({ children, href, ...rest }: ButtonProps) => {
  return (
    <Link href={href} className="w-full h-14 flex items-center justify-center rounded-lg bg-surface backdrop-blur-3xl hover:bg-surface-hover transition-colors duration-200 border border-stroke text-center text-md" {...rest}>
      {children}
    </Link>
  );
};
