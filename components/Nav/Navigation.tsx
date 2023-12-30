"use client"

import { useState } from "react";

import { ProductCategories } from "@/lib";

import { NavigationItem } from "@/components/Nav/NavigationItem";

export const Navigation = () => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null);

    const isAnyOpen = activeIndex !== null;
    return (
        <div className="flex h-full gap-4">
            {ProductCategories.map((category, i) => {
                const handleOpen = () => {
                    if (activeIndex === i) {
                        setActiveIndex(null);
                    } else {
                        setActiveIndex(i);
                    }
                };
                const isOpen = i === activeIndex;

                return (
                    <NavigationItem 
                        key={category.value}
                        category={category}
                        handleOpen={handleOpen}
                        isOpen={isOpen}
                        isAnyOpen={isAnyOpen}
                    />
                )
            })}
        </div>
    )
}