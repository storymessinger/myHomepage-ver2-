<template>
  <div id="app">
    <div id="textbox-_DF6G3"></div>
    <div></div>
    <video 
      id="jundong" 
      autoplay="true" 
      webkit-playsinline="true"
      playsinline="true"
      width="400" height="400" >
      <source src="jundong.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import * as Renderer from './Renderer.js';
import font from './_DF6G3.json';

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  mounted: function() {
    console.log(font);
    const textbox = Renderer.createTextbox({
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

    var vid = document.getElementById("jundong");
    vid.addEventListener('mouseenter', ()=> {
      vid.play();
      console.log(vid);
    })
    vid.addEventListener('mouseleave', ()=> {
      vid.pause();
    })
    // vid.play();
  }
}
</script>

<style lang="scss">
#app {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  #textbox-_DF6G3 {
    position: absolute;
    width: 100%;
    height: 100%;
    /* background: blue; */
  }

  video {
    position: absolute;
    z-index: 10;
  }

}
</style>
