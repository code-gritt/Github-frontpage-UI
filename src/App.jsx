import git_bg from "./assets/git_bg.webp";

function App() {
  return (
    <>
      <div className=" ">
        <div className="relative z-50">
          <div className="absolute text-white">Navbar</div>
        </div>
        <div>
          <div className="overflow-hidden">
            <div className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image">
              <img width="4377" src={git_bg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
