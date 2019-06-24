<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd v-for="(item, index) in menu" :key="index" @mouseenter="enter(item)">
        <i :class="item.type"/>
        {{item.name}}
        <span class="arrow"/>
      </dd>
    </dl>
    <div class="detail" v-if="kind" @mouseenter="sover" @mouseleave="sout">
      <template v-for="(item, index) in curdetail[0].child">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="i in item.child" :key="i">{{i}}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: "",
      menu: [
        {
          type: "food",
          name: "美食",
          child: [
            {
              title: "美食",
              child: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        },
        {
          type: "takeout",
          name: "外卖",
          child: [
            {
              title: "外卖",
              child: ["代金券1", "甜点饮品1", "火锅1", "自助餐1", "小吃快餐1"]
            }
          ]
        },
        {
          type: "hotel",
          name: "酒店",
          child: [
            {
              title: "酒店",
              child: ["代金券2", "甜点饮品2", "火锅2", "自助餐2", "小吃快餐2"]
            }
          ]
        },
        {
          type: "takeout1",
          name: "榛果民宿",
          child: [
            {
              title: "榛果民宿",
              child: ["代金券3", "甜点饮品3", "火锅3", "自助餐3", "小吃快餐3"]
            },
            {
              title: "榛果民宿",
              child: ["代金券4", "甜点饮品4", "火锅4", "自助4餐", "小吃快45餐"]
            }
          ]
        },
        {
          type: "movie",
          name: "猫眼电影",
          child: [
            {
              title: "猫眼电影",
              child: ["代金5券", "甜5点饮品", "火5锅", "自助5餐", "小5吃快餐"]
            }
          ]
        }
      ]
    };
  },
  computed: {
    curdetail() {
      return this.menu.filter(item => item.type === this.kind);
    }
  },
  methods: {
    mouseleave() {
      this._timer = setTimeout(() => {
        this.kind = "";
      }, 150);
    },
    enter(e) {
      this.kind = e.type;
    },
    sover() {
      clearTimeout(this._timer);
    },
    sout() {
      this.kind = "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/index/index.scss";
</style>


