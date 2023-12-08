import bgimage from './img/bgimg.jpeg';
import Login from './components/Login.js';

function App() {
  return (
    <div className="App">
      <div className="bg-cover bg-center flex justify-center">
        <img src={bgimage} className="App-logo absolute bg-black backgroundImg h-full w-full" alt="logo" />
          <header>
            <div className=" flex justify-left">
              <a href="#">
                <h6 className="text-xl text-white">Login Page</h6>
              </a>
            </div>
          {/*
            <div className=" justify-right">
              <a href="#">
                <h6 className="text-xl text-white">Dashboard</h6>
              </a>
              <a href="#">
                <h6 className="text-xl text-white">Register</h6>
              </a>
              <a href="#">
                <h6 className="text-xl text-white">Login</h6>
              </a>
            </div>
          */}
          </header>
        <Login/>
      </div>
      <div className="flex justify-left">
        <a href="#">
          <h6 className="text-xl text-white mr-2">HOME</h6>
        </a>
        <a href="#">
          <h6 className="text-xl text-white mr-2">COMPANY</h6>
        </a>
        <a href="#">
          <h6 className="text-xl text-white mr-2">PORTFOLIO</h6>
        </a>
        <a href="#">
          <h6 className="text-xl text-white mr-2">BLOG</h6>
        </a>
      </div>
    </div>
  );
}

export default App;
