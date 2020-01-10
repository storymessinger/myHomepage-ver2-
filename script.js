const displace = window.displacejs;


var font = JSON.parse(document.getElementById('font').innerHTML);

var textbox = Renderer.createTextbox({
  font,
  size: 100,
  id: `textbox-_DF6G3`,
  text: 'HAPPY\nBIRTHDAY'
});

// var canvas = document.createElement('canvas');
// canvas.width = 300;
// canvas.height = 300;
// var ctx = canvas.getContext('2d');


for (var i=0; i<8; i++) {
  addVid('jundong-comp_'+i);
}




function addVid (name) {
  var vid = document.createElement('video');
  vid.setAttribute('src', '/videos/'+name+'.mp4');
  vid.setAttribute('height', 300);
  vid.setAttribute('autoplay', true);
  vid.setAttribute('webkit-playsinline', true);
  vid.setAttribute('playsinlinee', true);


  var vidBox = document.createElement('div');
  vidBox.setAttribute('id', name);
  vidBox.setAttribute('class', 'vid-box');
  vidBox.appendChild(vid);


  vidBox.addEventListener('mouseenter', function(){
    // attach video
    // console.log(vidBox._time);
    // if (vidBox._time) vid.currentTime = vidBox._time;
    vid.play();
  });

  vidBox.addEventListener('mouseleave', function(){
    // vidBox._time = vid.currentTime;
    vid.pause();

    // ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);
    // var dataURI = canvas.toDataURL('image/jpeg');
    // vidBox.removeChild(vid);

    // var img = document.createElement('img');
    // img.setAttribute('src', dataURI);
    // vidBox.appendChild(img);
  })

  vidBox.addEventListener('click', function(){
    vid.load();
  })

  var maxY = window.innerHeight - 300;
  var maxX = window.innerWidth - 300;
  vidBox.setAttribute('style', 'left: '+maxX*Math.random()+'px; top: '+maxY*Math.random()+'px;'); 

  document.querySelector('.cards-container').appendChild(vidBox);

  displace(vidBox, {
    constrain: true,
    relativeTo: document.querySelector('.cards-container')
  })
  
  Renderer.start({
    container: window,
    data: {
      textboxList: [textbox],
      fontList: [font],
    },
    textureUrl: '/font-textures',
    pixelRatio: 0.8
  });
}
