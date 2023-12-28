
import Link from "next/link";

import { Wrapper } from "@/components/style/Wrapper";
import { Button } from "@/components/ui/button";

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

      <section className="border-t border-gray-200 bg-gray-50"></section>
    </>
  );
}
