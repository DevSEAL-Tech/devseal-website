"use client";
import { NAV_LINKS } from "@/constants";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

const ContactUs = (props: Props) => {
  const pathname = usePathname();
  useEffect(() => {
    if (
      pathname.trim().toLowerCase() ===
      NAV_LINKS[5].pathname.trim().toLowerCase()
    ) {
      document.body.classList.add("bg-seal-secondary-100");
    } else {
      document.body.classList.remove("bg-seal-secondary-100");
    }
  }, [pathname]);

  return <div></div>;
};

export default ContactUs;
