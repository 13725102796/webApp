const Home = () => import('@/page/home/home')

export default [
  {
    path: '*',
    name: 'Home',
    component: Home
  }
]