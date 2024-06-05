import { AiHand, SealAgent } from "@/public/index";
import * as NewProductSvgImport from "@/public/new-product-logos";
import * as erpLogoSvgImports from "@/public/erp";
import * as cloudSvgLogosImports from "@/public/cloud";
import * as programmingLanguagesSvgImports from "@/public/programming-languages";
import * as frameWorkAndToolsSvgImports from "@/public/framework";
import * as cloudSvgImports from "@/public/cloud-2";
import * as dataSvgImports from "@/public/database";
import * as mobileAppSvgImports from "@/public/mobile-app";
import * as erpSvgImports from "@/public/erp-2";
import * as cloudDataLogoSvg from "@/public/cloud-data-storage";
import * as dataVisualizationSvgImports from "@/public/data-visualization";
import * as aiInfastructureSvgImports from "@/public/ai-infastructure";
import * as dataWareHouseSvgImports from "@/public/data-warehouse";
import * as dataServiceSvgImports from "@/public/data-service";
import * as cloudDataStorageLogoImports from "@/public/cloud-storage";

const newProductSvg = Object.values(NewProductSvgImport);
const erpLogoSvgs = Object.values(erpLogoSvgImports);
const cloud0Svgs = Object.values(cloudSvgLogosImports);
const programmingLanguagesSvg = Object.values(programmingLanguagesSvgImports);
const frameWorkAndToolsSvg = Object.values(frameWorkAndToolsSvgImports);
const cloudSvg = Object.values(cloudSvgImports);
const databaseSvg = Object.values(dataSvgImports);
const mobileAppSvg = Object.values(mobileAppSvgImports);
const erpSvg = Object.values(erpSvgImports);
const cloudDataSvgs = Object.values(cloudDataLogoSvg);
const dataVisualizationSvgs = Object.values(dataVisualizationSvgImports);
const aiInfastructureSvg = Object.values(aiInfastructureSvgImports);
const dataWareHouseSvg = Object.values(dataWareHouseSvgImports);
const dataServiceSvg = Object.values(dataServiceSvgImports);
const cloudDataStorageSvg = Object.values(cloudDataStorageLogoImports);

export const SERVICE_PAGE_DATA = {
  "hero section": {
    title: "Artificial Intelligence as Business Solution",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    image: AiHand,
  },
  "services and technology section": {
    title: "Services and Technology",
    items: {
      "list item 1": {
        title: "New Products",
        content: {
          "1": "New product development & testing (Web, Windows, Android, iOS)",
          "2": "Major enhancement & replacement implementation (e.g. Intellisync, Snapshot Mobile)",
        },
        logos: [...newProductSvg],
      },
      "list item 2": {
        title: "ERP (SAP, Oracle, Dynamic 365)",
        content: {
          "1": "All level support (L1, L2, L3)",
          "2": "Bug fixing & change request implementation",
        },
        logos: [...erpLogoSvgs],
      },
      "list item 3": {
        title: "Cloud, Data Analytics, AI/ML",
        content: {
          "1": "Migrate Application to Micro-service",
          "2": "Architecture and deploy in OEC platform",
          "3": "Continuous Integration (CI)",
          "4": "Continuous Delivery (CD)",
          "5": "Continuous Testing (CT)",
          "6": "Metric, Monitoring & Logging (e.g: Snapshot (IT); OEC, iEnergy (Landmark)",
        },
        logos: [...cloud0Svgs],
      },
    },
  },
  "become a seal": {
    sealImage: SealAgent,
    title: "How may our SEALs be of help to you?",
    button: {
      text: "Talk to the SEALs",
      link: "*",
    },
  },
  developers: {
    "list item 1": {
      amount: 100,
      title: "Java developers",
    },
    "list item 2": {
      amount: 50,
      title: "Python developers",
    },
    "list item 3": {
      amount: 200,
      title: "API developers",
    },
    "list item 4": {
      amount: 150,
      title: "Mobile developers",
    },
    "list item 5": {
      amount: 50,
      title: "Web developers",
    },
  },
  infastructures: {
    "list item 1": {
      title: "Programming languages",
      content:
        "PHP, Java, .NET, ReactJS, Python, Angular J, HTML, CSS, Node.js, Ruby on Rails, C/C++, Golang, Cobol.",
      logos: [...programmingLanguagesSvg],
    },
    "list item 2": {
      title: "Cloud",
      content:
        "AWS, Azure, Google Cloud, Digital Ocean, Oracle Cloud, IBM Cloud",
      logos: [...cloudSvg],
    },
    "list item 3": {
      title: "Database",
      content: "Oracle Database, MySQL, SQL Server, DataBricks",
      logos: [...databaseSvg],
    },
    "list item 4": {
      title: "Frameworks & Tools",
      content:
        "Spring, Spring boot, Bootstrap, Hibernate TE, Logback/log4j2, ASP.NET, Lavarel",
      logos: [...frameWorkAndToolsSvg],
    },
    "list item 5": {
      title: "Mobile App",
      content:
        "Android, iOS, Java, Swift, Objective-C, Flutter, React Native, Kotlin, Dart",
      logos: [...mobileAppSvg],
    },
    "list item 6": {
      title: "ERP",
      content: "Salesforce, SAP, Odoo, Oracle, Dynamics 365",
      logos: [...erpSvg],
    },
  },
  "Data Engineering section": {
    title: "Data Engineering & Advanced Analytics / Business Intelligence Capabilities",
    "column 1": {
      "list item 1": {
        title: "Advisory & Consulting",
        content: {
          "1": "Analytics vision & Use cases assessment",
          "2": "Evaluate new approaches & define future analytics architecture",
          "3": "Analytics roadmap, organization, budget",
        },
      },
      "list item 2": {
        title: "Data Integration",
        content: {
          "1": "Bespoke Analytics",
          "2": "Applications development",
        },
      },
      "list item 4": {
        title: "Cloud Data Storage",
        logos: [...cloudDataSvgs],
      },
      "list item 5": {
        title: "Data Visualisation",
        logos: [...dataVisualizationSvgs],
      },
    },
    "column 2": {
      "list item 1": {
        title: "Data Operation",
        content: {
          "1": "Environment design/implementation & monitoring",
          "2": "Semantic rule & metadata definition (ontology)",
          "3": "Data pipeline development & operation",
          "4": "Data Quality Management",
          "5": "Metadata Management",
          "6": "Data Security & Governance",
          "7": "Data Integration",
          "8": "Data Processing",
        },
      },

      "list item 2": {
        title: "AI Infrastructure",
        logos: [...aiInfastructureSvg],
      },
      "list item 3": {
        title: "Data Warehouse Technologies",
        logos: [...dataWareHouseSvg],
      },
    },
    "column 3": {
      "list item 1": {
        title: "Data Analytics & AI",
        content: {
          "1": "Time series forecasting",
          "2": "Recommendation system",
          "3": "Computer vision",
          "4": "Speech processing",
          "5": "Natural language processing",
          "6": "Dashboards & Reports",
          "7": "Data Integration",
          "8": "Design & Implementation",
        },
      },

      "list item 2": {
        title: "Data Services",
        logos: [...dataServiceSvg],
      },
      "list item 3": {
        title: "Cloud Data Storage",
        logos: [...cloudDataStorageSvg],
      },
    },
  },
};
