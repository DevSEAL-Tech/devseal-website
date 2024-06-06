import { Container } from "@/components/atom";
import { ContactUs, GetInTouch } from "@/components/molecule";
import React from "react";

type Props = {};

const ContactUsHeader = (props: Props) => {
  return (
    <Container className="bg-atlas bg-cover bg-center ">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-[14rem]">
        <ContactUs />
        <GetInTouch />
      </div>
    </Container>
  );
};

export default ContactUsHeader;
