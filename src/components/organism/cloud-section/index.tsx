import { BodyText, Container, Row } from "@/components/atom";
import { ServiceCard } from "@/components/molecule";
import { SERVICE_PAGE_DATA } from "@/constants";
import React from "react";

type Props = {};

const CloudSection = (props: Props) => {
  const serviceCardItems = Object.values(SERVICE_PAGE_DATA.infastructures).map(
    (listItem, index) => {
      return (
        <ServiceCard
          title={listItem.title}
          key={index}
          className="min-h-[27rem] py-[2.8rem] px-[3.6rem]"
          body={<BodyText variant="md">{listItem.content}</BodyText>}
          footer={
            <Row className="items-center flex-wrap gap-[2rem]">
              {listItem.logos.map((Logos, idx) => (
                <Logos key={idx} />
              ))}
            </Row>
          }
        />
      );
    }
  );

  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1.9rem] mb-[10rem]">
        {serviceCardItems}
    </Container>
  );
};

export default CloudSection;
