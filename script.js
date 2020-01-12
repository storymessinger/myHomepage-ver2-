const displace = window.displacejs;

var font = JSON.parse(document.getElementById('font').innerHTML);

var textbox = Renderer.createTextbox({
  font,
  size: 100,
  id: `textbox-_DF6G3`,
  text: 'HAPPY\nBIRTHDAY'
});

for (var i=0; i<videoList.length; i++) {
  addVid(videoList[i]);
}

var moveCount = 0;
var cancelClick = false;
var zInc = 11;


function addVid (name) {

  var card = document.createElement('div');
  card.setAttribute('id', name);
  card.setAttribute('class', 'card');

  var vidBox = document.createElement('div');
  vidBox.setAttribute('class', 'vid-box');
  card.appendChild(vidBox);

  var vid = document.createElement('video');
  vid.setAttribute('src', '/videos/'+name);
  vid.setAttribute('height', 300);
  vid.setAttribute('loop', "true");
  vidBox.appendChild(vid);
  
  var shadow = document.createElement('div');
  shadow.classList.add('shadow');
  card.appendChild(shadow);



  card.addEventListener('click', function(){
    if (cancelClick) {
      card.classList.remove('mousedown');
      cancelClick = false;
      return;
    }

    if (vid.paused) {
      vid.play();
      card.classList.add('playing');
    }
    else {
      vid.pause();
      card.classList.remove('playing');
    }
    
  })

  card.addEventListener('mouseenter', function() {

    // Animate card
    if (!card.classList.contains('animating')) {
      card.classList.add('animating');
      setTimeout(function(){
        card.classList.remove('animating');
      }, 400);
    }

    // Increment z-index
    var styleStrList = card.getAttribute('style').split(/z-index:.*;/);
    styleStrList.push('z-index: ' + zInc++ +';');
    var styleStr = styleStrList.join('');
    card.setAttribute('style',styleStr);
  });

  card.addEventListener('mousedown', function() {
    card.classList.add('mousedown');
  });

  card.addEventListener('mouseup', function() {
    card.classList.remove('mousedown');
    moveCount = 0;
  });

  var maxY = window.innerHeight - 300;
  var maxX = window.innerWidth - 300;
  card.setAttribute('style', 'left: '+maxX*Math.random()+'px; top: '+maxY*Math.random()+'px;'); 

  document.querySelector('.cards-container').appendChild(card);

  displace(card, {
    constrain: true,
    relativeTo: document.querySelector('.cards-container'),
    onMouseMove: function() {
      moveCount++;
      if (moveCount > 10) cancelClick = true;
    }
  })
  
  
}
Renderer.start({
  container: window,
  data: {
    textboxList: [textbox],
    fontList: [font],
  },
  textureUrl: '/font-textures',
  pixelRatio: 1
});