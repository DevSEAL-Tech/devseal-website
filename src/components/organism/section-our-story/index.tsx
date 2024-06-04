import { BodyText, Column, Container } from "@/components/atom";
import { Story } from "@/components/molecule";
import { OUR_STORY } from "@/constants";
import { CountryIllustraionImage } from "@/public/index";
import React from "react";

type Props = {};

const OurStory = (props: Props) => {
  const paragraphs = OUR_STORY.sub.split(".").map((paragraph, index) => (
    <BodyText
      key={index}
      variant="lg"
      className="leading-[2.6rem] text-seal-primary-100"
    >
      {paragraph}
    </BodyText>
  ));
  return (
    <Container>
      <Story />
      <figure className="my-[2.5rem] flex items-center justify-center w-full">
        <CountryIllustraionImage />
      </figure>
      <Column className="gap-[2.5rem]">{paragraphs}</Column>
    </Container>
  );
};

export default OurStory;
