import React, { useEffect, useCallback } from "react";
import Logo from "./Logo.svg";
import styled from "styled-components";
import { useSpring, animated, interpolate } from "react-spring";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.backgroundHighlight};
    border-bottom: 3px ${props => props.theme.headerColor} solid;
    box-shadow: 0 3px 6px rgb(0, 0, 0, 0.16);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
`;

const LogoWrapper = styled.div`
    vertical-align: middle;
`;

const LogoText = styled.h1`
    span.highlight {
        color: ${props => props.theme.headerColor};
    }
    color: ${props => props.theme.textColour};
    margin: 0;
    text-shadow: 0 3px 6px rgb(0, 0, 0, 0.16);
`;

const AnimatedWrapper = animated(Wrapper);
const AnimatedLogoWrapper = animated(LogoWrapper);
const AnimatedLogoText = animated(LogoText);

const THRESHOLD = 200;

export const Header: React.FC = () => {
    const [{ scrollTop }, set] = useSpring(() => ({ scrollTop: 0 }));

    const interpLogoSize = interpolate(
        [scrollTop],
        o => 135 - 92 * Math.min(o / THRESHOLD, 1)
    );

    const interpHeaderPadding = interpolate(
        [scrollTop],
        o => 50 - 30 * Math.min(o / THRESHOLD, 1)
    );

    const interpHeaderFontSize = interpolate(
        [scrollTop],
        o => 100 - 60 * Math.min(o / THRESHOLD, 1)
    );

    const interpHeaderTextMargin = interpolate(
        [scrollTop],
        o => 25 - 15 * Math.min(o / THRESHOLD, 1)
    );

    const interpLogoMargin = interpolate(
        [scrollTop],
        o => 0 + 20 * Math.min(o / THRESHOLD, 1)
    );

    // TODO handle this better
    const interpAlignment = interpolate([scrollTop], o =>
        o / THRESHOLD >= 1 ? "flex-start" : "center"
    );

    const listener = useCallback(() => {
        set({ scrollTop: document.documentElement.scrollTop });
    }, [set]);

    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => window.removeEventListener("scroll", listener);
    }, [listener]);

    return (
        <AnimatedWrapper
            style={{
                paddingTop: interpHeaderPadding,
                paddingBottom: interpHeaderPadding,
                justifyContent: interpAlignment
            }}
        >
            <AnimatedLogoWrapper
                style={{
                    width: interpLogoSize,
                    height: interpLogoSize,
                    marginLeft: interpLogoMargin
                }}
            >
                <img src={Logo} alt="Logo" />
            </AnimatedLogoWrapper>
            <AnimatedLogoText
                style={{
                    fontSize: interpHeaderFontSize,
                    marginLeft: interpHeaderTextMargin
                }}
            >
                Rainm<span className={"highlight"}>.</span>io
            </AnimatedLogoText>
        </AnimatedWrapper>
    );
};
