"use client"
import { useConvexAuth } from "convex/react"
import { redirect } from "next/navigation";

import { Spinner } from "@/components/spinner";
import Navigation from "./_components/navigation";



const MainLayout = (
    { children }: { children: React.ReactNode }
) => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    if (isLoading) {
        return (
            <div className="h-full flex items-center justify-center dark:bg-[#1F1F1F]">
                <Spinner size="icon" />
            </div>
        )
    }

    if(!isAuthenticated) {
        return redirect("/")
    }
    return (
        <div className="h-full flex dark:bg-[#1F1F1F] ">
            <Navigation />
            <main className="flex-1 overflow-y-auto h-full">
            {children}
            </main>
        </div>
    )
}

export default MainLayout
