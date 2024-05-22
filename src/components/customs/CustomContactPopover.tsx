import {
  ContactIcon,
  LineMdPhoneCallLoop,
  LogosWhatsappIcon,
} from "@/assets/icons/Icon";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { hoverStyle } from "./CustomSharePopover";

export function CustomContactPopover() {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="outine-none flex items-center gap-2">
            <ContactIcon />
            Contacter
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 flex border-none flex-col gap-3 bg-white dark:bg-slate-700">
          <p className={hoverStyle}>
            <LogosWhatsappIcon className="h-7 w-7" /> Whatsapp
          </p>
          <p className={hoverStyle}>
            <LineMdPhoneCallLoop className="h-7 w-7" /> Appel téléphonique{" "}
          </p>
        </PopoverContent>
      </Popover>
    </>
  );
}
