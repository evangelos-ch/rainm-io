import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        primaryColor: string;
        background: string;
        backgroundHighlight: string;
        headerColor: string;
        textHighlight: string;
        textColour: string;
    }
}
