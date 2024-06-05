import { BodyText, Container, Row, Title } from "@/components/atom";
import { BecomeASealCard, ServiceCard } from "@/components/molecule";
import { SERVICE_PAGE_DATA } from "@/constants";

type Props = {};

const ServiceAndTechnology = (props: Props) => {

  const serviceCardItems = Object.values(
    SERVICE_PAGE_DATA["services and technology section"].items
  ).map((listItem, index) => {
    return (
      <ServiceCard
        title={listItem.title}
        key={index}
        className="min-h-[56.4rem] py-[5.4rem] px-[4.2rem]"
        body={
          <ul className="list-disc ml-10 gap-[1rem] flex flex-col">
            {Object.values(listItem.content).map((items, id) => (
              <li key={id}>
                <BodyText variant="md">{items}</BodyText>
              </li>
            ))}
          </ul>
        }
        footer={
          <Row className="items-center flex-wrap gap-[2rem]">
            {listItem.logos.map((Logos, idx) => (
              <Logos key={idx} />
            ))}
          </Row>
        }
      />
    );
  });


  return (
    <Container className="mb-[9.65rem]">
      <Title variant="2xl" className="text-seal-primary-100 mb-[7.5rem]">
        {SERVICE_PAGE_DATA["services and technology section"].title}
      </Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2.1rem]">
        {serviceCardItems}
        <BecomeASealCard
          size="1xl"
          title={SERVICE_PAGE_DATA["become a seal"].title}
          buttonText={SERVICE_PAGE_DATA["become a seal"].button.text}
          href={SERVICE_PAGE_DATA["become a seal"].button.link}
        />
      </div>
    </Container>
  );
};

export default ServiceAndTechnology;
