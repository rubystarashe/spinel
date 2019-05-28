<template>
<div>
  <div id="terms_area">
    <a href="https://discord.gg/0qye9ist02iGkG8i" target="_blank">
    <div id="main">
      <img src="/spinel/discord.png">
      <div id="date">
        2018. 07. 01.
      </div>
      <div id="memo">
        디스코드를 통해 다양한 의견을 말씀해 주세요!
      </div>
      <div id="name">
        Spinel
      </div>
      <div id="author">
        Rubystar Ashe
      </div>
      <div id="title">
        더 쉽고 강력한 스카이림 게임 런처
      </div>
      <div id="notice">
        개발 상황과 코드는 모두 공개되며 모든 서비스는 비상업적 용도로 운영됩니다.
      </div>
    </div>
    </a>
  </div>
</div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none
}
#terms_area {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fade 1s;
  @keyframes fade {
    0% {
      transform: scale(0.7);
      opacity: 0;
      filter: blur(10px);
    }
    100% {
      transform: scale(1);
      opacity: 1;
      filter: blur(0);
    }
  }
  #main {
    min-width: 50vw;
    color: white;
    text-align: center;
    img {
      height: 30vh;
      filter: grayscale(1);
    }
    #date {
      font-size: 5vh;
    }
    #memo {
      font-size: 2.5vh;
    }
    #name {
      font-family: Angel;
      font-size: 15vh;
      text-shadow: 2px 2px black;
      padding-right: 1vh;
      margin-bottom: -4.5vh;
    }
    #author {
      padding-bottom: 1.5vh;
      padding-left: 10vh;
      font-size: 1.5vh;
    }
    #title {
      font-size: 1.7vh;
    }
    #notice {
      margin-top: 7vh;
      font-size: 2vh;
      opacity: 0.7;
    }
  }
}
</style>