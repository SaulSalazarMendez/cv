import Skills from './componentes/skills.js';
import Resumen from './componentes/resumen.js';
import Experiencia from './componentes/experiencia.js';
import Portafolio from './componentes/portafolio.js';
import Estudios from './componentes/estudios.js';
import Inicio from './componentes/inicio.js';

const routes = [
  { path: '/skills', component: Skills },
  { path: '/resumen', component: Resumen },
  { path: '/experiencia', component: Experiencia },
  { path: '/portafolio', component: Portafolio },
  { path: '/estudios', component: Estudios },
  { path: '/', component: Inicio },
];

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
