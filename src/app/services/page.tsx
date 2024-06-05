import { ServiceHero, ServiceAndTechnology, Developer, CloudSection ,DataEngineeringSection } from "@/components";

type Props = {};

const Services = (props: Props) => {
  return (
    <main>
      <ServiceHero />
      <ServiceAndTechnology />
      <Developer />
      <CloudSection/>
      <DataEngineeringSection/>
    </main>
  );
};

export default Services;
