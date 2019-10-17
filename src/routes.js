import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Shipping from './components/Shipping.vue'
import History from './components/History.vue'
import PurchaseGuide from './components/PurchaseGuide.vue'
import Admin from './components/Admin.vue'
import Seller from './components/Seller.vue'

export const routes = [
    { path: '/', 
      name: 'homeLink', 
      components: {
          default: Home,
          "purchase-guide": PurchaseGuide,
          "shipping": Shipping,
          "history": History,
      }},
    { path: '/menu', name: 'menuLink', component: Menu },
    { path: '/admin', name: 'adminLink', component: Admin, beforeEnter: (to,from,next) => {
      next();

    }},
    { path: '/seller', name: 'sellerLink', component: Seller, beforeEnter: (to,from,next) => {
      next();
    }},
    { path: '/about', name: 'aboutLink', component: About, children: [
      { path: '/contact', name: 'contactLink', component: Contact },
      { path: '/history', name: 'historyLink', component: History },
      { path: '/shipping', name: 'shippingLink', component: Shipping },
      { path: '/purchase-guide', name: 'purchaseGuideLink', component: PurchaseGuide }
    ]},
    { path: '*', redirect: '/'}
  ]