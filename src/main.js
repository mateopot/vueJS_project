import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Edit from './components/Edit'
import Details from './components/Details'
import Rate from './components/Rate'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'



Vue.use(BootstrapVue)
Vue.use(VueRouter);


Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/edit/:id', component: Edit, name: "edittest" },
  { path: '/movie/:id', component: Details, name: "details" },
  { path: '/movie/:id/edit', component: Edit, name: "edit" },
  { path: '/movie/:id/rate', component: Rate, name: "rate" }

]

const router = new VueRouter({
  routes
})

window.shared_data = {
  movies: [
    {
      id: 0,
      title: "Seven",
      releaseDate: 1995,
      language: "English",
      director: {
        first_name: "David",
        last_name: "Fincher",
        nationality: "Américain",
        birth_date: "28/08/1962",
      },
      synopsis:
        "Pour conclure sa carrière, l'inspecteur Somerset, vieux flic blasé, tombe à sept jours de la retraite sur un criminel peu ordinaire. John Doe, c'est ainsi que se fait appeler l'assassin, a decidé de nettoyer la societé des maux qui la rongent en commettant sept meurtres basés sur les sept pechés capitaux: la gourmandise, l'avarice, la paresse, l'orgueil, la luxure, l'envie et la colère.",
      genre: "Policier",
      rating: null,
      img: "greenmile.png"
    },
    {
      id: 1,
      title: "Zodiac",
      releaseDate: 2007,
      language: "English",
      director: {
        first_name: "David",
        last_name: "Fincher",
        nationality: "Americain",
        birth_date: "28/08/1962"
      },
      synopsis:
        "Zodiac, l'insaisissable tueur en série qui sévit à la fin des années 60 et répandit la terreur dans la région de San Francisco, fut le Jack l'Eventreur de l'Amérique. Prodigue en messages cryptés, il semait les indices comme autant de cailloux blancs, et prenait un malin plaisir à narguer la presse et la police. Il s'attribua une trentaine d'assassinats, mais fit bien d'autres dégâts collatéraux parmi ceux qui le traquèrent en vain.Robert Graysmith, jeune et timide dessinateur de presse, n'avait ni l'expérience ni les relations de son brillant collègue Paul Avery, spécialiste des affaires criminelles au San Francisco Chronicle. Extérieur à l'enquête, il n'avait pas accès aux données et témoignages dont disposait le charismatique Inspecteur David Toschi et son méticuleux partenaire, l'Inspecteur William Armstrong. Le Zodiac n'en deviendrait pas moins l'affaire de sa vie, à laquelle il consacrerait dix ans d'efforts et deux ouvrages d'une vertigineuse précision...",
      genre: "Policier",
      rating: null,
      img: "grantorino.jpg"
    },
    {
      id: 2,
      title: "Prisoners",
      releaseDate: 2013,
      language: "English",
      director: {
        first_name: "Denis",
        last_name: "Villeneuve",
        nationality: "Canadien",
        birth_date: "03/10/1967"
      },
      synopsis:
        "Dans la banlieue de Boston, deux fillettes de 6 ans, Anna et Joy, ont disparu. Le détective Loki privilégie la thèse du kidnapping suite au témoignage de Keller, le père d’Anna. Le suspect numéro 1 est rapidement arrêté mais est relâché quelques jours plus tard faute de preuve, entrainant la fureur de Keller. Aveuglé par sa douleur, le père dévasté se lance alors dans une course contre la montre pour retrouver les enfants disparus. De son côté, Loki essaie de trouver des indices pour arrêter le coupable avant que Keller ne commette l’irréparable… Les jours passent et les chances de retrouver les fillettes s’amenuisent…",
      genre: "Policier",
      rating: null,
      img: "lesevades.jpg"
    },
    {
      id: 3,
      title: "Memento",
      releaseDate: 2000,
      language: "English", 
      director: {
        first_name: "Christopher",
        last_name: "Nolan",
        nationality: "Britannique",
        birth_date: "30/07/1970"
      },
      synopsis:
        "Leonard Shelby ne porte que des costumes de grands couturiers et ne se déplace qu'au volant de sa Jaguar. En revanche, il habite dans des motels miteux et règle ses notes avec d'épaisses liasses de billets.Leonard n'a qu'une idée en tête : traquer l'homme qui a violé et assassiné sa femme afin de se venger. Sa recherche du meurtrier est rendue plus difficile par le fait qu'il souffre d'une forme rare et incurable d'amnésie. Bien qu'il puisse se souvenir de détails de son passé, il est incapable de savoir ce qu'il a fait dans le quart d'heure précédent, où il se trouve, où il va et pourquoi.Pour ne jamais perdre son objectif de vue, il a structuré sa vie à l'aide de fiches, de notes, de photos, de tatouages sur le corps. C'est ce qui l'aide à garder contact avec sa mission, à retenir les informations et à garder une trace, une notion de l'espace et du temps.",
      genre: "Policier",
      rating: null,
      img: "blooddiamond.jpg"
    },
    {
      id: 4,
      title: "Gone girl",
      releaseDate: 2014,
      language: "English", 
      director: {
        first_name: "David",
        last_name: "Fincher",
        nationality: "Americain",
        birth_date: "28/08/1962"
      },
      synopsis:
        "À l’occasion de son cinquième anniversaire de mariage, Nick Dunne signale la disparition de sa femme, Amy. Sous la pression de la police et l’affolement des médias, l’image du couple modèle commence à s’effriter. Très vite, les mensonges de Nick et son étrange comportement amènent tout le monde à se poser la même question : a-t-il tué sa femme ?",
      genre: "Policier",
      rating: null,
      img: "forrestgump.jpg"
    }
  ]
}

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


