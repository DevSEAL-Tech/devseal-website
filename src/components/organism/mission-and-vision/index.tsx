import { Container } from "@/components/atom";
import { MissionCard, VisionCard } from "@/components/molecule";
import { MISSION_DATA, VISION_DATA } from "@/constants";
import React from "react";

type Props = {};

const MissionAndVision = (props: Props) => {
  return (
    <Container className="mt-[11rem] mb-[11rem] sm:mb-[20.5rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2.3rem] sm:gap-0 items-center justify-center">
        <VisionCard title={VISION_DATA.title} body={VISION_DATA.body} />
        <MissionCard
          body={MISSION_DATA.body}
          title={MISSION_DATA.title}
          className="sm:-ml-[2.8rem] sm:-mb-[20rem] h-full"
        />
      </div>
    </Container>
  );
};

export default MissionAndVision;
