"use client";
import { Logo } from "../_components/logo";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/providers/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Navbar = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const scrolled = useScrollTop()
    return (
        <div className={cn("flex items-center fixed top-0 w-full  p-6 bg-background z-50 dark:bg-[#1F1F1F] justify-center ", scrolled && " border-b shadow-sm   ")}>
            <Logo />
            <div className="md:ml-auto w-full md:w-auto flex items-center justify-end gap-x-4">
                {
                    isLoading && (
                        <Spinner />
                    )
                }
                {
                    !isAuthenticated && !isLoading && (
                        <>
                            <SignInButton mode="modal">
                                <Button variant="outline" size="sm">
                                    Log In
                                </Button>
                            </SignInButton>
                            <SignInButton mode="modal">
                                <Button size="sm">
                                    Get Notion free
                                </Button>
                            </SignInButton>
                        </>
                    )
                }
                {
                    isAuthenticated && !isLoading && (
                        <>
                            <Button size="sm" asChild >
                                <Link href="/dashboard">
                                    Dashboard
                                </Link>
                            </Button>
                            <UserButton
                                afterSignOutUrl="/"
                            />
                        </>
                    )
                }
                <ModeToggle />
            </div>
        </div>
    )
}