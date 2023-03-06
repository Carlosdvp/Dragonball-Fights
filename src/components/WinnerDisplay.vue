<template>
  <div class="winner-box">
    <p class="message-winner">{{ message }} wins!</p>
  </div>
</template>

<script>
export default {
  name: "WinnerDisplay",
  props: {
    message: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>

.winner-box {
  background: darkslateblue;
  border: 1px solid darkblue;
  box-shadow: 0px 4px 4px lightslategray;
  border-radius: 4px;
  padding: 17px 28px;
  text-align: center;
}

.message-winner {
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  color:whitesmoke;
}
</style>
