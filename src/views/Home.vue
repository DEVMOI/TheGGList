<template>
  <div class="home">
    <InputC msg="The GG List" @twitch-user="twitchUserEmit"/>
  </div>
</template>

<script>
// @ is an alias to /src
import InputC from "@/components/Input.vue";

export default {
  name: "home",
  components: {
    InputC
  },
  data (){
    return {

    }
  },
  methods : {
    twitchUserEmit (event) {
      console.log("r2"+" "+event)
    }
  }
};
</script>
