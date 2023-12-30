
import Link from "next/link";
import { BadgeCheck, Package, Undo2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Wrapper } from "@/components/style/Wrapper";

const perks = [
  {
    name: "Instant Delivery",
    description: "Purchased assets will be delivered instantly to your account & you can use them right away.",
    icon: Package,
  },
  {
    name: "Product Quality",
    description: "Every product is verified by our team to ensure the best quality & standars for you.",
    icon: BadgeCheck,
  },
  {
    name: "Return Guarantee",
    description: "If your not happy with the product, we offer a 30 days return guarantee for every product you purchase.",
    icon: Undo2,
  }
]

export default function Home() {
  return (
    <>
      <Wrapper>
        <div className="flex flex-col items-center max-w-3xl py-20 mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">Your digital marketplace where high quality <br />
            <span className="text-green-600">Digital Assets</span> found.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to DROP IT. Where every digital asset is unique and high quality products.
            Verified by our team to ensure the best quality & standars for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button>
              <Link href="/products">Browse Trending</Link>
            </Button>
            <Button variant="outline">Quality Products</Button>
          </div>
        </div>
      </Wrapper>

      <section className="bg-gray-50">
        <Wrapper className="py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-6 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div key={perk.name} className="md:flex md:items-start text-center md:text-left lg:block lg:text-center">
                <div className="flex md:flex-shrink-0 justify-center">
                  <div className="h-14 w-14 flex items-center justify-center rounded-full bg-green-100 ">
                    {<perk.icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="font-medium text-gray-800">{perk.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>
    </>
  );
}
