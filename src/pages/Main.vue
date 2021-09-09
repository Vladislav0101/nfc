<template>
  <main v-scroll="scroll" :style="{ backgroundColor: backgroundColor }">
    <section class="see-tags wrapper">
      <h1>TOUCH ME</h1>
      <img src="@/assets/pictures/iphone-see-tags.png" alt="iphone-tags" />
      <a href="#nfc">Выбрат метку</a>
    </section>

    <section class="stay-in-trend wrapper" ref="stayTrend">
      <img src="@/assets/pictures/walking-boy.png" alt="boy" />
      <h2>Будьте в курсе тенденций</h2>
      <p>Создайте свою виртуальную личность</p>
      <p>
        Прикоснитесь своим смартфоном к стильному наклеивайте стикеры и делитесь
        своими ресурсами в Интернете со своими друзьями. Что ты хочешь. Когда
        захочешь. Поделитесь своими социальными сетями одним социальным касанием
        Ручное переписывание и поиск ника в социальных сетях остались в прошлом!
      </p>
    </section>

    <section class="how-it-works" ref="howItWorks">
      <div class="wrapper">
        <h2>Как это работает?</h2>
        <p>
          Почти в каждом телефоне есть датчик NFC, так что другому человеку не
          нужны наклейки или какое-либо приложение! Звучит как волшебство, но на
          самом деле это работает!
        </p>
        <img
          src="@/assets/pictures/opensocial.png"
          alt="opensocial"
          :class="{ showMobile: showMobile }"
        />
      </div>
    </section>

    <section class="link-edit" ref="editLink">
      <div class="wrapper">
        <img
          src="@/assets/pictures/linkEdit.png"
          alt="link-edit"
          :class="{ editLink: isEditLink }"
        />
        <h2>Настройте Свой ТЕГ!</h2>
        <p>
          Мы предоставляем вам возможность делиться не только социальными
          сетями, но и вашим любимым плейлистом Apple Music, Spotify и
          Soundcloud. Все в одной стильной наклейке. Только вы решаете, чем, с
          кем и когда вы делитесь. Вы иметь постоянный доступ для редактирования
          ссылок.
        </p>
      </div>
    </section>

    <section class="stick-it">
      <div class="wrapper">
        <h2>Держись!</h2>
        <p>
          Наклейка водонепроницаемая, крепко держится и выглядит стильно! Мы
          позаботились из материалов высочайшего качества, которые не только
          обеспечат вашу ресурсы быстро и эффективно, но также безопасны и
          долговечны в стиль!
        </p>
      </div>
      <img src="@/assets/pictures/glueTheNfc.png" alt="nfc" />
    </section>

    <section class="chose-tag wrapper" id="nfc">
      <h2>Выбери свою метку</h2>
      <div class="nfc">
        <img src="@/assets/pictures/threeGirls.png" alt="nfc" />
        <h3>СОЦИАЛЬНЫЙ НАПИТОК</h3>
        <p>
          Наклейка для тусовщиков, которые любят знакомиться с новыми людьми,
          танцевать и веселиться.
        </p>
        <button>Выбрать</button>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      backgroundColor: "rgb(15 15 15)",
      showMobile: false,
      isEditLink: false,
    };
  },

  computed: {
    device() {
      const content = getComputedStyle(document.body).content.split('"')[1];

      if (content === "xs") {
        return "mobile";
      } else {
        return "desctop";
      }
    },
  },

  methods: {
    scroll() {
      this.changeBgColor();
      this.flyMobile();
      this.scaleEditLink();
    },

    changeBgColor() {
      const windowHeight = window.innerHeight;
      const distance =
        windowHeight - this.$refs.stayTrend?.getBoundingClientRect().top;

      if (distance > windowHeight) {
        this.backgroundColor = "rgb(247 230 0)";
      } else if (distance > windowHeight * 0.9) {
        this.backgroundColor = "rgb(240 229 0)";
      } else if (distance > windowHeight * 0.85) {
        this.backgroundColor = "rgb(237 227 0)";
      } else if (distance > windowHeight * 0.75) {
        this.backgroundColor = "rgb(235 225 0))";
      } else if (distance > windowHeight * 0.7) {
        this.backgroundColor = "rgb(225 213 0))";
      } else if (distance > windowHeight * 0.65) {
        this.backgroundColor = "rgb(215 203 0)";
      } else if (distance > windowHeight * 0.55) {
        this.backgroundColor = "rgb(205 193 0)";
      } else if (distance > windowHeight * 0.5) {
        this.backgroundColor = "rgb(190 179 0)";
      } else if (distance > windowHeight * 0.45) {
        this.backgroundColor = "rgb(175 163 0)";
      } else if (distance > windowHeight * 0.4) {
        this.backgroundColor = "rgb(155 144 0)";
      } else if (distance > windowHeight * 0.35) {
        this.backgroundColor = "rgb(130 120 0)";
      } else if (distance > windowHeight * 0.3) {
        this.backgroundColor = "rgb(115 107 0))";
      } else if (distance > windowHeight * 0.25) {
        this.backgroundColor = "rgb(100 92 0))";
      } else if (distance > windowHeight * 0.2) {
        this.backgroundColor = "rgb(88 80 0)";
      } else if (distance > windowHeight * 0.15) {
        this.backgroundColor = "rgb(66 69 0)";
      } else if (distance > windowHeight * 0.1) {
        this.backgroundColor = "rgb(56 52 0)";
      } else if (distance > windowHeight * 0.05) {
        this.backgroundColor = "rgb(44 41 0)";
      } else {
        this.backgroundColor = "rgb(15 15 15)";
      }
    },

    flyMobile() {
      const data = this.$refs.howItWorks?.getBoundingClientRect();

      if (this.device === "mobile") {
        console.log(data.bottom, data.top, window.innerHeight);
        if (window.innerHeight > data.bottom) {
          this.showMobile = true;
        } else {
          this.showMobile = false;
        }
      } else {
        if (data.top - 150 < 0) {
          this.showMobile = true;
        } else {
          this.showMobile = false;
        }
      }
    },

    scaleEditLink() {
      const data = this.$refs.editLink?.getBoundingClientRect();

      if (data.top < (data.bottom - data.top) / 2) {
        this.isEditLink = true;
      } else {
        this.isEditLink = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  height: 3000px;
  transition: all 0.2s linear;
}

h2 {
  font-size: 3rem;
  font-weight: 800;

  @media (max-width: 480px) {
    font-size: 2rem;
    text-align: center;
  }
}
p {
  width: 100%;
  font-weight: 900;
  font-size: 1.3rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
}
.see-tags {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 3rem;

  @media (max-width: 480px) {
    img {
      width: 100%;
    }
  }
  h1 {
    color: #f7e600;
    font-weight: 900;
    font-size: 4rem;
    text-align: center;

    @media (max-width: 480px) {
      font-size: 3rem;
    }
  }

  a {
    text-decoration: none;
    background-color: #f7e600;
    color: #0f0f0f;
    border: none;
    padding: 7px 17px;
    font-size: 2rem;
    font-weight: 700;
    border-radius: 30px;
    transition: all 0.1s linear;
  }

  a:hover {
    background-color: #0f0f0f;
    color: #f7e600;
    cursor: pointer;
  }
}

.stay-in-trend {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 6rem;

  h2 {
    color: white;
    background-color: black;
    padding-inline: 1rem;
    line-height: 1.5;
    border-radius: 4px;
    text-align: center;
  }

  @media (max-width: 480px) {
    img {
      width: 100%;
    }
  }
}

.how-it-works {
  box-shadow: 0px -20px 30px 20px #0f0f0f;
  background-color: #0f0f0f;

  .wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 3rem;
    gap: 2rem;
    padding-top: 2rem;
    overflow: hidden;

    @media (max-width: 480px) {
      min-height: auto;
    }
    h2 {
      color: #f7e600;
    }

    p {
      color: #fcfcfc;
    }
    img {
      transform: translateY(100%);
      transition: all 0.5s linear;

      @media (max-width: 480px) {
        width: 100%;
      }
    }

    @keyframes showMobile {
      0% {
        transform: translateY(100%);
      }
      70% {
        transform: translateY(0%);
      }
      100% {
        transform: translateY(10%);
      }
    }
    .showMobile {
      animation: showMobile 0.5s linear forwards;
    }
  }
}

.link-edit {
  background-color: #f7e600;

  .wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 3rem;
    gap: 2rem;
    padding-bottom: 3rem;
    overflow: hidden;
  }
  h2 {
    background-color: #fcfcfc;
    padding-inline: 1rem;
    line-height: 1.5;
    border-radius: 4px;
  }
  .editLink {
    transform: scale(1.4);

    @media (max-width: 480px) {
      transform: scale(0.9);
    }
  }
  img {
    transform: scale(0.5);
    transition: all 0.2s linear;
  }
}

