<template>
  <div class="player">
    <symbol id="icon-shuffle" viewBox="0 0 32 32">
      <title>shuffle</title>
      <path d="M24 22h-3.172l-5-5 5-5h3.172v5l7-7-7-7v5h-4c-0.53 0-1.039 0.211-1.414 0.586l-5.586 5.586-5.586-5.586c-0.375-0.375-0.884-0.586-1.414-0.586h-6v4h5.172l5 5-5 5h-5.172v4h6c0.53 0 1.039-0.211 1.414-0.586l5.586-5.586 5.586 5.586c0.375 0.375 0.884 0.586 1.414 0.586h4v5l7-7-7-7v5z"></path>
    </symbol>
    <symbol id="icon-previous2" viewBox="0 0 32 32">
      <title>previous2</title>
      <path d="M8 28v-24h4v11l10-10v22l-10-10v11z"></path>
    </symbol>
    <symbol id="icon-play2" viewBox="0 0 32 32">
      <title>play2</title>
      <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM12 9l12 7-12 7z"></path>
    </symbol>
    <symbol id="icon-pause" viewBox="0 0 32 32">
      <title>pause</title>
      <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM10 10h4v12h-4zM18 10h4v12h-4z"></path>
    </symbol>
    <symbol id="icon-next2" viewBox="0 0 32 32">
      <title>next2</title>
      <path d="M24 4v24h-4v-11l-10 10v-22l10 10v-11z"></path>
    </symbol>
    <symbol id="icon-loop2" viewBox="0 0 32 32">
      <title>loop2</title>
      <path d="M27.802 5.197c-2.925-3.194-7.13-5.197-11.803-5.197-8.837 0-16 7.163-16 16h3c0-7.18 5.82-13 13-13 3.844 0 7.298 1.669 9.678 4.322l-4.678 4.678h11v-11l-4.198 4.197z"></path>
      <path d="M29 16c0 7.18-5.82 13-13 13-3.844 0-7.298-1.669-9.678-4.322l4.678-4.678h-11v11l4.197-4.197c2.925 3.194 7.13 5.197 11.803 5.197 8.837 0 16-7.163 16-16h-3z"></path>
    </symbol>
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
        <div class="player__buttoncontainer"><svg class="player__shuffle icon-shuffle"><use xlink:href="#icon-shuffle"></use></svg>
        </div>
        <div class="player__buttoncontainer"><svg class="player__previous icon-previous2"><use xlink:href="#icon-previous2"></use></svg>
        </div>
        <div class="player__buttoncontainer"><svg class="player__play icon-play2"><use xlink:href="#icon-play2"></use></svg>
        </div>
        <div class="player__buttoncontainer"><svg class="player__next icon-next2"><use xlink:href="#icon-next2"></use></svg>
        </div>
        <div class="player__buttoncontainer"><svg class="player_loop icon-loop2"><use xlink:href="#icon-loop2"></use></svg>
        </div>
      </div>
      <div class="player__progress">
        <div class="player__startvalue">00:00</div>
        <input class="player__range" type="range" value="100" min="0" max="500">
        <span class="player__endvalue">00:00</span>
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
      color: $main-text-color;
      font-size: 30px;
      width: 30px;
      margin-left: auto;
      height: 100%;
    }
    &__controls {
      height:100%;
      width:240px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    &__controlbuttons {
      width: 100%;
      height: 170px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__buttoncontainer {
      width:50px;
      height:50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__shuffle,
    &__previous,
    &__next,
    &_loop{
        display: inline-block;
        width: 18px;
        height: 18px;
        stroke-width: 0;
        fill: $main-text-color;
      &:hover {
        fill:$second-text-color;
      }
    }
    &__play,&__pause {
        display: inline-block;
        width: 30px;
        height: 30px;
        stroke-width: 0;
        fill: $main-text-color;
      &:hover {
        width: 35px;
        height: 35px;
        fill:$second-text-color;
      }
    }
    &__progress {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
    &__range{
      -webkit-appearance: none;
      width: 55%;
      height: 4px;
      background-color: #777777;
      outline: none;
      opacity: 0.7;
      -webkit-transition: .2s;
      transition: opacity .2s;
      border-radius: 50px;
      &:hover {
        background-color: $third-text-color;
        &::-webkit-slider-thumb {
          width:15px;
          height: 15px;
          border: 1px solid blue;
          border-radius: 50%;
          background: #fff;
          box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.6);
        }
      }
      &::-webkit-slider-thumb{
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 0;
        height: 0;
      }
    }


    &__volume{
      height:100%;
      margin-left: auto;
      width:220px;
    }
}
</style>
