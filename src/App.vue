<template>
  <div id="app">
    <div class="top-container">
      <div class="main">
        <nav-bar></nav-bar>
        <content-section></content-section>
      </div>
      <div class="footer">
        <audio-player></audio-player>
      </div>
    </div>
    </div>

</template>

<script>
  import NavBar from "./components/NavBar";
  import ContentSection from "./components/ContentSection"
  import AudioPlayer from "./components/AudioPlayer"


  export default {
  name: 'app',
  components: {NavBar,ContentSection,AudioPlayer}
}
</script>

<style lang="scss">
  @import "scss/main.scss";
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
  .top-container {
    display:flex;
    flex-direction: column;
    height:100%;
    position: relative;
    width: 100%;
}
  .main {
    position:relative;
    display: flex;
    height:100vh;
    background: linear-gradient(to right, rgba(7, 101, 140, 1), rgba(0,0,0,1));
  }

  .footer {
    position: fixed;
    bottom:0;
    background-color: #181818;
    height: 90px;
    width:100%;
  }
</style>
