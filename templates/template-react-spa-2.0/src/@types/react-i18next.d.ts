import "react-i18next";
import enUS from "~/languages/enUS/common.json";
import ptBR from "~/languages/ptBR/common.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      ["en-US"]: typeof enUS;
      ["pt-BR"]: typeof ptBR;
    };
  }
}
