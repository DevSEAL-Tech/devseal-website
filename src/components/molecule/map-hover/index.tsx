import { MapImage } from "@/public/index";
import React, { HTMLAttributes } from "react";
type FigureProps = HTMLAttributes<HTMLDivElement>;
type Props = FigureProps & {};

const MapHoverCountries = (props: Props) => {
  return (
    <figure {...props}>
      <MapImage />
    </figure>
  );
};

export default MapHoverCountries;
