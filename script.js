console.log('working!!')
console.log(Renderer);

var font = JSON.parse(document.getElementById('font').innerHTML);

var textbox = Renderer.createTextbox({
  font,
  size: 100,
  id: `textbox-_DF6G3`,
  text: 'HAPPY\nBIRTHDAY'
});

Renderer.start({
  container: window,
  data: {
    textboxList: [textbox],
    fontList: [font],
  },
  textureUrl: '/font-textures'
});



// var vid = document.getElementById("jundong");
// vid.addEventListener('mouseenter', function(){
//   vid.play();
// })
// vid.addEventListener('mouseleave', function(){
//   vid.pause();
// })




console.log('started');