import { BodyText, Column, Container, Row, Title } from "@/components/atom";
import { ServiceCard } from "@/components/molecule";
import { SERVICE_PAGE_DATA } from "@/constants";
import React from "react";

type Props = {};

const DataEngineeringSection = (props: Props) => {
  const columnOne = Object.values(
    SERVICE_PAGE_DATA["Data Engineering section"]["column 1"]
  ).map((listItem, index) => {
    return (
      <ServiceCard
        title={listItem.title}
        key={index}
        className="min-h-[27rem] py-[2.8rem] px-[3.6rem]"
        body={
          <ul className="list-disc ml-10 gap-[1rem] flex flex-col">
            {listItem.content &&
              Object.values(listItem.content).map((items, id) => (
                <li key={id}>
                  <BodyText variant="md">{items}</BodyText>
                </li>
              ))}
          </ul>
        }
        footer={
          <Row className="items-center flex-wrap gap-[2rem]">
            {listItem.logos &&
              listItem.logos.map((Logos, idx) => <Logos key={idx} />)}
          </Row>
        }
      />
    );
  });
  const columnTwo = Object.values(
    SERVICE_PAGE_DATA["Data Engineering section"]["column 2"]
  ).map((listItem, index) => {
    return (
      <ServiceCard
        title={listItem.title}
        key={index}
        className="min-h-[27rem] py-[2.8rem] px-[3.6rem]"
        body={
          <ul className="list-disc ml-10 gap-[1rem] flex flex-col">
            {listItem.content &&
              Object.values(listItem.content).map((items, id) => (
                <li key={id}>
                  <BodyText variant="md">{items}</BodyText>
                </li>
              ))}
          </ul>
        }
        footer={
          <Row className="items-center flex-wrap gap-[2rem]">
            {listItem.logos &&
              listItem.logos.map((Logos, idx) => <Logos key={idx} />)}
          </Row>
        }
      />
    );
  });

  const columnThree = Object.values(
    SERVICE_PAGE_DATA["Data Engineering section"]["column 3"]
  ).map((listItem, index) => {
    return (
      <ServiceCard
        title={listItem.title}
        key={index}
        className="min-h-[27rem] py-[2.8rem] px-[3.6rem]"
        body={
          <ul className="list-disc ml-10 gap-[1rem] flex flex-col">
            {listItem.content &&
              Object.values(listItem.content).map((items, id) => (
                <li key={id}>
                  <BodyText variant="md">{items}</BodyText>
                </li>
              ))}
          </ul>
        }
        footer={
          <Row className="items-center flex-wrap gap-[2rem]">
            {listItem.logos &&
              listItem.logos.map((Logos, idx) => <Logos key={idx} />)}
          </Row>
        }
      />
    );
  });

  return (
    <Container className="mb-[15.4rem]">
      <Title
        variant="2xl"
        className="text-seal-primary-100 max-w-[68.7rem] mb-[5.3rem]"
      >
        {SERVICE_PAGE_DATA["Data Engineering section"].title}
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem]">
        <Column className="gap-[2rem]">{columnOne}</Column>
        <Column className="gap-[2rem]">{columnTwo}</Column>
        <Column className="gap-[2rem]">{columnThree}</Column>
      </div>
    </Container>
  );
};

export default DataEngineeringSection;
