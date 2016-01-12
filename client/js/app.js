var player;
var video = 0;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    playerVars: {
      controls: 0,
      showinfo: 0
    },
    events: {
      'onReady': loadVideo,
      'onStateChange': stateListener
    }
    }
  );
}

function loadVideo(){
  var vidId;
  var startSeconds;
  var endSeconds;
  switch(video){
    case 0:
      console.log('Rick');
      vidId = '6NYY5yUaLbY';
      startSeconds = 145;
      endSeconds = 155;
      break;
    case 1:
      console.log('Gopher');
      vidId = '8lXdyD2Yzls';
      startSeconds = 0;
      endSeconds = 4;
      break;
    case 2:
      console.log('Harlem');
      vidId = '4hpEnLtqUDg';
      startSeconds = 18;
      endSeconds = 22;
      break;
    case 3:
      console.log('nonono cat');
      vidId = 'oKI-tD0L18A';
      startSeconds = 5;
      endSeconds = 8;
      break;
    case 4:
      console.log('numa');
      vidId = 'KmtzQCSh6xk';
      startSeconds = 17;
      endSeconds = 20;
      break;
    case 5:
      console.log('star wars');
      vidId = '3GJOVPjhXMY';
      startSeconds = 9;
      endSeconds = 14;
      break;
    case 6:
      console.log('chocolate rain');
      vidId = 'EwTZ2xpQwpA';
      startSeconds = 54;
      endSeconds = 60;
      break;
    case 7:
      console.log('hide your kids');
      vidId = '4ldrVIIAUoY';
      startSeconds = 60 + 47;
      endSeconds = 60 + 57;
      break;
    case 8:
      console.log('baby');
      vidId = '-5x5OXfe9KY';
      startSeconds = 3;
      endSeconds = 7;
  }

  player.loadVideoById({
    'videoId': vidId,
    'startSeconds': startSeconds,
    'endSeconds': endSeconds,
    'suggestedQuality': 'large'
    }
  );
}

function stateListener(event){
  var state;
  switch(event.data){
    case -1:
      state = 'unstarted';
      break;
    case YT.PlayerState.ENDED:
      state = 'ended';
      break;
    case YT.PlayerState.PLAYING:
      state = 'playing';
      break;
    case YT.PlayerState.PAUSED:
      state = 'paused';
      break;
    case YT.PlayerState.BUFFERING:
      state = 'buffering';
      break;
    case YT.PlayerState.CUED:
      state = 'cued';
      break;
  }
  console.log('Current url: ' + event.target.B.videoUrl);
  console.log('Current State: ' + state);
  if(event.data == YT.PlayerState.PAUSED){
    video++;
    if(video > 8){
      video = 0;
    }
    loadVideo();
  }
}


