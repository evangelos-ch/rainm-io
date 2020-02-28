import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IconProps {
    name: IconProp;
    link?: string;
    text?: string;
}

const colors: KeyValue<string> = {
    discord: "#7289DA",
    twitter: "#38A1F3",
    github: "#FAFAFA",
    twitch: "#6441A5",
    steam: "#F3F3F3",
    youtube: "#FF0000",
    soundcloud: "#FF9533"
};

const Wrapper = styled.span`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    margin-top: 34px;
`;

interface IconWrapperProps {
    iname?: IconProp;
}

const IconWrapper = styled.a<IconWrapperProps>`
    font-size: 90px;
    text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    color: ${props => {
        if (!props.iname) return;

        let name = props.iname;
        if (Array.isArray(name)) {
            name = name[1];
        } else if (typeof name !== "string") return;

        if (name in colors) {
            return colors[name];
        }
    }};
    :hover {
        filter: drop-shadow(0px 3px 6px rgba(40, 165, 141, 0.6));
    }
    transition: 0.3s;
    line-height: 1px;
`;

const SubText = styled.span`
    font-size: 20px;
    color: ${props => props.theme.textColour};
    text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    margin-top: 10px;
`;

export const Icon: React.FC<IconProps> = props => {
    return (
        <Wrapper>
            <IconWrapper iname={props.name} href={props.link}>
                <FontAwesomeIcon icon={props.name} />
            </IconWrapper>
            {props.text && <SubText>{props.text}</SubText>}
        </Wrapper>
    );
};
