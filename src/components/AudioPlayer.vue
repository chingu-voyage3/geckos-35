<template>
  <div class="player">
    <div class="player__art">
      <div class="player__thumb"></div>
      <div class="player__songinfo">
        <div class="player__song">Song</div>
        <div class="player__singer">Singer</div>
      </div>
      <div class="player__addsong">+</div>
    </div>
    <div class="player__controls">
      <div class="player__controlbuttons">

      </div>
      <div class="player__progress">

      </div>
    </div>
    <div class="player__volume">

    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  @import "../scss/main.scss";
  .player {
    z-index:$z-index-player;
    display:flex;
    height: 100%;
    &__art {
      border:1px solid blue;
      height:100%;
      width:250px;
      display: flex;
      align-items: center;
      $z-index-player:20;
    }
    &__thumb {
      width:60px;
      height: 60px;
      background-color: white;
      margin-left:10px;
    }

    &__songinfo{
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      padding-left: 10px;
      height: 60px;
      border:2px solid chartreuse;
      justify-content:center;
      align-items: flex-start;
    }

    &__song {
      color: $second-text-color;
      font-size: $font-size-normal;
      &:hover {
        text-decoration: underline;
        text-underline-position: under;
      }
    }

    &__singer {
      color: $main-text-color;
      font-size:$font-size-small;
      margin-top: 5px;
      &:hover {
        text-decoration: underline;
        text-underline-position: under;
      }
    }

    &__addsong {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color:$main-text-color;
      font-size: 30px;
      width:30px;
      margin-left: auto;
      height: 100%;
      border:2px solid orange    }
    &__controls {
      border:1px solid red;
      height:100%;
      width:240px;
      flex-grow: 1;
    }
    &__volume{
      border:1px solid white;
      height:100%;
      margin-left: auto;
      width:220px;
    }
}
</style>
