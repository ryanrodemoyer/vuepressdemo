// /**
//  * Client app enhancement file.
//  *
//  * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
//  */

// export default ({
//   Vue, // the version of Vue being used in the VuePress app
//   options, // the options for the root Vue instance
//   router, // the router instance for the app
//   siteData // site metadata
// }) => {
//   // ...apply enhancements to the app
// }


/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

import Vuex from 'vuex'
import axios from 'axios'
import store from './store'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {

  Vue.prototype.$http = axios;

  Vue.use(Vuex);
  Vue.mixin({ store: store });
}