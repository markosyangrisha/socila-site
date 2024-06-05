import Home_Page from '../pages/Home_Page.vue'
import Friends_Page from '../pages/Friends_Page.vue'
import Message_Page from '../pages/Message_Page.vue'
import User_Page from '../pages/User_Page.vue'

export const routes = [
  // { pathName: 'Home', path: '/', component: () => import('../pages/Home_Page.vue') },
  { name: 'Home', path: '/', component: Home_Page },
  { name: 'Friends', path: '/friends', component: Friends_Page },
  { name: 'Massage', path: '/message', component: Message_Page },
  { name: 'User', path: '/user', component: User_Page }
]
