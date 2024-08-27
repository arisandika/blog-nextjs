import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CircleFadingPlus, Trash2 } from "lucide-react";

const TextAreaGroup = ({ textareas, setTextareas }) => {
  const removeTextarea = (id) => {
    setTextareas(textareas.filter((textarea) => textarea.id !== id));
  };

  return (
    <>
      {textareas.map((textarea) => (
        <div key={textarea.id} className="relative">
          <Textarea
            id={`content-${textarea.id}`}
            name={`content[]`}
            placeholder={`Paragraph ${textarea.id}`}
            className="text-base md:text-lg min-h-[200px] border"
          />
          <Button
            variant="icon"
            size="iconInput"
            className="absolute bottom-0 right-0 mb-2 mr-2"
            onClick={() => removeTextarea(textarea.id)}
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      ))}
    </>
  );
};

export default TextAreaGroup;
