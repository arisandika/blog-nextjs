import Link from "next/link";
import { format, parseISO } from "date-fns";
import {
  Instagram,
  Link2,
  LinkIcon,
  MessageCircle,
  Share2,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostMetaDetail = ({ category, title, created_at, author, tag }) => {
  // Mengambil URL halaman saat ini
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  // URL untuk berbagi ke media sosial
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    currentUrl
  )}&text=${encodeURIComponent(title)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentUrl
  )}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    currentUrl
  )}&title=${encodeURIComponent(title)}`;

  // Fungsi untuk menyalin link ke clipboard
  const copyLinkToClipboard = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        toast.info("Link copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Failed to copy link");
      });
  };

  return (
    <>
      <div className="flex justify-center">
        <span className="inline-block text-xs font-medium tracking-wider uppercase text-zinc-400">
          {category}
        </span>
      </div>
      <h1 className="mx-auto my-5 text-3xl font-normal text-center md:max-w-2xl md:text-4xl text-brand-primary">
        {title}
      </h1>
      <div className="flex justify-center">
        <div className="flex items-center gap-2 py-4 text-xs font-light cursor-auto text-wrap">
          <p className="px-2 py-1 text-white capitalize rounded bg-zinc-800">
            {tag}
          </p>
          <p className="text-zinc-400">
            {format(parseISO(created_at), "MMMM dd, yyyy")} by
            <span className="mx-2 text-white capitalize">
              {author.length > 11 ? `${author.slice(0, 11)}...` : author}
            </span>
          </p>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-4 h-4" />
            <p>3</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="ms-2">
              <div className="flex items-center gap-1">
                <Share2 className="w-4 h-4" />
                <p>Share</p>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <div className="flex items-center gap-4">
                  <a
                    href={twitterShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <Twitter className="w-4 h-4" />
                    <p>Share to Twitter</p>
                  </a>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center gap-4">
                  <a
                    href={facebookShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <Facebook className="w-4 h-4" />
                    <p>Share to Facebook</p>
                  </a>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center gap-4">
                  <a
                    href={linkedinShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <Linkedin className="w-4 h-4" />
                    <p>Share to LinkedIn</p>
                  </a>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={copyLinkToClipboard}>
                <div className="flex items-center gap-4">
                  <LinkIcon className="w-4 h-4" />
                  <p>Copy link</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
          className={"toast-message"}
        />
      </div>
    </>
  );
};

export default PostMetaDetail;
