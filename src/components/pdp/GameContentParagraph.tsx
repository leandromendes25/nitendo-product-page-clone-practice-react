import React from "react";

interface GameContentParagraphProps {
  title: string;
  paragraphs: string[];
}

export default function GameContentParagraph({
  title,
  paragraphs,
}: GameContentParagraphProps) {
  return (
    <article>
      <h2 className="text-xl my-4 font-bold">{title}</h2>
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
