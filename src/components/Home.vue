<template>
  <div>
    <h1> This is Home Page </h1>
    <router-link id="FirstPart" to="/home/firstHome">FirstPart</router-link>
    <router-link id="SecondPart" to="/home/secondHome">SecondPart</router-link>
    <hr>
    <router-view></router-view>
   </div>
</template>
