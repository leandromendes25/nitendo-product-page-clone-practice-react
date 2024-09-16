import React from "react";

interface GameContentParagraphProps {
  title: string;
  paragraphs: string[];
  isOpen: boolean;
}

export default function GameContentParagraph({
  title,
  paragraphs,
  isOpen,
}: GameContentParagraphProps) {
  return (
    <article className={`${isOpen ? "h-auto" : "h-3/5 overflow-hidden"} `}>
      <h2 className="text-xl my-4 font-bold ">{title}</h2>
      {paragraphs.map((paragraph, index) => {
        return (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        );
      })}
    </article>
  );
}
