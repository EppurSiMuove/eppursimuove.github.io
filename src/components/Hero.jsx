const Hero = () => {
    return (
        <section id="home" className="bg-darkText grid h-screen w-screen ">
            <div className="h-full w-full grid place-content-center">
                <div className="pt-[10vh] portrait:pt-[10vh]  md:pl-12 md:pt-[10vh]">
                    <h2 className="portrait:mx-auto landscape:text-left portrait:text-center portrait:text-[1.7rem] landscape:text-2xl  landscape:lg:text-5xl md:text-[3rem]  text-paleGreen hover:text-accent duration-1000 cursor-pointer font-bold tracking-normal w-fit">
                        Welcome to my website, my name is...
                    </h2>
                    <h1 className="portrait:mx-auto landscape:text-left portrait:text-center text-[2rem] portrait:text-[3rem] landscape:text-3xl landscape:md:text-4xl landscape:lg:text-6xl font-bold text-lightText cursor-pointer hover:text-accent duration-1000 tracking-normal w-fit">
                        Mario Polchert
                    </h1>
                    <h2
                        className="portrait:mx-auto landscape:text-left portrait:text-center text-[4rem] portrait:text-[1.7rem] md:text-[3rem]
                    landscape:text-2xl landscape:md:text-3xl landscape:lg:text-5xl  font-bold text-paleGreen hover:text-accent duration-1000 cursor-pointer tracking-normal w-fit"
                    >
                        I&apos;m a Web Developer
                    </h2>
                    <button
                        type="button"
                        className="btn-group group flex portrait:mx-auto mt-[10vh] portrait:mt-[10vh]  md:mt-[5vh] md:w-fit lg:ml-0 text-lightText hover:text-accent hover:border-red-600 bg-darkText border-accent border-2 font-semibold rounded-md text-lg px-5 py-2.5  duration-500"
                    >
                        <a href="#work" className="flex space-x-4 items-center">
                            <span className="flex mx-auto items-center">
                                SEE MY WORK...
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-8 h-8 py-auto group-hover:text-red-600 group-hover:duration-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;

<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
>
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
</svg>;
