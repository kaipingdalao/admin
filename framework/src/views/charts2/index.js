/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts2',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts2',
  meta: {
    title: 'Charts2',
    icon: 'chart',
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('./keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'Keyboard Chart', noCache: true },
    },
    {
      path: 'line',
      component: () => import('./line'),
      name: 'LineChart',
      meta: { title: 'Line Chart', noCache: true },
    },
    {
      path: 'mix-chart',
      component: () => import('./mix-chart'),
      name: 'MixChart',
      meta: { title: 'Mix Chart', noCache: true },
    },
  ],
}

export default chartsRouter
