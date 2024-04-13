import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import {Sidebar} from "@/components/sidebar";
  import { Menu } from "lucide-react";

export const MobileSidebar = () =>{
    return(
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white"/>
            </SheetTrigger>
            <SheetContent side={"left"} className="p-0 z-[100]">
                 <Sidebar/>
            </SheetContent>
        </Sheet>
    )
};