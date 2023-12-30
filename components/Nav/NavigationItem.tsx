"use client"

import { ProductCategories } from "@/lib";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = typeof ProductCategories[number];

interface NavigationItemProps {
    category: Category;
    handleOpen: () => void;
    isOpen: boolean;
    isAnyOpen: boolean;
};

export const NavigationItem = ({
    category,
    handleOpen,
    isOpen,
    isAnyOpen,
}: NavigationItemProps) => {
    return (
        <div className="flex">
            <div className="relative flex items-center">
                <Button variant={isOpen ? "secondary" : "ghost"} className="gap-1.5" onClick={handleOpen}>
                    {category.label}
                    <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground",
                        {"-rotate-180": isOpen}
                    )} />
                </Button>
            </div>
            {isOpen ? (
                <div className={cn("absolute inset-x-0 top-full text-sm text-muted-foreground",
                    {"animate-in fade-in-10 slide-in-from-top-5" : !isOpen}
                )}>
                    <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />
                </div>
            ) : null}
        </div>
    )
};