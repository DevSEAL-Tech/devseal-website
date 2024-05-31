import { Column, Container } from "@/components/atom";
import { HeadingTitle, MapHoverCountries } from "@/components/molecule";
import React from "react";

type Props = {};

const HomeHero = (props: Props) => {
  return (
    <Container className="mt-[14.9rem]">
      <Column className="items-center justify-center">
        <HeadingTitle />
        <MapHoverCountries  className="mt-[8.2rem] mb-[10.2rem]"/>
      </Column>
    </Container>
  );
};

export default HomeHero;
