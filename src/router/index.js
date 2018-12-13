import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import FoundDetails from "../pages/details/FoundDetails";
import LostDetails from '../pages/details/LostDetails'
import Search from "../pages/search/Search";
import Me from '../pages/Me/Me'
import Login from '../pages/Login/Login'
import popupTwo from '../pages/home/components/popupTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/foundDetails',
      name: 'FoundDetails',
      component: FoundDetails
    },
    {
      path: '/lostDetails',
      name: 'LostDetails',
      component: LostDetails
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/pop',
      name: 'popupTwo',
      component: popupTwo
    }
  ]
})
