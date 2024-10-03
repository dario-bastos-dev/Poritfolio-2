import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      textWhite: string;
      gray: string;
      blue1: string;
      blue2: string;
      blue3: string;
      blue4: string;
    };
    fontSize: {
      small: string;
      text: string;
      subtitle: string;
      title: string;
      button: string;
    };
    font: {
      ubunto: string;
      openSans: string;
    };
    shadows: {
      shadow1: string;
      shadowBlack1: string;
      shadowWhite: string;
      shadowBlack2: string;
      shadowBlack3: string;
      shadowWhite3: string;
      shadowBlack4: string;
      shadowWhite4: string;
    };
  }
}
