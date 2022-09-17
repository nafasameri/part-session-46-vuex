<template>
  <div class="content">
    <ul class="list" v-for="(item, index) in shoppinglist" :key="index">
      <li class="item" style="background-color: #index.split(',')[1];">{{index.split(',')[0]}}</li>
      <li class="item" v-for="(value, index2) in item" :key="index2">{{value}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("valueStore", ["shoppinglist"]),
    // ...mapGetters("valueStore", ["getColor"])
  },
};
</script>

<style>
</style>