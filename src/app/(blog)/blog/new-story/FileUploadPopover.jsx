import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Image } from "lucide-react";

const FileUploadPopover = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="icon"
          size="iconInput"
          className="border rounded-full border-zinc-700"
        >
          <Image className="w-5 h-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        
      </PopoverContent>
    </Popover>
  );
};

export default FileUploadPopover;
