<template>
  <section class="container">
    <div class="box">
      <app-logo/>
      <el-button class="button" @click="navTo('test')">	{{$t('title')}}</el-button>
      <p>{{path}}</p>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import { mapGetters } from 'vuex'
import { i18nPathMixin } from '~/common/mixin/i18n'

export default {
  mixins: [i18nPathMixin],
  components: {
    AppLogo
  },
  computed: {
    ...mapGetters(['test'])
  },
  created() {
    console.log(this.test)
  }
}
</script>
<style lang="stylus" scoped>
.container
  .box
    text-align: center;
    width: 600px;
    margin: 0 auto;
</style>

