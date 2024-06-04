import { Column, Container } from "@/components/atom";
import { HeadingTitle, MapHoverCountries } from "@/components/molecule";
import { HOME_PAGE_HERO } from "@/constants";

type Props = {};

const HomeHero = (props: Props) => {
  return (
    <Container className="mt-[14.9rem]">
      <Column className="items-center justify-center">
        <HeadingTitle title={HOME_PAGE_HERO.title} subtitle={HOME_PAGE_HERO.subtitle}/>
        <MapHoverCountries  className="mt-[8.2rem] mb-[10.2rem]"/>
      </Column>
    </Container>
  );
};

export default HomeHero;
