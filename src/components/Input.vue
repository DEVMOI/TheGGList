<template>
  <div id="input">
    <div>
      <h1 class="display-4">{{ msg }}</h1>
    </div>
    <div class="mx-auto mt-0 pb-0 text-center">
      <input class="stream-input border-0 my-3 p-1" placeholder="Search Stream" type="text" v-model="user" @keyup.enter="getNewStream">
    </div>
  </div>
</template>

<script>
export default {
  name: "InputC",
  props: {
    msg: String
  },
  data (){
    return {
      user: null
    }
  },
  methods: {
    getNewStream () {
      console.log(this.user)
      this.$emit("twitch-user", this.user)
      this.user = ""
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.stream-input{
    height: 25px;
    width: 200px;
    background-color: #212127;
    color: #e9e3d5;
  }
  input[placeholder] {
   text-align: center;
   text-transform: uppercase;
   font-family: monospace;
  }
</style>
