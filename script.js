var enabled = localStorage.getItem('videoEnabled') === 'true' || false;
let player;

function disenableVideo() {
  if (enabled) {
    player.unMute();
    const videoElement = player.getIframe();
    videoElement.style.visibility = 'visible';
  } else {
    player.mute();
    const videoElement = player.getIframe();
    videoElement.style.visibility = 'hidden';
  }
}

function onPlayerReady(event) {
  player = event.target;
  disenableVideo();

  const button = document.getElementById('enablingbutton');

  button.addEventListener('click', () => {
    enabled = !enabled;
    disenableVideo();
    localStorage.setItem('videoEnabled', enabled.toString());
  });
}

function loadYouTubeIframeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
    tag.onload = () => {
      tag.remove();
    };
  }
  
  loadYouTubeIframeAPI();




// Miniplayer = miniplayer style-scope ytd-miniplayer
// Video player = <div id="player" class=style-"scope ytd-watch-flexy">
