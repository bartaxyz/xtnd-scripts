let YT: any;
let player: any;
let video: HTMLDivElement | null;
let playButton: HTMLDivElement | null;
let pauseButton: HTMLDivElement | null;

const initMedia = () => {
  video = document.querySelector("#intro-video");
  playButton = document.querySelector("[data-component=introPlayButton]");
  pauseButton = document.querySelector("[data-component=introPauseButton]");

  if (!video || !playButton || !pauseButton) {
    return;
  }

  playButton.addEventListener("click", playVideo);
  pauseButton.addEventListener("click", pauseVideo);

  video.style.display = "block";

  pauseVideo();
};

const disableScrolling = () => {
  document.body.style.height = "100%";
  document.body.style.overflow = "hidden";
};
const enableScrolling = () => {
  document.body.style.height = "";
  document.body.style.overflow = "";
};

const playVideo = () => {
  pauseButton!.style.display = "flex";
  playButton!.style.display = "none";
  video!.style.opacity = "1";
  video!.style.pointerEvents = "";
  if (player) {
    player.playVideo();
  }
  disableScrolling();
};
const pauseVideo = () => {
  playButton!.style.display = "flex";
  pauseButton!.style.display = "none";
  video!.style.opacity = "0";
  video!.style.pointerEvents = "none";
  if (player) {
    player.stopVideo();
  }
  enableScrolling();
};

addEventListener("DOMContentLoaded", () => {
  // Init Youtube API
  const tag = document.createElement("script");

  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag!.parentNode!.insertBefore(tag, firstScriptTag);

  // Init custom media script
});

const initIntroVideoPlayer = () => {
  player = new YT.Player("intro-video", {
    height: "100%",
    width: "100%",
    videoId: "C-VqyDHpsf0",
    playerVars: {
      controls: 0
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });

  initMedia();
};

const onPlayerReady = (event: any) => {
  // event.target.playVideo();
};

const onPlayerStateChange = (event: any) => {
  if (event.data == YT.PlayerState.PLAYING) {
    console.log("playing");
  }
};

(window as any).onYouTubeIframeAPIReady = () => {
  console.log("onYouTubeIframeAPIReady");
  initIntroVideoPlayer();
};
