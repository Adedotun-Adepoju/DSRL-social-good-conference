import Committee from "src/pages/committee/Committee.vue"
const routes = [
  {
    path: '/',
    component: () => import('pages/Index.vue'),
    children: []
  },
  {
    path: '/committee',
    component: Committee,
    name: "committee",
    children: []
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
