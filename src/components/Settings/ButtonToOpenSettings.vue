<template>
  <div class="gears-button" @click="$emit('bearsClick')">
    <img src="@/assets/pictures/gear.png" alt="gear" class="gear1" />
    <img src="@/assets/pictures/gear.png" alt="gear" class="gear2" />
    <img src="@/assets/pictures/gear.png" alt="gear" class="gear3" />
  </div>
</template>

<style scoped>
.gears-button {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 2rem;
  right: 2rem;
  transition: all 2s linear;
  cursor: pointer;
  z-index: 999;
}
.gear1,
.gear2,
.gear3 {
  transition: all .3s linear;
}
.gear1 {
  width: 30px;
  height: 30px;
}
.gear2 {
  width: 25px;
  height: 25px;
  position: relative;
    left: 2px;
}
.gear3 {
  width: 20px;
  height: 20px;
  position: relative;
  left: 20px;
  bottom: 6px;
}
.gears-button:hover .gear1 {
  transform: rotate(60deg);
}
.gears-button:hover .gear2 {
  transform: rotate(-60deg);
}
.gears-button:hover .gear3 {
  transform: rotate(60deg);
}
</style>
