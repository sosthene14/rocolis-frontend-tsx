import { SolarShareBold } from "@/assets/icons/Icon";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
export const hoverStyle = "dark:hover:bg-slate-600 hover:bg-slate-200 flex w-full items-center p-2 rounded-md transition-all duration-150 cursor-pointer gap-2";

export function CustomSharePopover() {
  const [haveCopied, setHaveCopied] = useState(false);

  useEffect(() => {
    if (haveCopied) {
      toast.success("Lien copié");
      setHaveCopied(false);
    }
  }, [haveCopied]);
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="outine-none flex items-center gap-2">
            <SolarShareBold />
            Partager
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 flex border-none flex-col gap-3 bg-white dark:bg-slate-700">
          <CopyToClipboard
            text={"this.state.value"}
            onCopy={() => setHaveCopied(true)}
          >
            <button className="gap-2 items-center transition-all duration-500 dark:hover:bg-slate-800 hover:bg-slate-400  rounded-md py-3 bg-slate-200 dark:bg-slate-600">
              Copier le lien
            </button>
          </CopyToClipboard>
          <FacebookShareButton
            url={"shareUrl"}
            className="flex gap-2  items-center hover:bg-slate-800"
          >
            <div className={hoverStyle}>
              <FacebookIcon size={32} round />
              <p>Facebook</p>
            </div>
          </FacebookShareButton>
            <TwitterShareButton
              url={"shareUrl"}
              title={"partager"}
              className="flex gap-2 items-center"
            >
              <div className={hoverStyle}>
                <XIcon size={32} round />
                <p>Twitter</p>
              </div>
            </TwitterShareButton>
          <TelegramShareButton
            url={"shareUrl"}
            title={"title"}
            className="flex gap-2 items-center"
          >
            <div className={hoverStyle}>
              <TelegramIcon size={32} round />
              <p>Telegram</p>
            </div>
          </TelegramShareButton>
          <WhatsappShareButton
            url={"shareUrl"}
            title={"title"}
            separator=":: "
            className="flex gap-2 items-center"
          >
            <div className={hoverStyle}>
              <WhatsappIcon size={32} round />
              <p>Whatsapp</p>
            </div>
          </WhatsappShareButton>
          <LinkedinShareButton
            url={"shareUrl"}
            className="flex gap-2 items-center"
          >
            <div className={hoverStyle}>
              <LinkedinIcon size={32} round />
              <p>Linkedin</p>
            </div>
          </LinkedinShareButton>
        </PopoverContent>
      </Popover>
    </>
  );
}
