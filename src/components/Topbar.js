import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Counties from "./Counties";
import Form from "./Form";

// const routes = [
//   // {
//   //   path:'',
//   //   Component:App,
//   // },
//   {
//     path:'home',
//     Component:Home,
//   },
//   {
//     path:'about',
//     Component:About,
//   }
// ];

const Routers = [
  {
    path: '/home',
    component: Home,
    // exact: true,
    name: "Home"
  },
  {
    path:'/about',
    component:About,
    // exact: true,
    name: "About"
  },
  {
    path:'/counties',
    component:Counties,
    // exact: true,
    name: "Counties"
  },
  {
    path:'/auth',
    component:Form,
    // exact: true,
    name: "Auth"
  },
];

function Topbar() {
  return (
    <div className="Topbar">
      {
        Routers.map(
          (item, key) =>
            <p key={key}>
              <Link to={item.path}>{item.name}</Link>
            </p>
        )
      }
      {Routers.map(
        (route, key)=>
          <Routes key={key}>
            <Route path={route.path} Component={route.component} >{route.name}</Route>
          </Routes>
        )
      }
      {/*
      <Link to="home"> Home </Link>
      <Link to="about"> About </Link>
      <Link to="contact"> Contact </Link>
      <Routes>
        <Route path="home" Component={ Home } />
        <Route path="about" Component={ About } />
        <Route path="contact" Component={ Contact } />
      </Routes>
        <Routes>
          <Route path="home" element={ <Home/> } />
          <Route path="about" element={ <About/> } />
          <Route path="contact" element={ <Contact/> } />
        </Routes>
      */}
    </div>
  )
}

export default Topbar;