.stick-it {
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: #0f0f0f;

  .wrapper {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  h2 {
    color: #f7e600;
    text-align: center;
    margin-bottom: 5rem;
  }
  p {
    color: #fcfcfc;
    max-width: 50vw;
  }

  img {
    position: absolute;
    width: 200px;
    right: 0;
    bottom: 4rem;

    @media (max-width: 480px) {
      width: 30vw;
    }
  }
}

.chose-tag {
  display: grid;
  justify-items: center;

  h2 {
    color: #f7e600;
  }
  .nfc {
    display: grid;
    justify-items: center;
    gap: 1rem;
    max-width: 460px;
    text-align: center;
    margin-top: 4rem;
    padding: 2rem 1rem;

    @media (max-width: 480px) {
      margin-top: 0;

      img {
        width: 100%;
      }
    }

    h3 {
      color: #fcfcfc;
      font-size: 3rem;
      font-weight: 900;

      @media (max-width: 480px) {
        font-size: 2rem;
      }
    }

    p {
      color: #fcfcfc;
      font-weight: 400;
    }

    button {
      background-color: #f7e600;
      color: #0f0f0f;
      border: none;
      padding: 7px 17px;
      font-size: 2rem;
      font-weight: 700;
      border-radius: 30px;
      transition: all 0.1s linear;

      @media (max-width: 480px) {
        font-size: 1.2rem;
      }
    }

    button:hover {
      background-color: #0f0f0f;
      color: #f7e600;
      cursor: pointer;
    }
  }
}
</style>