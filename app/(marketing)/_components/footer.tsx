import { Button } from "@/components/ui/button";
import { Logo } from "../_components/logo";
export const Footer = () => {
    return (
        <div className="flex items-center w-full p-6 dark:bg-[#1F1F1F]">
            <Logo />
            <div className="flex md:ml-auto w-full justify-between items-center md:justify-end text-sm text-muted-foreground gap-x-2">
                <Button variant="ghost" size="sm">
                    Privacy Policy
                </Button>
                <Button variant="ghost" size="sm">
                    Terms of Service
                </Button>
            </div>
        </div>
    );
}