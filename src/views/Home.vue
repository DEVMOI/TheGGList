<template>
  <div id="home">
    <div>
      <InputC msg="The GG List" @twitch-user="twitchUserEmit"/>
    </div>
    <div class="container">
      <Stream :stream="streamName"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import InputC from "@/components/Input.vue";
import Stream from "@/components/stream.vue"
export default {
  name: "home",
  components: {
    InputC,
    Stream
  },
  data (){
    return {
      streamName: null
    }
  },
  methods : {
    twitchUserEmit (event) {
      this.streamName = event;
    }
  }
};
</script>
