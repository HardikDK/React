import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
// import Contact from "./Contact";
import Counties from "./Counties";
import Form from "./Form";
import ListTable from "./crud/ListTable";
// import EditUser from "./crud/EditUser";
import AddUser from "./crud/AddUser";
import Posts from "./crud/Posts";
import Create from "./crud/Create";

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
  {
    path:'/users/list',
    component:ListTable,
    // exact: true,
    name: "UsersList"
  },
  {
    path:'/user/edit/:id',
    component:AddUser,
    // exact: true,
    name: "EditUser"
  },
  {
    path:'/user/add',
    component:AddUser,
    // exact: true,
    name: "AddUser"
  },
  {
    path:'/posts',
    component:Posts,
    // exact: true,
    name: "Posts"
  },
  {
    path:'/create',
    component:Create,
    // exact: true,
    name: "Create"
  },
];

function Topbar() {
  return (
    <div>
    <div className="flex">
      {
        Routers.map(
          (item, key) =>
            <p key={key}>
              <Link to={item.path} className="p-2">{item.name}</Link>
            </p>
        )
      }
    </div>
    <div>
      {Routers.map(
        (route, key)=>
          <Routes key={key}>
            <Route path={route.path} Component={route.component} >{route.name}</Route>
          </Routes>
        )
      }
    </div>
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