<template>
  <div class="mobile">
    <div class="header">
      <div class="camera"></div>
      <img src="../assets/raw/images/notebook.png" alt="" id="notebook" />
    </div>

    <div class="containar">
      <div class="content-header">
        <h2>Shopping List</h2>
        <p class="subtitle">This is my today's shopping list.</p>
        <img src="../assets/raw/images/edit.png" alt="edit" class="edit" />
      </div>

      <ShopList />

      <form class="footer">
        <select id="select-item" v-model="key">
          <option v-for="(item, index) in shoppinglist" :key="index">{{index.split(',')[0]}}</option>
        </select>
        <input type="text" placeholder="Write some item" id="item" v-model="value"/>
        <input type="submit" value="Add item" class="submit" @click="addition(key, value)" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ShopList from "./ShopList.vue";
export default {
  data() {
    return {
      value: '',
    };
  },
  components: { ShopList },
  computed: {
    ...mapState("valueStore", ["shoppinglist"]),
  },
  methods: {
    ...mapActions("valueStore", ["addition"]),
  },
};
</script>

<style>
</style>