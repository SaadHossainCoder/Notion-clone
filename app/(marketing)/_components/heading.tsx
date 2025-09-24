"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";


const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    return (
        <div className="max-w-3xl space-y-4 text-center ">
            <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold ">
                Your Ideas, Documents, & Notes, Organized
                Welcome to Your <br /> Our website
            </h1>
            <h3 className="text-base sm:text-xl md:text-xl text-gray-500 font-light " >
                Your one-stop solution for managing and organizing all your important <br /> information in one place.
            </h3>
            {
                isLoading && (
                    <Button>
                        Loading...
                    </Button>
                )
            }
            {
                isAuthenticated && !isLoading &&
                (
                    <Button asChild >
                        <Link href="/dashboard" >
                            Go to Dashboard
                            <ArrowRight className="ml-2 h-4 w-4 " />
                        </Link>
                    </Button>
                )
            }
            {
                !isAuthenticated && !isLoading && (
                    <SignInButton mode="modal" >
                        <Button  >
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4 " />
                        </Button>
                    </SignInButton>
                )
            }
        </div>
    );
};

export default Heading;
