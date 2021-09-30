<script lang="ts">
    import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'
    import Fa from 'svelte-fa'

    export let link: string = null
    export let icon: IconDefinition
    export let iconColour: string
    export let text: string = null
</script>

<div>
    <a href={link} style="--colour: {iconColour}">
        <Fa {icon}/>
    </a>
    {#if text}
        <p>{text}</p>
    {/if}
</div>

<style lang="scss">
    @import "assets/scss/theme";

    div {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        margin-top: 34px;
    }

    a {
        font-size: 90px;
        text-shadow: $shadow;
        transition: ease-out 0.3s;
        line-height: 1px;
        color: var(--colour);

        &:hover {
            filter: drop-shadow($hover-shadow);
        }
    }

    p {
        font-size: 20px;
        color: $textColour;
        text-shadow: $shadow;
        margin-top: 10px;
    }
</style>