<script lang="ts">
  import Header from "./Header.svelte"
  import SocialIcon from "./SocialIcon.svelte";
  import { faDiscord, faTwitter, faGithub, faTwitch, faSteam, faYoutube, faSoundcloud } from "@fortawesome/free-brands-svg-icons"
</script>

<Header/>
<main>
  <h2>Greetings! I'm Rain.</h2>
  <p>
    In real life, I'm Evangelos, a 22 year old nerd from Athens, 
    studying Computer Science in Guildford, England. But on the internet... I am:
  </p>
  <div class="socials">
    <SocialIcon icon={faDiscord} iconColour="#7289DA" text="Rain#8710"/>
    <SocialIcon link="https://twitter.com/RainAnnen" icon={faTwitter} iconColour="#38A1F3" text="@RainAnnen"/>
    <SocialIcon link="https://github.com/evangelos-ch" icon={faGithub} iconColour="#FAFAFA" text="evangelos-ch"/>
    <SocialIcon link="https://twitch.tv/ra1nm_" icon={faTwitch} iconColour="#6441A5" text="ra1nm_"/>
    <SocialIcon link="https://steamcommunity.com/id/ra1nm/" icon={faSteam} iconColour="#F3F3F3" text="Rain"/>
    <SocialIcon link="https://www.youtube.com/channel/UCD1PW3tMmMpFGBBvLYd6LMg" icon={faYoutube} iconColour="#FF0000" text="Rain M"/>
    <!--<SocialIcon link="https://soundcloud.com/rainmkr/" icon={faSoundcloud} iconColour="#FF9533" text="@RainAnnen"/>-->
  </div>

  <h2>Hobbies</h2>
  <p>Thankfully I was able to get into a lot of things over the years, and I still continue to pursue most of them to some extent.</p>
  <h3>Languages & Translation</h3>
  <p>
    Nowadays, I am mainly into learning languages and translation. I can already speak Greek, English and German. 
    While I'm still trying to master that last one, I am also studying Japanese at an advanced level and 
    translate Visual Novels for <a href="https://sonome.dareno.me">Committee of Zero</a> and 
    <a href="https://hollow-moon.org" style="--colour: #4CF89A">Hollow Moon</a> and Manga for 
    <a href="https://arc-relight.com" style="--colour: #097DB3">Arc-Relight</a>. I also sometimes translate and gather news for 
    <a href="https://kirikiribasara.com" style="--colour: #D9B41E">KiriKiriBasara</a>.
  </p>
  <!--<h3>Music</h3>
  <p> In the past, I used to play the piano on a relatively high level and then moved onto producing music. While currently I'm not 
    musically active, I am very proud of what little music I did release, which you can listen to on my 
    <a href="https://soundcloud.com/rainmkr/" style="--colour: #FF9533">SoundCloud</a>. And who knows, maybe I will release more in the 
    future.
  </p>-->
  <h3>Programming</h3>
  <p>
    I'm currently pursuing a PhD in Computer Science, primarily focused on Reinforcement Learning. I am primarily doing research on its application to
    complex networks and specifically bioinformatics. If this sounds interesting to you to any extent please reach out to me on Discord, I'm always
    eager to talk research or take on new projects.
  </p>
  <h3>Video Games & Streaming</h3>
  <p>
    And of course, I'm still super passionate about video games and doubt that will ever change. Nowadays in my (very little) free time, 
    I play various FPS games and RPGs. I also sometimes stream them on <a href="https://twitch.tv/ra1nm_" style="--colour: #6441A5">Twitch</a>.
    Though my main streaming content is newer releases in Japanese, so that western fans can see the game and get information about it.
  </p>
</main>

<style lang="scss">
  .socials {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  main {
    padding: 0 15px 150px 15px;
    margin: 300px auto 0 auto;

    @media (min-width: 768px) {
        width: 750px;
    }

    @media (min-width: 992px) {
        width: 970px;
    }

    @media (min-width: 1200px) {
        width: 1170px;
    }
  }
</style>
