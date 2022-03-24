var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var ytPlayerManager = (function YTPlayerManager() {
  var players = [],
      PLAYING = 1;

  function register(id) {
    players.push({
      id: id,
      player: makePlayer(id)
    });
  }

  function makePlayer(id) {
      return new YT.Player(id, {
        events: {
          'onStateChange': function(event) {
            if(event.data == PLAYING) {
              videoPlaying(id);
            }
          }
        }
      });
  }

  function videoPlaying(id) {
    players.forEach(function(item) {
      if(item.id !== id) {
        item.player.pauseVideo();
      }
    });
  }

  return { register };
})();

function onYouTubeIframeAPIReady() {
  ytPlayerManager.register("aFzg1BM9NGI");
  ytPlayerManager.register("Ua0ouxszJS0");
  ytPlayerManager.register("XvGeoY26DZQ");
}