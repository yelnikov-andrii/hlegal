import { Home } from "../Pages/Home";
import { About } from "../Pages/About";
import { Team } from "../Pages/Team";
import { TeamEntry } from "../Pages/TeamEntry";
import { Contact } from "../Pages/Contact";
import { Publications } from "../Pages/Publications";
import { Publication } from "../Pages/Publication";
import { Services } from "../Pages/Services";
import { Service } from "../Pages/Service";


export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/team',
    component: Team,
  },
  {
    path: '/team/:id',
    component: TeamEntry,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/publications',
    component: Publications,
  },
  {
    path: '/publications/:id',
    component: Publication,
  },
  {
    path: '/services',
    component: Services,
  },
  {
    path: '/services/:id',
    component: Service,
  }
]