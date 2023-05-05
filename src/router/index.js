import Vue from "vue";
import Router from "vue-router";

import helloworld from "../components/HelloWorld.vue";
import page2 from "../components/Page2.vue";
import page3 from "../components/Page3.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/helloworld",
      component: helloworld
    },
    {
      path: "/page2",
      component: page2
    },
    {
      path: "/page3",
      component: page3
    }
  ]
});
