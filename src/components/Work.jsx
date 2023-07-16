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
            className="h-screen w-screen bg-darkText portrait:h-auto"
        >
            <div className="container flex h-full w-full flex-col items-center justify-center ">
                <div className="content h-full max-w-[1024px] text-lightText portrait:pt-16 landscape:pt-[7vh] landscape:lg:pt-[5vh]">
                    {/* Section Title */}
                    <h2 className="pb-4 text-2xl  font-bold sm:text-3xl lg:text-4xl ">
                        <span className="custom-underline cursor-pointer duration-1000 hover:text-accent">
                            WORK
                        </span>
                    </h2>
                    {/* Grid Container */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
                        {/* Grid Element */}
                        <a
                            href="https://delicious-kitchen.netlify.app"
                            className="group relative flex max-h-[30vh] flex-col overflow-hidden rounded-md bg-black portrait:max-h-[20vh]"
                        >
                            <img
                                src={delicious}
                                alt="Delicious Kitchen"
                                className="rounded-md object-cover duration-500 hover:drop-shadow-lg group-hover:scale-110 group-hover:opacity-40 landscape:h-[25vh] "
                            />
                            <div className="absolute hidden h-full  w-full flex-col justify-center text-white duration-300 group-hover:flex">
                                <h1 className="pb-2 text-center text-2xl text-white">
                                    Delicious Kitchen
                                </h1>
                                <button className="mx-auto w-[40%] rounded bg-green-500 px-4 py-2 font-bold text-white duration-300 hover:bg-green-800">
                                    Have a look
                                </button>
                            </div>
                        </a>
                        {/* Grid Element */}
                        <a
                            href="https://strongergym.netlify.app/"
                            className="group relative flex max-h-[30vh] flex-col overflow-hidden rounded-md bg-black portrait:max-h-[20vh]"
                        >
                            <img
                                src={stronger}
                                alt="Stronger Gym"
                                className="rounded-md object-cover duration-500 hover:drop-shadow-lg group-hover:scale-110 group-hover:opacity-40 landscape:h-[25vh] "
                            />
                            <div className="absolute hidden h-full  w-full flex-col justify-center text-white duration-300 group-hover:flex">
                                <h1 className="pb-2 text-center text-2xl text-white">
                                    Stronger Gym
                                </h1>
                                <button className="mx-auto w-[40%] rounded bg-green-500 px-4 py-2 font-bold text-white duration-300 hover:bg-green-800">
                                    Have a look
                                </button>
                            </div>
                        </a>
                        {/* Grid Element */}
                        <a
                            href="https://polmario3.wixsite.com/coolclothes"
                            className="group relative flex max-h-[30vh] flex-col overflow-hidden rounded-md bg-black portrait:max-h-[20vh]"
                        >
                            <img
                                src={coolclothes}
                                alt="Cool Clothes"
                                className="rounded-md object-cover duration-500 hover:drop-shadow-lg group-hover:scale-110 group-hover:opacity-40 landscape:h-[25vh] "
                            />
                            <div className="absolute hidden h-full  w-full flex-col justify-center text-white duration-300 group-hover:flex">
                                <h1 className="pb-2 text-center text-2xl text-white">
                                    Cool Clothes
                                </h1>
                                <button className="mx-auto w-[40%] rounded bg-green-500 px-4 py-2 font-bold text-white duration-300 hover:bg-green-800">
                                    Have a look
                                </button>
                            </div>
                        </a>
                        {/* Grid Element */}
                        <a
                            href="https://forecast-ai.mariopolchert.com/"
                            className="group relative flex max-h-[30vh] flex-col overflow-hidden rounded-md bg-black portrait:max-h-[20vh]"
                        >
                            <img
                                src={forecast}
                                alt="Forecast AI"
                                className="rounded-md object-cover duration-500 hover:drop-shadow-lg group-hover:scale-110 group-hover:opacity-40 landscape:h-[25vh] "
                            />
                            <div className="absolute hidden h-full  w-full flex-col justify-center text-white duration-300 group-hover:flex">
                                <h1 className="pb-2 text-center text-2xl text-white">
                                    Forecast AI
                                </h1>
                                <button className="mx-auto w-[40%] rounded bg-green-500 px-4 py-2 font-bold text-white duration-300 hover:bg-green-800">
                                    Have a look
                                </button>
                            </div>
                        </a>
                        {/* Grid Element */}
                        <a
                            href="https://staysafeonline.mariopolchert.com/"
                            className="group relative flex max-h-[30vh] flex-col overflow-hidden rounded-md bg-black portrait:max-h-[20vh]"
                        >
                            <img
                                src={stay}
                                alt="Stay Safe Online"
                                className="rounded-md object-cover duration-500 hover:drop-shadow-lg group-hover:scale-110 group-hover:opacity-40 landscape:h-[25vh] "
                            />
                            <div className="absolute hidden h-full  w-full flex-col justify-center text-white duration-300 group-hover:flex">
                                <h1 className="pb-2 text-center text-2xl text-white">
                                    Stay Safe Online
                                </h1>
                                <button className="mx-auto w-[40%] rounded bg-green-500 px-4 py-2 font-bold text-white duration-300 hover:bg-green-800">
                                    Have a look
                                </button>
                            </div>
                        </a>
                        {/* Grid Element */}
                        <a
                            href="https://teatime.mariopolchert.com/"
                            className="group relative flex max-h-[30vh] flex-col overflow-hidden rounded-md bg-black portrait:max-h-[20vh]"
                        >
                            <img
                                src={tea}
                                alt="Tea Time Shop"
                                className="rounded-md object-cover duration-500 hover:drop-shadow-lg group-hover:scale-110 group-hover:opacity-40 landscape:h-[25vh] "
                            />
                            <div className="absolute hidden h-full  w-full flex-col justify-center text-white duration-300 group-hover:flex">
                                <h1 className="pb-2 text-center text-2xl text-white">
                                    Tea Time Shop
                                </h1>
                                <button className="mx-auto w-[40%] rounded bg-green-500 px-4 py-2 font-bold text-white duration-300 hover:bg-green-800">
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
