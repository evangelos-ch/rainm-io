import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
import { faTwitch } from "@fortawesome/free-brands-svg-icons/faTwitch";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faSteam } from "@fortawesome/free-brands-svg-icons/faSteam";
import { faSoundcloud } from "@fortawesome/free-brands-svg-icons/faSoundcloud";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";

// FA Imports
library.add(
    faDiscord,
    faTwitter,
    faGithub,
    faTwitch,
    faSteam,
    faSoundcloud,
    faYoutube
);

ReactDOM.render(<App />, document.getElementById("root"));
