import delicious from "../assets/sites/delicious_kitchen.jpg";
import forecast from "../assets/sites/forecast_ai.jpg";
import stay from "../assets/sites/stay_safe.jpg";
import stronger from "../assets/sites/stronger_gym.jpg";
import tea from "../assets/sites/tea_time.jpg";
import coolclothes from "../assets/sites/cool_clothes.jpg";

function Work() {
    return (
        <section
            id="work"
            className="bg-darkText h-screen portrait:h-auto w-screen "
        >
            <div className="container h-full w-full items-center justify-center ">
                <div className="content max-w-[1024px] text-lightText landscape:pt-48 mt-0 portrait:pt-36 h-auto">
                    {/* Section Title */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold pb-4 ">
                        <span className="custom-underline hover:text-accent duration-1000 cursor-pointer">
                            WORK
                        </span>
                    </h2>
                    {/* Grid Container */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                        {/* Grid Element */}
                        <a
                            href="https://delicious-kitchen.netlify.app"
                            className="group relative flex flex-col bg-black overflow-hidden rounded-md portrait:max-h-[20vh] max-h-[30vh]"
                        >
                            <img
                                src={delicious}
                                alt="Delicious Kitchen"
                                className="landscape:h-[25vh] object-cover rounded-md hover:drop-shadow-lg group-hover:scale-110 group-hover:opacity-40 duration-500 "
                            />
                            <div className="hidden group-hover:flex flex-col  absolute h-full w-full justify-center text-white duration-300">
                                <h1 className="text-center text-2xl text-white pb-2">
                                    Delicious Kitchen
                                </h1>
                                <button className="w-[40%] mx-auto bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded duration-300">
                                    Have a look
                                </button>
                            </div>
                        </a>
                        {/* Grid Element */}
                        <a
                            href="https://strongergym.netlify.app/"
                            className="group relative flex flex-col bg-black overflow-hidden rounded-md portrait:max-h-[20vh] max-h-[30vh]"
                        >
                            <img
                                src={stronger}
                                alt="Stronger Gym"
                                className="landscape:h-[25vh] object-cover rounded-md hover:drop-shadow-lg group-hover:scale-110 group-hover:opacity-40 duration-500 "
                            />
                            <div className="hidden group-hover:flex flex-col  absolute h-full w-full justify-center text-white duration-300">
                                <h1 className="text-center text-2xl text-white pb-2">
                                    Stronger Gym
                                </h1>
                                <button className="w-[40%] mx-auto bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded duration-300">
                                    Have a look
                                </button>
                            </div>
                        </a>
                        {/* Grid Element */}
                        <a
                            href="https://polmario3.wixsite.com/coolclothes"
                            className="group relative flex flex-col bg-black overflow-hidden rounded-md portrait:max-h-[20vh] max-h-[30vh]"
                        >
                            <img
                                src={coolclothes}
                                alt="Cool Clothes"
                                className="landscape:h-[25vh] object-cover rounded-md hover:drop-shadow-lg group-hover:scale-110 group-hover:opacity-40 duration-500 "
                            />
                            <div className="hidden group-hover:flex flex-col  absolute h-full w-full justify-center text-white duration-300">
                                <h1 className="text-center text-2xl text-white pb-2">
                                    Cool Clothes
                                </h1>
                                <button className="w-[40%] mx-auto bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded duration-300">
                                    Have a look
                                </button>
                            </div>
                        </a>
                        {/* Grid Element */}
                        <a
                            href="https://forecast-ai.mariopolchert.com/"
                            className="group relative flex flex-col bg-black overflow-hidden rounded-md portrait:max-h-[20vh] max-h-[30vh]"
                        >
                            <img
                                src={forecast}
                                alt="Forecast AI"
                                className="landscape:h-[25vh] object-cover rounded-md hover:drop-shadow-lg group-hover:scale-110 group-hover:opacity-40 duration-500 "
                            />
                            <div className="hidden group-hover:flex flex-col  absolute h-full w-full justify-center text-white duration-300">
                                <h1 className="text-center text-2xl text-white pb-2">
                                    Forecast AI
                                </h1>
                                <button className="w-[40%] mx-auto bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded duration-300">
                                    Have a look
                                </button>
                            </div>
                        </a>
                        {/* Grid Element */}
                        <a
                            href="https://staysafeonline.mariopolchert.com/"
                            className="group relative flex flex-col bg-black overflow-hidden rounded-md portrait:max-h-[20vh] max-h-[30vh]"
                        >
                            <img
                                src={stay}
                                alt="Stay Safe Online"
                                className="landscape:h-[25vh] object-cover rounded-md hover:drop-shadow-lg group-hover:scale-110 group-hover:opacity-40 duration-500 "
                            />
                            <div className="hidden group-hover:flex flex-col  absolute h-full w-full justify-center text-white duration-300">
                                <h1 className="text-center text-2xl text-white pb-2">
                                    Stay Safe Online
                                </h1>
                                <button className="w-[40%] mx-auto bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded duration-300">
                                    Have a look
                                </button>
                            </div>
                        </a>
                        {/* Grid Element */}
                        <a
                            href="https://teatime.mariopolchert.com/p"
                            className="group relative flex flex-col bg-black overflow-hidden rounded-md portrait:max-h-[20vh] max-h-[30vh]"
                        >
                            <img
                                src={tea}
                                alt="Tea Time Shop"
                                className="landscape:h-[25vh] object-cover rounded-md hover:drop-shadow-lg group-hover:scale-110 group-hover:opacity-40 duration-500 "
                            />
                            <div className="hidden group-hover:flex flex-col  absolute h-full w-full justify-center text-white duration-300">
                                <h1 className="text-center text-2xl text-white pb-2">
                                    Tea Time Shop
                                </h1>
                                <button className="w-[40%] mx-auto bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded duration-300">
                                    Have a look
                                </button>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;
