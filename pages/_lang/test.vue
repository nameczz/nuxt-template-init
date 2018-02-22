<template>
  <section class="test">
    <div class="box">
        <el-button class="button" @click="navTo('home')">{{$t('title')}}</el-button>
        <el-button class="button" @click="languageChange('ch')">中文</el-button>
        <el-button class="button" @click="languageChange('en')">英文</el-button>
        <el-time-select
            v-model="value1"
            :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
            }"
            placeholder="选择时间">
        </el-time-select>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { i18nPathMixin } from '~/common/mixin/i18n'

export default {
    mixins: [i18nPathMixin],
    data() {
        return {
            value1: ''
        };
    },
    computed: {
        ...mapGetters(['test', 'locale'])
    },
    created() {
        console.log(this.test)
    },
    methods: {
        // 切换语言的方法
        languageChange(language) {
            let name = ''
            const currentPath = this.$route.fullPath
            console.log(currentPath)
            if (language === 'en') {
                if (this.locale === 'en') {
                    return
                }
                /* eslint-disable no-useless-escape */
                name = currentPath.replace(/^\/ch/, '').replace(/_cn(?=$)/, '')
                console.log(name)
            } else {
                if (this.locale === 'ch') {
                    return
                }
                name = `/ch${currentPath}`
            }
            this.$router.push(name)
        },
    }
}
</script>
<style lang="stylus" scoped>
.test
    height: 100vh;
    background: yellow;

    .box
        text-align: center;

</style>

