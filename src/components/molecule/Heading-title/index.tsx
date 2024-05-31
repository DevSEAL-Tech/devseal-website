import { Title } from "@/components/atom";
import { Outfit } from "next/font/google";
const outfit = Outfit({subsets:["latin"], weight:["600","700"]})
type Props = {};

const HeadingTitle = (props: Props) => {
  return (
    <article className={`text-center max-w-[70rem] ${outfit.className}`}>
      <Title type="h3" className="font-[600] leading-[2.268rem]">100% SEALS</Title>
      <Title variant="xl" className="font-[700] leading-[4.5rem] text-seal-primary-100">
        Shift the centre of gravity of Information technology closer to Africa
      </Title>
    </article>
  );
};

export default HeadingTitle;
