import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/home'
import AboutUs from '@/pages/about-us/about-us'
import GetStarted from '@/pages/get-started/get-started'
import Treatments from '@/pages/treatments/treatments'
import Invisalign from '@/pages/invisalign/invisalign'
import WildSmiles from '@/pages/wild-smiles/wild-smiles'
import ContactUs from '@/pages/contact-us/contact-us'
import Blog from '@/pages/blog/blog'
import BlogPost from '@/pages/blog-post/blog-post'
import PageNotFound from '@/pages/404/404'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'About Us',
      component: AboutUs
    },
    {
      path: '/get-started',
      name: 'Getting Started',
      component: GetStarted
    },
    {
      path: '/treatments',
      name: 'Treatments',
      component: Treatments
    },
    {
      path: '/invisalign',
      name: 'Invisalign',
      component: Invisalign
    },
    {
      path: '/wild-smiles',
      name: 'Wild Smiles',
      component: WildSmiles
    },
    {
      path: '/Contact-us',
      name: 'Contact',
      component: ContactUs
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog-post/:id',
      name: 'BlogPost',
      component: BlogPost,
      navigation: false,
      props: {}
    },
    {
      path: '/*',
      name: 'page-not-found',
      component: PageNotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
