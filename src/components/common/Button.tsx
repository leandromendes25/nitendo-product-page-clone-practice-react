import React, { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`bg-nitendo-red py-4 text-white flex justify-center gap-4 font-bold rounded-lg my-4 ${props.width ?? "w-full"}`}
      {...props}
    >
      {props.children}
    </button>
  );
}
