import * as React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import mainTheme from "../themes/main-theme";
import { Header } from "./Header";
import { Heading, Paragraph, SubHeading, ColouredLink } from "./Text";
import { Container } from "./General";
import { Icon } from "./Socials";

const GlobalStyle = createGlobalStyle`
    body {
        background: ${props => props.theme.background};
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
    }
`;

const SocialRow = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;

export const App: React.FC = () => {
    return (
        <ThemeProvider theme={mainTheme}>
            <>
                <Header />
                <Container
                    style={{
                        marginTop: 300,
                        paddingBottom: 150
                    }}
                >
                    <Heading>Greetings! I'm Rain.</Heading>
                    <Paragraph>
                        Well, not the literal weather phenomenon, but you get
                        the point.{" "}
                    </Paragraph>
                    <Paragraph>
                        In real life, I'm Evangelos, a 21 year old nerd from
                        Athens, studying Computer Science in Guildford, England. But on the internet... I am:
                    </Paragraph>
                    <SocialRow>
                        <Icon name={["fab", "discord"]} text="Rain#8710" />
                        <Icon
                            name={["fab", "twitter"]}
                            text="@RainAnnen"
                            link="https://twitter.com/RainAnnen"
                        />
                        <Icon
                            name={["fab", "github"]}
                            text="evangelos-ch"
                            link="https://github.com/evangelos-ch"
                        />
                        <Icon
                            name={["fab", "twitch"]}
                            text="ra1nm_"
                            link="https://twitch.tv/ra1nm_ "
                        />
                        <Icon
                            name={["fab", "steam"]}
                            text="Rain"
                            link="https://steamcommunity.com/id/ra1nm/"
                        />
                        <Icon
                            name={["fab", "youtube"]}
                            text="Rain M"
                            link="https://www.youtube.com/channel/UCD1PW3tMmMpFGBBvLYd6LMg"
                        />
                        <Icon
                            name={["fab", "soundcloud"]}
                            text="RainM"
                            link="https://soundcloud.com/rainmkr/"
                        />
                    </SocialRow>

                    <Heading>Hobbies</Heading>
                    <Paragraph>
                        Thankfully I was able to get into a lot of things over
                        the years, and I still continue to pursue most of them
                        to some extent.
                    </Paragraph>

                    <SubHeading>Languages & Translation</SubHeading>
                    <Paragraph>
                        Nowadays, I am mainly into learning languages and
                        translation. I can already speak Greek, English and
                        German. While I'm still trying to master that last one,
                        I am also studying Japanese at an advanced level and
                        translate Visual Novels for{" "}
                        <ColouredLink href="https://dareno.me">
                            Committee of Zero
                        </ColouredLink>{" "} and
                        <ColouredLink colour="#4CF89A" href="https://github.com/Hollow-Moon">
                            Hollow Moon
                        </ColouredLink>{" "}
                        and Manga for{" "}
                        <ColouredLink
                            colour="#097DB3"
                            href="https://arc-relight.com"
                        >
                            Arc-Relight
                        </ColouredLink>
                        . I also sometimes translate and gather news for{" "}
                        <ColouredLink
                            colour="#D9B41E"
                            href="https://kirikiribasara.com"
                        >
                            KiriKiriBasara
                        </ColouredLink>
                        .
                    </Paragraph>

                    <SubHeading>Music</SubHeading>
                    <Paragraph>
                        In the past, I used to play the piano on a relatively
                        high level and then moved onto producing music. While
                        currently I'm not musically active, I am very proud of
                        what little music I did release, which you can listen to
                        on my{" "}
                        <ColouredLink
                            href="https://soundcloud.com/rainmkr/"
                            colour="#FF9533"
                        >
                            SoundCloud
                        </ColouredLink>
                        . And who knows, maybe I will release more in the
                        future.
                    </Paragraph>

                    <SubHeading>Video games & Streaming</SubHeading>
                    <Paragraph>
                        And of course, I'm still super passionate about video
                        games and doubt that will ever change. Nowadays in my
                        (very little) free time, I play various FPS games and
                        RPGs. I also sometimes stream them on{" "}
                        <ColouredLink
                            href="https://twitch.tv/ra1nm_"
                            colour="#6441A5"
                        >
                            Twitch
                        </ColouredLink>
                        . Though my main streaming content is newer releases in
                        Japanese, so that western fans can see the game and get
                        information about it.
                    </Paragraph>
                </Container>
                <GlobalStyle />
            </>
        </ThemeProvider>
    );
};
