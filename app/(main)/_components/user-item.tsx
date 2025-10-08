"use clint";

import { SignOutButton, useUser } from "@clerk/clerk-react";

import {
    Avatar,
    AvatarImage
} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ChevronsLeftRight } from "lucide-react";


export const UserItem = () => {
    const { user } = useUser();
    return (
        <div className=" cursor-pointer">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div role="button" className="flex items-center text-sm p-3 w-full hover:bg-primary/5">
                        <div className="flex items-center gap-x-2 max-w-[150px] ">
                            <Avatar className="h-8 w-8 ">
                                <AvatarImage src={user?.imageUrl} />
                            </Avatar>
                            <span className="text-start font-medium line-clamp-1">
                                {user?.firstName}&apos;s notion
                            </span>
                        </div>
                        <ChevronsLeftRight className=" mt-0.5 ml-1 h-4 w-4 text-muted-foreground rotate-90 " />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="start"
                    alignOffset={11}
                    forceMount
                    className="w-80"
                >
                    <div className=" flex flex-col space-y-2 p-2 text-muted-foreground">
                        <p className="text-sm font-medium">
                            {user?.emailAddresses[0]?.emailAddress ?? ''}
                        </p>
                        <div className="flex items-center gap-x-2">
                            <div className="rounded-full flex items-center gap-x-2 p-1">
                                <Avatar className=" h-10 w-10 ">
                                    <AvatarImage src={user?.imageUrl} />
                                </Avatar>
                                <p className="text-sm font-medium">
                                    {(user?.firstName ? user.firstName[0]?.toUpperCase() + user.firstName.slice(1) : "")} {(user?.lastName ? user.lastName[0]?.toUpperCase() + user.lastName.slice(1) : "")}
                                </p>
                            </div>
                        </div>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer w-full text-muted-foreground" asChild>
                            <SignOutButton/>
                        </DropdownMenuItem>

                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}