import styled from "styled-components";

export const Heading = styled.h2`
    color: ${props => props.theme.headerColor};
    font-size: 30px;
    margin: 30px 0 0 0;
`;

export const SubHeading = styled.h3`
    color: ${props => props.theme.headerColor};
    font-size: 28px;
    margin: 27px 0 0 0;
`;

export const Paragraph = styled.p`
    color: ${props => props.theme.textColour};
    span.highlight {
        color: ${props => props.theme.textHighlight};
    }
    margin: 10px 0 0 0;
    font-size: 20px;
`;

interface ColouredLinkProps {
    colour?: string;
}

export const ColouredLink = styled.a<ColouredLinkProps>`
    color: ${props =>
        props.colour ? props.colour : props.theme.textHighlight};
    :hover {
        color: white;
    }
    transition: 0.2s;
    text-decoration: none;
`;
