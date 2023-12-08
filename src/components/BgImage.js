import bgimage from './img/bgimage.jpeg';

function BgImage() {
  return (
    <div className="App">
        <div className="bg-cover bg-center h-screen flex justify-center"> 
          <img src={bgimage} className="App-logo absolute bg-black" alt="logo" />
          <h1 className="text-white text-4xl z-10">Hello, Tailwind!</h1>
        </div>
    </div>
  );
}

export default BgImage;
