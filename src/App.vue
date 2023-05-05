<template>
  <div id="app">
  <template>
  <v-bottom-navigation v-model="value">
    <v-btn value="recent" @click="gotohelloworld()">
      <span>Home</span>
      <v-icon>mdi mdi-home-circle</v-icon>
    </v-btn>

    <v-btn value="favorites" @click="gotopage2()">
      <span>Profile</span>
      <v-icon>mdi mdi-account</v-icon>
    </v-btn>

        <v-btn value="favorites" @click="gotopage3()">
      <span>Project</span>
      <v-icon>mdi mdi-briefcase</v-icon>
    </v-btn>

  </v-bottom-navigation>
  </template>

    <router-view />
  </div>
</template>

<script>
export default {
   name: 'App',
  methods: {
    gotohelloworld(){
      if(this.$route.path !== '/helloworld'){
        this.$router.push('/helloworld');
      }
    },
    gotopage2(){
        if(this.$route.path !== '/page2'){
          this.$router.push('/page2');
           }
    },
    gotopage3(){
        if(this.$route.path !== '/page3'){
          this.$router.push('/page3');
           }
       },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-link-exact-active {
  color: blue;
}
</style>