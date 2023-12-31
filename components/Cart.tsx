"use client"

import { ShoppingBag } from "lucide-react";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export const Cart = () => {
    const itemsCount = 0
    const fee = 1
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
                            <div className="space-y-1.5 text-lg">
                                <div className="flex">
                                    <span className="flex-1">Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="flex">
                                    <span className="flex-1">Transaction Fee</span>
                                    <span>{formatPrice(fee)}</span>
                                </div>
                                <div className="flex">
                                    <span className="flex-1">Total</span>
                                    <span>{formatPrice(fee)}</span>
                                </div>
                            </div>
                            <SheetFooter>
                                <SheetTrigger asChild>
                                    <Button className="w-full text-lg">
                                        <Link href="/cart">Checkout</Link>
                                    </Button>
                                </SheetTrigger>
                            </SheetFooter>
                        </div>
                    </>
                ) : (
                    <div className="flex h-full flex-col items-center justify-center space-y-1">
                        <div aria-hidden="true" className="relative mb-4 h-60 w-60 text-muted-foreground">
                            <Image 
                                alt="cart-empty"
                                src="/cart.svg"
                                fill
                            />
                        </div>
                        <div className="text-xl font-semibold">Your cart is empty</div>
                        <SheetTrigger asChild>
                            <Button variant="link" size="sm" className="text-lg text-muted-foreground">
                                <Link href="/products">Go Shopping!</Link>
                            </Button>
                        </SheetTrigger>
                    </div>
                )}
            </SheetContent>
        </Sheet>

    );
}