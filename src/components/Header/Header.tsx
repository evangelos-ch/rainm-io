import React, { useEffect, useCallback, useState } from "react";
import Logo from "./Logo.svg";
import styled, {css} from "styled-components";

interface IHeaderProps {
    collapsed: boolean
}

const Wrapper = styled.div<IHeaderProps>`
    display: flex;
    align-items: center;
    justify-content: ${props => props.collapsed ? "flex-start" : "center"};
    background: ${props => props.theme.backgroundHighlight};
    border-bottom: 3px ${props => props.theme.headerColor} solid;
    padding-top: ${props => props.collapsed ? "20px" : "50px"};
    padding-bottom: ${props => props.collapsed ? "20px" : "50px"};
    box-shadow: 0 3px 6px rgb(0, 0, 0, 0.16);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
`;

const LogoWrapper = styled.div<IHeaderProps>`
    transition: 0.5s;
    vertical-align: middle;
    width: ${props => props.collapsed ? "43px" : "135px"};
    height: ${props => props.collapsed ? "43px" : "135px"};
    ${props => props.collapsed && css`
        margin-left: 20px;
    `}
`;

const LogoText = styled.h1<IHeaderProps>`
    span.highlight {
        color: ${props => props.theme.headerColor};
    }
    font-size: ${props => props.collapsed ? "30px" : "100px"};
    color: ${props => props.theme.textColour};
    margin: 0 0 0 25px;
    text-shadow: 0 3px 6px rgb(0, 0, 0, 0.16);
    transition: 0.5s;
    ${props => props.collapsed && css`
        margin-left: 10px;
    `}
`;

export const Header: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const listener = useCallback(() => {
        const thresh = 100;
        setCollapsed(
            document.documentElement.scrollTop > thresh ||
                document.body.scrollTop > thresh
        );
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => window.removeEventListener("scroll", listener);
    }, [listener]);

    return (
        <Wrapper
            collapsed={collapsed}>
            <LogoWrapper
                collapsed={collapsed}
            >
                <img src={Logo} alt="Logo"/>
            </LogoWrapper>
            <LogoText
                collapsed={collapsed}
            >
                Rainm<span className={"highlight"}>.</span>io
            </LogoText>
        </Wrapper>
    );
};
