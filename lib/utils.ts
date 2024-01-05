import { type ClassValue, clsx } from "clsx"
import next from "next";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "PHP",
    notation?: Intl.NumberFormatOptions["notation"],
  } = {}
) {
  const { currency = "USD", notation = "compact" } =  options;
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2
  }).format(numericPrice)
};

// NEXT JS 13 UTILS

const PORT = Number(process.env.PORT) || 3000;

export const nextApp = next({
  dev: process.env.NODE_ENV === "production",
  port: PORT
});

export const nextHandler = nextApp.getRequestHandler();