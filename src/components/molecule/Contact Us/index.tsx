import { BodyText, Button, Column, NavLink, Title } from "@/components/atom";
import { CONTACT_UUS_PAGE_CONTENTS } from "@/constants/contactUsPage";
import React from "react";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <Column className="justify-between">
      <Column className="">
        <article className="space-y-[1.7rem]">
          <Title variant="xl" type="h2" className="font-bold leading-[4.6rem] text-seal-primary-100" >{CONTACT_UUS_PAGE_CONTENTS.contactUs.title}</Title>
          <BodyText variant="md" className="leading-[2.2rem] max-w-[38.5rem]">{CONTACT_UUS_PAGE_CONTENTS.contactUs.body}</BodyText>
        </article>
        <Column className="mt-[2rem] mb-[3.9rem] gap-[2rem]">
          <NavLink href={`mailto:${CONTACT_UUS_PAGE_CONTENTS.contactUs.email}`}>
            {CONTACT_UUS_PAGE_CONTENTS.contactUs.email}
          </NavLink>
          <NavLink href={`tel:${CONTACT_UUS_PAGE_CONTENTS.contactUs.phone}`}>
            {CONTACT_UUS_PAGE_CONTENTS.contactUs.phone}
          </NavLink>
        </Column>
        <Button
          href={CONTACT_UUS_PAGE_CONTENTS.contactUs.CTA.link}
          variant="secondary"
        >
          {CONTACT_UUS_PAGE_CONTENTS.contactUs.CTA.text}
        </Button>
      </Column>

    
        <ul className="grid grid-cols-1 sm:grid-cols-2 mt-auto gap-[3rem]">
          {CONTACT_UUS_PAGE_CONTENTS.locations.map((items, index) => (
            <li key={index}>
              <article className="space-y-[.8rem]">
                <Title  type="h6" className="text-seal-primary-100 font-bold">{items.title}</Title>
                <BodyText variant="xs" className="leading-[1.8rem]">{items.body}</BodyText>
              </article>
            </li>
          ))}
        </ul>
   
    </Column>
  );
};

export default ContactUs;
