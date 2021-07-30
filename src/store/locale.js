import axios from "axios"
import i18n from "../plugins/i18n"

export default {
  state: {
    locale: null
  },
  getters: {
    locale(state) {
      return state.locale
    }
  },
  mutations: {
    setLocale(state, locale) {
      state.locale = locale
    }
  },
  actions: {
    setLocale({ commit }, locale) {
      commit('setLocale', locale)

      axios.get(`${document.location.origin}/langs/${locale}.json`).then((res) => {
        i18n.setLocaleMessage(locale, res.data);
        i18n.locale = locale;
      });
    }
  }
}