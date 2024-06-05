import { BodyText, Container, Title } from "@/components/atom";
import { IndustryCard } from "@/components/molecule";
import { INDUSTRIES_PAGE_DETAILS } from "@/constants";
import React from "react";

type Props = {};

const IndustriesSubSection = (props: Props) => {
  return (
    <Container>
      <article className="text-seal-primary-100 mb-[12rem]">
        <Title className="max-w-[77.6rem]" variant="xl" type="h4">
          {" "}
          {INDUSTRIES_PAGE_DETAILS["sub section"].title}
        </Title>
        <BodyText className="mt-[3.6rem]  leading-[2.6rem]" variant="lg">
          {INDUSTRIES_PAGE_DETAILS["sub section"].content}
        </BodyText>
      </article>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[2.2rem] mb-[33.8rem]">
        {INDUSTRIES_PAGE_DETAILS["sub section"].listItems.map(
          ({ content, icon: Icon, title }, idx) => (
            <li key={idx}>
              <IndustryCard content={content} title={title} icon={<Icon />} />
            </li>
          )
        )}
      </ul>
    </Container>
  );
};

export default IndustriesSubSection;
