const displace = window.displacejs;


var font = JSON.parse(document.getElementById('font').innerHTML);

var textbox = Renderer.createTextbox({
  font,
  size: 100,
  id: `textbox-_DF6G3`,
  text: 'HAPPY\nBIRTHDAY'
});



setTimeout(function(){
  addVid('jundong');
}, 500);


function addVid (name) {
  var vid = document.createElement('video');
  vid.setAttribute('src', '/videos/'+name+'.mp4');
  vid.setAttribute('height', 250);
  vid.setAttribute('autoplay', true);
  vid.setAttribute('webkit-playsinline', true);
  vid.setAttribute('playsinlinee', true);


  var vidBox = document.createElement('div');
  vidBox.setAttribute('id', name);
  vidBox.setAttribute('class', 'vid-box');
  vidBox.appendChild(vid);


  vidBox.addEventListener('mouseenter', function(){
    vid.play();
  });
  vidBox.addEventListener('mouseleave', function(){
    vid.pause();
  })


  document.querySelector('.cards-container').appendChild(vidBox);

  console.log(displace);

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
    textureUrl: '/font-textures'
  });
}
