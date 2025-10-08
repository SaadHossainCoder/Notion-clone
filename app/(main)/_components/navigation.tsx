"use client";
import { cn } from "@/lib/utils";
import { ChevronsLeft, MenuIcon, PlusCircle, Search, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { UserItem } from "./user-item";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Item } from "./item";
import { toast } from "sonner";

const Navigation = () => {
    const pathname = usePathname();
    const isMobile = useMediaQuery("(max-width: 768px)");
    const documents = useQuery(api.documents.getUserDocuments) || [];

    const create = useMutation(api.documents.createDocument);

    const isResizingRef = useRef(false);
    const sidebarRef = useRef<HTMLElement | null>(null);
    const navbarRef = useRef<HTMLDivElement | null>(null);

    const [isResetting, setIsResetting] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(isMobile);



    // Resize Handlers
    const handleMouseMove = (e: MouseEvent) => {
        if (!isResizingRef.current) return;
        let newWidth = e.clientX;

        if (newWidth < 240) newWidth = 240;
        if (newWidth > 480) newWidth = 480;

        if (sidebarRef.current && navbarRef.current) {
            sidebarRef.current.style.width = `${newWidth}px`;
            navbarRef.current.style.left = `${newWidth}px`;
            navbarRef.current.style.width = `calc(100% - ${newWidth}px)`;
        }
    };

    const handleMouseUp = () => {
        isResizingRef.current = false;
    };

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        isResizingRef.current = true;
    };

    // Attach global listeners once
    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    // resetting
    const resetWidth = () => {
        if (sidebarRef.current && navbarRef.current) {
            setIsCollapsed(false);
            setIsResetting(true);

            sidebarRef.current.style.width = isMobile ? "100%" : "240px";
            navbarRef.current.style.setProperty("width", isMobile ? "0" : "calc(100% - 240px)");
            navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px");

            setTimeout(() => setIsResetting(false), 300)
        }
    };

    //Collapse toggle
    const collapse = () => {
        if (sidebarRef.current && navbarRef.current) {
            setIsCollapsed(true);
            setIsResetting(true);

            sidebarRef.current.style.width = "0";
            navbarRef.current.style.setProperty("width", "100%");
            navbarRef.current.style.setProperty("left", "0");
            setTimeout(() => setIsResetting(false), 300);
        }
    };

    //reset the sidebar in mobil 
    useEffect(() => {
        if (isMobile) {
            collapse();
        } else {
            resetWidth();
        }
    }, [pathname, isMobile]);

    const handleCreate = () => {
        const promise = create({ title: "Untitled Document" });

        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New note created!",
            error: "Failed to create a new note."
        });
    };

    return (
        <>
            {/* Sidebar */}
            <aside
                ref={sidebarRef}
                className={cn(
                    "group/sidebar flex flex-col h-full bg-secondary overflow-y-auto z-[99999] relative",
                    isResetting && "transition-all ease-in-out duration-300"
                    , isMobile && "w-0"

                )}
            >
                {/* Collapse Button */}
                <div
                    role="button"
                    onClick={collapse}
                    className={cn(
                        "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 cursor-pointer",
                        isMobile && "opacity-100"
                    )}
                >
                    <ChevronsLeft className="w-6 h-6" />
                </div>
                <div>
                    <UserItem />
                    <Item
                    label="Search"
                    icon={Search}
                    isSearch
                    onClick={() => { }}
                    />
                    <Item
                    label="Setting"
                    icon={Settings}
                    onClick={() => { }}
                    />
                    <Item 
                    label="New Page"
                    icon={PlusCircle}
                    onClick={() => handleCreate()}
                    />
                </div>

                <div className="mt-4">
                    {
                        documents.map((document) => (
                            <p key={document._id}>
                                {document.title}
                            </p>
                        ))
                    }
                </div>

                {/* Resizer */}
                <div
                    onMouseDown={handleMouseDown}
                    onClick={resetWidth}
                    className={cn("opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/5 right-0 top-0",
                    )}
                />
            </aside>

            {/* Navbar */}
            <div
                ref={navbarRef}
                className={cn(
                    "absolute top-0 z-[99999]",
                    isResetting && "transition-all ease-in-out duration-300"
                )}
            >
                <nav className="bg-transparent px-3 py-2 w-full">
                    {isCollapsed && (
                        <MenuIcon
                            role="button"
                            onClick={resetWidth}
                            className="h-6 w-6 text-muted-foreground cursor-pointer  "
                        />
                    )}
                </nav>
            </div>
        </>
    );
};

export default Navigation;
