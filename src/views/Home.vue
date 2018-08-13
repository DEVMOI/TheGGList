<template>
  <div id="home" class="container">

      <InputC msg="The GG List" @twitch-user="twitchUserEmit"/>
 
      <Stream :stream="streamName"/>
      <footer class="mt-5 pt-5">
        <a href="https://www.nodegg.com">Our site.</a>
        <p>If you would like to join the list please make a <a href="https://github.com/NodeGG/TheGGList" target="_blank">Pull Request.</a></p>
      </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import InputC from "@/components/Input.vue";
import Stream from "@/components/stream.vue";
export default {
  name: "home",
  components: {
    InputC,
    Stream
  },
  data () {
    return {
      streamName: null
    }
  },
  methods: {
    twitchUserEmit (event) {
      this.streamName = event;
    }
  }
};
</script>
