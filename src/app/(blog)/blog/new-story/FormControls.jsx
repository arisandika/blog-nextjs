import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { CircleFadingPlus, X as Close, TableProperties, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const FormControls = ({ addTextarea, toggleFileInput, toggleSelect, showFileInput, showSelect }) => {
  return (
    <div className="flex gap-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <span>
              <Button
                variant="icon"
                size="iconInput"
                className="border rounded-full border-zinc-800"
                onClick={addTextarea}
              >
                <CircleFadingPlus className="w-5 h-5" />
              </Button>
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add new paragraph</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <span>
              <Button
                variant="icon"
                size="iconInput"
                className="border rounded-full border-zinc-800"
                onClick={toggleFileInput}
              >
                {showFileInput ? <Close className="w-5 h-5" /> : <ImageIcon className="w-5 h-5" />}
              </Button>
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add media</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <span>
              <Button
                variant="icon"
                size="iconInput"
                className="border rounded-full border-zinc-800"
                onClick={toggleSelect}
              >
                {showSelect ? <Close className="w-5 h-5" /> : <TableProperties className="w-5 h-5" />}
              </Button>
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add category and tags</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default FormControls;
