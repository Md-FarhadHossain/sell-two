import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "How to Buy",
      href: "#about",
    },
  ];

  return (
    <section className="">
      <nav className="fixed w-full z-50 lg:px-[16rem] md:px-6 px-3">
        <div className="mt-4 shadow-lg bg-gradient-to-r rounded-full from-[#e81cff] via-yellow-500 to-[#40c9ff] p-1">
          <div className="flex justify-between border items-center bg-white   shadow-lg rounded-full lg:py-3 md:py-2 py-2 px-3">
            <div className="lg:ps-4 ps-2">
              <Link href="/">
                <Image src={logo} alt="logo" />
              </Link>
            </div>

            <div>
              <ul className="gap-4 lg:flex md:hidden hidden">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link className="font-semibold" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:flex gap-2 md:flex hidden">
              {/* <Button className="rounded-full" size="lg">
                Login
              </Button> */}
              <Button className="rounded-full bg-blue-500" size="lg">
                Registration
              </Button>
            </div>

            <div className="lg:hidden md:hidden flex lg:ps-4 ps-2">
              <Sheet>
                <SheetTrigger>
                  <Menu />
                </SheetTrigger>

                <SheetContent>
                  <div className="flex flex-col justify-center items-center">
                    <ul className="flex flex-col text-center gap-4">
                      {links.map((link) => (
                        <li key={link.label}>
                          <Link
                            className="font-semibold text-xl"
                            href={link.href}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <Button className="rounded-full bg-blue-500 mt-5" size="lg">
                      Registration
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
