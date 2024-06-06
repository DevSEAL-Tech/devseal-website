"use client";
import Container from "@/components/atom/container";
import { NavBarColumn, NavBarRow } from "@/components/molecule";
import { useMediaQuery } from "@/hooks";
import React, { useCallback, useEffect, useState } from "react";
import { Outfit } from "next/font/google";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants";
const outfit = Outfit({ subsets: ["latin"] });
type Props = {};

const NavBar = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 941px)");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleToggleNav = useCallback(() => {
    setIsNavOpen((prev) => !prev);
  }, []);
  const pathname = usePathname();
  useEffect(() => {
    if (
      pathname.trim().toLowerCase() ===
      NAV_LINKS[5].pathname.trim().toLowerCase()
    ) {
      document.body.classList.add("bg-seal-secondary-50");
    } else {
      document.body.classList.remove("bg-seal-secondary-50");
    }
  }, [pathname]);
  return (
    <nav className={outfit.className}>
      <Container className="mt-[4.2rem]">
        {isAboveMediumScreens ? (
          <NavBarRow />
        ) : (
          <NavBarColumn
            isOpen={isNavOpen}
            open={handleToggleNav}
            close={handleToggleNav}
          />
        )}
      </Container>
    </nav>
  );
};

export default NavBar;
