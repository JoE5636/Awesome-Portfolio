export default function Hero() {
  return (
    <div className="animacion shadow-xl h-[100vh]">
      <div className="px-6 pt-40 lg:px-8">
        <div className="flex flex-row gap-8 mx-10 py-10 sm:py-10 lg:py-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Hi! I'm Joel De la Rosa,
              <br></br>
              Frontend Web Developer from México City
            </h1>
            <p className="mt-6 text-2xl leading-8 text-gray-400">
              Scroll down if you want to know more about me and my work.
              <br></br>
              Let's go!!!
            </p>
          </div>
          <div className="h-fit w-fit rounded-full border-4 border-cyan-400 bg-gray-100">
            <img
              className="w-fit h-fit rounded-full"
              src="src/assets/hola.png"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
