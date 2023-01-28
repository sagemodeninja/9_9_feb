import { PlayingStatus } from "./enums";

interface ITimelineObject {
    play () : void;
}

export class Timeline implements ITimelineObject {
    playingStatus: PlayingStatus;
    duration: number;
    frameInterval: number;
    lastFrameTime: number = 0;
    frame: number = 0;

    constructor () {
        this.frameInterval = 1000 / 60;
        this.playingStatus = PlayingStatus.Paused;

        this.play = this.play.bind(this);
    }

    play() {
        // const elapsedTime = performance.now() - this.lastFrameTime;

        // if (this.playingStatus === PlayingStatus.Playing && elapsedTime >= this.frameInterval)
        // {
        //     if ((this.frame += 1) > 60)
        //         this.frame = 0;

        //     this.lastFrameTime = performance.now();
        // }
        
        // requestAnimationFrame(this.play);
    }
}