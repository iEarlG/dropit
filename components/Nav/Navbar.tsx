
import Image from "next/image";
import Link from "next/link";

import { Wrapper } from "@/components/style/Wrapper";
import { Button } from "@/components/ui/button";

import { Navigation } from "@/components/Nav/Navigation";
import { Cart } from "@/components/Cart";

const Navbar = () => {
    const user = null;

    return ( 
        <div className="h-16 bg-white sticky z-50 top-0 inset-x-0">
            <header className="relative bg-white">
                <Wrapper>
                    <div className="border-b border-gray-200">
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
                            {/* Right Side */}
                            <div className="flex items-center ml-auto">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {
                                        user ? null : (
                                        <Button>
                                            <Link 
                                                href="/sign-in">
                                                Sign in
                                            </Link>
                                        </Button>
                                    )}
                                    {user ? null : <span className="h-6 w-px bg-gray-200" aria-hidden="true" />}
                                    {
                                        user 
                                        ? 
                                        <p></p> : 
                                        <Button>
                                            <Link href="/sign-up">
                                                Sign up
                                            </Link>
                                        </Button>
                                    }
                                    {user ? ( <span className="h-6 w-px bg-gray-200" aria-hidden="true" /> ) : null}
                                    {
                                        user ? null : (
                                            <div className="flex lg:ml-6">
                                                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                            </div>
                                    )}
                                    <div className="ml-4 flow-root lg:ml-6">
                                        <Cart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </header>
        </div>
    );
}
 
export default Navbar;