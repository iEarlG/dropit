"use client"

import { ShoppingBag } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export const Cart = () => {
    const itemsCount = 1
    return (
        <Sheet>
            <SheetTrigger className="group flex items-center p-2 -m-2">
                <ShoppingBag aria-hidden="true" className="flex-shrink-0 h-6 w-6  text-gray-400 group-hover:text-green-500" />
                <span className="text-sm font-medium ml-2 text-gray-700 group-hover:text-gray-800">
                    0
                </span>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
                <SheetHeader className="space-y-2.5 pr-6">
                    <SheetTitle>Cart (0)</SheetTitle>
                </SheetHeader>
                {itemsCount > 0 ? (
                    <>
                        <div className="flex w-full flex-col pr-6">Cart items</div>

                        <div className="space-y-4 pr-6">
                            <Separator />
                            <div className="space-y-1.5 text-md">
                                <div className="flex">
                                    <span className="flex-1">Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="flex">
                                    <span className="flex-1">Transaction Fee</span>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>

                    </>
                )}
            </SheetContent>
        </Sheet>

    );
}