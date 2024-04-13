import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/sk.svg" alt="slovak" height={40} width={40} className="mr-4 rounded-md" />
          Slovak
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/tr.svg" alt="turkish" height={40} width={40} className="mr-4 rounded-md" />
          Turkish
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/ae.svg" alt="uae" height={40} width={40} className="mr-4 rounded-md" />
          UAE
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/ca.svg" alt="english" height={40} width={40} className="mr-4 rounded-md" />
          English
        </Button>
      </div>
    </footer>
  );
};
