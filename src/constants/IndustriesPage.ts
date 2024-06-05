import { IndustryImageHero, MapIndustry } from "@/public/index";
import {
  BitcoinSvg,
  CarSvg,
  CpuSettingsSvg,
  CraneSvg,
  DollarCircleSvg,
  HospitalSvg,
  ShoppingCartSvg,
  TruckFastSvg,
} from "@/public/industries-icon";

export const INDUSTRIES_PAGE_DETAILS = {
  hero: {
    title: "SOLUTION FOR GLOBAL INDUSTRIES",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    image1: MapIndustry,
    image2: IndustryImageHero,
  },
  "sub section": {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    listItems: [
      {
        icon: HospitalSvg,
        title: "Healthcare",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        icon: CraneSvg,
        title: "Construction",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        icon: CpuSettingsSvg,
        title: "Manufacturing",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        icon: DollarCircleSvg,
        title: "Banking",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        icon: TruckFastSvg,
        title: "Automative",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        icon: BitcoinSvg,
        title: "New Technology",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        icon: TruckFastSvg,
        title: "Transportation",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        icon: ShoppingCartSvg,
        title: "Retail & Ecommerce",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
    ],
  },
};
