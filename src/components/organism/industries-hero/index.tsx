import { Center, Container } from "@/components/atom";
import { HeadingTitle } from "@/components/molecule";
import { INDUSTRIES_PAGE_DETAILS } from "@/constants";
type Props = {};
const IndustriesHero = (props: Props) => {
  const ContinentImage = INDUSTRIES_PAGE_DETAILS.hero.image1;
  const PeopleImage = INDUSTRIES_PAGE_DETAILS.hero.image2;
  return (
    <>
      <Container className="mt-[14.9rem]">
        <Center>
          <HeadingTitle
            title={INDUSTRIES_PAGE_DETAILS.hero.title}
            subtitle={INDUSTRIES_PAGE_DETAILS.hero.subTitle}
          />
        </Center>
      </Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden mt-[6.9rem] mb-[7.6rem]">
        <figure className="bg-seal-secondary-100 overflow-hidden flex items-center justify-center">
          <ContinentImage />
        </figure>
        <figure className="w-full h-full flex items-center justify-center">
          <PeopleImage className="w-full object-cover h-full"/>
        </figure>
      </div>
    </>
  );
};
export default IndustriesHero;
