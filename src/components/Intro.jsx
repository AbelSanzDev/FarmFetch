import image from "../img/farmnew.png";
const Intro = ({ handleButton }) => {
  const handleState = () => {
    handleButton();
  };
  return (
    <>
      <div>
        <div className=" h-screen w-screen bg-black  ">
          <div className=" container mx-auto">
            <div className="flex">
              <div className="py-20">
                <h1 className="text-9xl text-white font-bold">FarmFeth</h1>
                <div className=" mt-40 animate-bounce">
                  <p className="text-7xl text-white w-4/6 font-bold">
                    Para las granjas mas eficientes, y personas mas inteligentes
                    somos Fetch somo FarmFetch &copy;
                  </p>
                </div>
              </div>
              <div className="grid place-items-center ">
                <img
                  className="rounded-full animate-pulse"
                  src={image}
                  alt=""
                />
              </div>
            </div>

            <div className="grid place-items-center">
              <button
                className="text-white text-6xl p-1 rounded-md font-bold newbgcolor"
                onClick={() => handleState()}
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
