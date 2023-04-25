import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from "../views/Home.vue";
import ResultView from "../views/Result.vue";
import PolicyView from "../views/Policy.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Vocabulary Quiz Club - Learn foreign language with free vocabulary quizzes', desc: 'Improve your foreign language skills with our free vocabulary quiz game! Play now and expand your vocabulary in Chinese, French, German, Italian, Japanese, Portuguese, Russian, Spanish, and more.' }
  },
  {
    path: '/:language',
    name: 'language',
    component: HomeView,
    meta: { title: ':language | Vocabulary Quiz Club', desc: 'Improve your foreign language skills with our free vocabulary quiz game! Play now and expand your vocabulary in :language.' }
  },
  {
    path: '/result',
    name: 'result',
    component: ResultView,
    meta: { title: 'Quiz Result | Vocabulary Quiz Club', desc: 'Check out your progress and improve your language skills with our quiz result page! Discover your strengths and weaknesses and track your progress with our free vocabulary quiz game.' }
  },
  {
    path: '/policy',
    name: 'policy',
    component: PolicyView,
    meta: { title: 'Privacy Policy | Vocabulary Quiz Club', desc: 'Your privacy is important to us. Learn about how we protect your data and personal information with our privacy policy page for our free vocabulary quiz game.' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
