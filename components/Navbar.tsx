
import Image from "next/image";
import Link from "next/link";

import { Wrapper } from "@/components/style/Wrapper";
import { Navigation } from "@/components/Navigation";

const Navbar = () => {
    return ( 
        <div className="h-16 bg-white sticky z-50 top-0 inset-x-0">
            <header className="relative bg-white">
                <div className="border-b border-gray-200">
                    <Wrapper>
                        <div className="flex h-16 items-center">
                            <div className="flex ml-4 md:ml-0">
                                <Link href="/">
                                    <Image 
                                        alt="Drop IT Logo"
                                        src="/dropit.svg"
                                        height={43}
                                        width={43}
                                    />
                                </Link>
                            </div>
                            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                                <Navigation />
                            </div>
                        </div>
                    </Wrapper>
                </div>
            </header>
        </div>
    );
}
 
export default Navbar;