"use client"

import { useEffect, useRef, useState } from "react";

import { ProductCategories } from "@/lib";

import { NavigationItem } from "@/components/Nav/NavigationItem";
import { useOnClickOutside } from "@/hooks/useClickOutside";

export const Navigation = () => {
    const [isActive, setIsActive] = useState<null | number>(null);
    const navRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsActive(null);
        }
      }
      document.addEventListener("keydown", handleEsc);

      return () => {
        document.removeEventListener("keydown", handleEsc);
      }
    }, []);
    

    const isAnyOpen = isActive !== null;

    useOnClickOutside(navRef, () => setIsActive(null));

    return (
        <div className="flex h-full gap-4" ref={navRef}>
            {ProductCategories.map((category, i) => {
                const handleOpen = () => {
                    if (isActive === i) {
                        setIsActive(null);
                    } else {
                        setIsActive(i);
                    }
                };
                const isOpen = i === isActive;

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