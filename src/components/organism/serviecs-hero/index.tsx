import { BodyText, Container, Row, Title } from "@/components/atom";
import { SERVICE_PAGE_DATA } from "@/constants";
import { SealsInvertedIcon } from "@/public/index";


type Props = {};

const ServiceHero = (props: Props) => {
  const HeroImage = SERVICE_PAGE_DATA["hero section"].image;
  return (
    <div className="w-full relative bg-seals-tertiary-100 max-h-[54.9rem] z-10 h-full mt-[12rem] py-20 sm:py-0  md:mt-[3.9rem] mb-[6.5rem]">
      <Container className="h-full">
        <Row className="items-center h-full">
          <article className="max-w-[56.3rem] space-y-[1.4rem]">
            <Title
              variant="4xl"
              className="font-[500] leading-[5.7rem] text-seal-primary-100"
            >
              {SERVICE_PAGE_DATA["hero section"].title}
            </Title>
            <BodyText
              variant="lg"
              className="text-seal-primary-100 font-normal leading-[2.4rem] max-w-[48.2rem]"
            >
              {SERVICE_PAGE_DATA["hero section"].content}
            </BodyText>
          </article>
          <figure className="hidden self-end sm:block max-w-[40.9rem] max-h-[54.9rem] ">
            <HeroImage />
          </figure>
        </Row>
      </Container>
      <SealsInvertedIcon className="absolute -z-10 bottom-0 left-0" />
    </div>
  );
};

export default ServiceHero;
