"use client"

import { ChevronDown } from "lucide-react";
import { ProductCategories } from "@/lib";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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

                    <div className="relative bg-white">
                        <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                <div className="grid grid-cols-3 col-span-4 col-start-1 gap-x-8">
                                    {category.featured.map((feature) => (
                                        <div key={feature.name} className="group relative sm:text-sm">
                                            <div className="relative aspect-video overflow-hidden rounded-lg bg-green-100 group-hover:opacity-75">
                                                <Image 
                                                    alt="Featured Image"
                                                    src={feature.imageSrc}
                                                    className="object-cover object-center"
                                                    fill
                                                />
                                            </div>
                                            <Link href={feature.href} className="block mt-6 font-medium text-gray-800">
                                                {feature.name}
                                            </Link>
                                            <p className="mt-2" aria-hidden="true">Order now!</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
};