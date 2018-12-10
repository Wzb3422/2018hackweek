import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import FoundDetails from "../pages/details/FoundDetails";
import Search from "../pages/search/Search";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/foundDetails',
      name: 'FoundDetails',
      component: FoundDetails
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
