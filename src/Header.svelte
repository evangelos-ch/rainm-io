<script lang="ts">
    import logo from './assets/Logo.svg'
    import { spring } from 'svelte/motion';

    const THRESHOLD = 200

    let y: number
    $: updateSprings(y)
    $: headerJustify = y < THRESHOLD ? "center" : "flex-start"

    let logoStyle = spring({
        size: 135,
        margin: 0,
    })

    let headerStyle = spring({
        padding: 50,
        fontSize: 100,
        margin: 25
    })

    const updateSprings = (scrollY: number) => {
        const yRatio = Math.min(scrollY / THRESHOLD, 1)
        logoStyle.set({
            size: 135 - 92 * yRatio,
            margin: 0 + 20 * yRatio
        })
        headerStyle.set({
            padding: 50 - 30 * yRatio,
            fontSize: 100 - 60 * yRatio,
            margin: 25 - 15 * yRatio
        })
    }
</script>

<svelte:window bind:scrollY={y}/>

<header style="--padding: {$headerStyle.padding}px; --justify-content: {headerJustify}">
    <img src={logo} alt="💧" id="logo" style="--size: {$logoStyle.size}px; --margin: {$logoStyle.margin}px"/>
    <h1 style="--font-size: {$headerStyle.fontSize}px; --margin: {$headerStyle.margin}px">
        Rainm<span class="highlight">.</span>io
    </h1>
</header>

<style lang="scss">
    @import "assets/scss/theme";

    header {
        display: flex;
        justify-content: var(--justify-content, "center");
        align-items: center;
        background: $backgroundHighlight;
        border-bottom: 3px $headerColor solid;
        box-shadow: $shadow;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;
        padding: var(--padding) 0;
    }

    img {
        vertical-align: middle;
        width: var(--size);
        height: var(--size);
        margin-left: var(--margin);
    }

    h1 {
        span.highlight {
            color: $headerColor;
        }
        color: $textColour;
        margin: 0;
        text-shadow: $shadow;
        font-size: var(--font-size);
        margin-left: var(--margin);
    }
</style>