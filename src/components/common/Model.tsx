import React from "react";

interface ModelProps {
  Icon: React.JSX.Element;
  Label: string;
}

export default function Model({ Icon, Label }: ModelProps) {
  return (
    <div className="max-w-[138px] w-full">
      <div className="bg-nitendo-light-dark  p-4 rounded-lg mb-4">{Icon}</div>
      <p className="text-center font-semibold">{Label}</p>
    </div>
  );
}
