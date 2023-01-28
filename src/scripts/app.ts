import { Sender, PlayingStatus } from "./enums";
import { Timeline } from "./timeline"
import { Conversation } from "./convo";

var test : HTMLElement;
var convoCanvas : HTMLElement;
var playButton : HTMLButtonElement;
var convo : Conversation[];
var timeline: Timeline;

document.addEventListener("DOMContentLoaded", async () => {
    test = document.querySelector("#test");
    convoCanvas = document.querySelector("#convo-canvas");
    playButton = document.querySelector("#play-button");

    convo = await Conversation.fetch("./public/json/convo.json");
    timeline = new Timeline();

    timeline.play();

    playButton.addEventListener("click", () => {
        if (timeline.playingStatus === PlayingStatus.Paused)
            timeline.playingStatus = PlayingStatus.Playing;
        else
            timeline.playingStatus = PlayingStatus.Paused;
    });

    convo.forEach(convo => {
        let thread = document.createElement("span");
        let sender = Sender[convo.sender].toLowerCase();

        thread.classList.add("thread");
        thread.classList.add(sender);
        thread.innerText = convo.message;

        convoCanvas.appendChild(thread);
    });

    document.body.addEventListener("wheel", e => {
        let delta = Math.min(1, Math.max(-1, e.deltaY));
        test.innerText = delta.toString();
    });
});