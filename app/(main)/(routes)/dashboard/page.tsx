"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import {toast} from "sonner";


const Dashboard = () => {
    const { user } = useUser();
    const create = useMutation(api.documents.createDocument);

    const handleCreate = () => {
        const promise = create({ title: "Untitled Document" });

        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New note created!",
            error: "Failed to create a new note."
        });
    };

    return (
        <div className="dark:bg-[#1F1F1F] h-full flex flex-col items-center justify-center space-y-4">
            <Image
                src="/empty.webp"
                alt="Empty State"
                width={300}
                height={300}
                className="object-contain dark:hidden"
            />
            <Image
                src="/empty-dark.webp"
                alt="Empty Dark State"
                width={300}
                height={300}
                className="object-contain hidden dark:block"
            />
            <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                Welcome to {user?.firstName}&apos;s Dashboard
            </h2>
            <Button onClick={handleCreate} className=" cursor-pointer">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create a Note
            </Button>
        </div>
    )
}

export default Dashboard
