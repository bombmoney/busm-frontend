<template>
  <div class="coll-params-block">
    <h2>MY OPEN POSITION</h2>

    <div class="items-wrap">
      <CollParamItem v-for="(item, idx) in infoItems" :key="idx" :item="item" />
    </div>

    <p class="btm-text">1 BIM = 1 USD</p>
    <p class="btm-text">1 {{ tokenName }} = {{ tokentToMim }} BIM</p>
  </div>
</template>

<script>
const CollParamItem = () => import("@/components/Pool/CollParamItem");
export default {
  props: {
    infoItems: {
      type: Array,
      required: true,
    },
    exchangeRate: {
      required: true,
    },
    tokenName: {
      type: String,
      required: true,
    },
  },
  computed: {
    tokentToMim() {
      const tokenToMim = 1 / this.exchangeRate;

      // eslint-disable-next-line no-useless-escape
      let re = new RegExp(`^-?\\d+(?:\.\\d{0,` + (4 || -1) + `})?`);
      return tokenToMim.toString().match(re)[0];
    },
  },
  components: {
    CollParamItem,
  },
};
</script>

<style scoped lang="scss">
.coll-params-block {
  padding: 30px 20px;
  padding-bottom: 20px;
  background: $clrBg2;
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  .btm-text {
    padding-top: 10px;
  }

  h2 {
    margin-bottom: 30px;
    color: #fdd603;
  }

  .items-wrap {
    flex: 1;
    max-height: 380px;
    overflow-y: auto;
    padding-right: 5px;
    margin-bottom: auto;
  }
}

@media screen and(max-width: 780px) {
  .coll-params-block {
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
