<template>
  <nav class="navbar">
    <symbol id="icon-search" viewBox="0 0 32 32">
      <title>search</title>
      <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
    </symbol>
    <symbol id="icon-spotify" viewBox="0 0 32 32">
      <title>spotify</title>
      <path d="M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.119-16-16-16zM23.363 23.119c-0.319 0.481-0.881 0.637-1.363 0.319-3.762-2.319-8.481-2.8-14.081-1.519-0.563 0.163-1.037-0.238-1.2-0.719-0.162-0.563 0.237-1.038 0.719-1.2 6.081-1.363 11.363-0.8 15.519 1.762 0.563 0.238 0.644 0.875 0.406 1.356zM25.281 18.719c-0.4 0.563-1.119 0.8-1.681 0.4-4.319-2.637-10.881-3.438-15.919-1.837-0.638 0.163-1.362-0.163-1.519-0.8-0.162-0.637 0.162-1.363 0.8-1.519 5.838-1.762 13.037-0.881 18 2.163 0.475 0.238 0.719 1.038 0.319 1.594zM25.438 14.238c-5.119-3.037-13.681-3.363-18.563-1.838-0.8 0.238-1.6-0.238-1.838-0.963-0.237-0.8 0.237-1.6 0.963-1.838 5.681-1.681 15.038-1.363 20.962 2.162 0.719 0.4 0.962 1.363 0.563 2.081-0.406 0.556-1.363 0.794-2.087 0.394z"></path>
    </symbol>
    <div class="navbar__list">
      <svg class="navbar__item navbar__logo  icon-spotify"><use xlink:href="#icon-spotify"></use></svg>
      <div class="navbar__item navbar__search navbar__list--clickable">
        <div class="navbar_searchText">
          <span>Search</span>
        </div>
          <svg class="navbar__searchLogo icon-search"><use xlink:href="#icon-search"></use></svg>
      </div>
      <div class="navbar__page ">
        <div class="navbar__item navbar__home navbar__list--clickable">
          Home
        </div>
        <div class="navbar__item navbar_yourmusic navbar__list--clickable">
          Your Music
        </div>
      </div>
      <div class="navbar__recent">
        <div class="navbar__item navbar__recentheader">Recently Played</div>
        <div class="navbar__recentlist">
          <div class="navbar__recentlistname navbar__list--clickable">Hit Songs</div>
          <div class=" navbar__recentlistsource">Playlist</div>
        </div>
        <div class="navbar__recentlist">
          <div class="navbar__recentlistname navbar__list--clickable">TGIF</div>
          <div class=" navbar__recentlistsource">Playlist</div>
        </div>
        <div class="navbar__recentlist">
          <div class="navbar__recentlistname navbar__list--clickable">Saturday Night</div>
          <div class=" navbar__recentlistsource">Playlist</div>
        </div>
      </div>
      <div class="navbar__profile">
        <div class="navbar__avatar"></div>
        <div class="navbar__username">Chingu Cohort</div>
      </div>
    </div>

  </nav>
</template>

<script>
</script>

<style lang="scss" scoped>
  @import "../scss/main.scss";
  $nav-border-bottom:0.3px solid grey;
  $nav-border-top:0.3px solid grey;
  .navbar {
    display:flex;
    flex-direction: column;
    position: fixed;
    top:0;
    left:0;
    width:220px;
    height:100%;
    background-color: rgba(24, 24, 24, 0.5);
    color:$main-text-color;
    letter-spacing: .015em;
    &__list {
      display:flex;
      position: relative;
      flex-direction: column;
      margin-left: auto;
      margin-right: auto;
      &--clickable {
        transition: all 0.3s ease-in;
        &:hover {
          color:$second-text-color;
          cursor:pointer;
        }
      }
    }
    &__item {
      margin-top: 20px;
    }
    &__logo {
        display: inline-block;
        width: 30px;
        height: 30px;
        stroke-width: 0;
        stroke: currentColor;
        fill: $second-text-color;
    }

    &__search{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width:160px;
      height: 45px;
      background-color: transparent;
      border-top: $nav-border-top;
      border-bottom: $nav-border-bottom;
      font-weight: $font-weight-bold;
      font-size:$font-size-big;
    }

    &__searchLogo {
      margin-left: auto;
        display: inline-block;
        width: 20px;
        height: 20px;
        stroke-width: 0;
        stroke: currentColor;
        fill: currentColor;

    }

    &__page{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-weight: $font-weight-bold;
      border-bottom: $nav-border-bottom;
      padding-bottom: 10px;
    }

    &__recent{
      display: flex;
      height: 280px;
      flex-direction:column;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: nowrap;
      font-size:$font-size-normal;
      font-weight: $font-weight-thick;

    }

    &__recentlist{
      margin-top: 10px;
      margin-bottom: 10px;
      display:flex;
      flex-direction: column;
      justify-content: flex-start;
      line-height: 20px;
    }

    &__recentlistname{
      display: inline-flex;
      justify-content:flex-start ;
    }

    &__recentlistsource{
      display: inline-flex;
      justify-content: flex-start;
      font-size:$font-size-small;
      text-transform: uppercase;
    }

    &__profile {
      width:100%;
      height:50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 0;
      border-top: $nav-border-top;
      color:$second-text-color;
      cursor:pointer;
    }

    &__avatar {
      width:30px;
      height:30px;
      background-color: black;
      border-radius: 50%;
    }
    &__username{
      margin-left: 5px;
      font-size:$font-size-normal;
      font-weight: $font-weight-thick;
    }
}
</style>
