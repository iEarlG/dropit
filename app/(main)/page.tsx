
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Wrapper } from "@/components/style/Wrapper";

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

      <Separator />
      {/* IF SECTION ATTRBS NEED */}
        <Wrapper className="py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 sm:gap-x-6 lg:gap-x-8 lg:gap-y-0">
            
          </div>
        </Wrapper>
    </>
  );
}
