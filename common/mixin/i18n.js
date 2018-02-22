
export const i18nPathMixin = {
    asyncData(context) {
        return { path: context.app.i18n.path() }
    },
    data() {
        return { path: '/' }
    },
    methods: {
        navTo(url) {
            let path = url !== 'home' ? `${this.path}${url}` : this.path
            this.$router.push(path)
        }
    }

}
