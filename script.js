let player;
function fnccr(event) {
  const tag = document.createElement("script");

  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  event.target.remove();
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player("playerLayer", {
    width: "256", //320 384 256
    height: "144", //180 216 144
    videoId: "jlwCOYs7OvE",
    playerVars: {
      autoplay: 1, // 자동실행여부
      controls: 0, // 재생컨트롤 노출여부
      rel: 0, // 동영상 재생완료 후 유사동영상 노출여부
      disablekb: 1,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// 유튜브 플레이어가 다 만들어지면 호출됨
function onPlayerReady(event) {
  // 자동으로 플레이하는 코드
  console.log("loaded");
}

// 동영상의 재생이 완료되었을 때 호출됨
function onPlayerStateChange(event) {
  if (event.data === 0) {
    // 종료 후 작업을 여기에 코딩
    console.log("end");
  }
}
function fncpp(event) {
  if (event.target.innerText === "Play") {
    player.playVideo();
    event.target.innerText = "Pause";
  } else {
    player.pauseVideo();
    event.target.innerText = "Play";
  }
}
function fnciv(event) {
  const pdiv = document.getElementById("playerLayer");
  if (event.target.innerText === "Invisible") {
    pdiv.className = "invisible";
    event.target.innerText = "Visible";
  } else {
    pdiv.className = "";
    event.target.innerText = "Invisible";
  }
}
document.getElementById("buttpp").addEventListener("click", fncpp);
document.getElementById("buttiv").addEventListener("click", fnciv);
document.getElementById("buttcr").addEventListener("click", fnccr);
document.body.addEventListener("contextmenu", (event) =>
  event.preventDefault()
);
document.getElementById("buttpp").addEventListener("mousedown", (event) => {
  if (event.button == 2) {
    console.log("you");
  }
});
document
  .getElementById("sectionB")
  .addEventListener("dblclick", (event) => console.log("double"));
//history1
