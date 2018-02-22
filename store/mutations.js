import * as types from './mutation-types'
// import localOrCookie from '~/common/base'
// const local = localOrCookie.localOrCookie()

const localMutations = {
  [types.SET_LANG](state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  [types.SET_TEST](state, test) {
    state.test = test
  }
}

export default localMutations
