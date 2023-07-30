const Hero = () => {
    return (
        <section id="home" className="bg-darkText grid h-screen w-screen ">
            <div className="h-full w-full grid place-content-center portrait:p-4">
                <div className="pt-[10vh] portrait:pt-[10vh] flex flex-col md:pl-12 md:pt-0 space-y-4">
                    <h2 className="portrait:mx-auto landscape:text-left portrait:text-center portrait:text-[1.3rem] landscape:text-2xl  landscape:lg:text-5xl md:text-[3rem]  text-paleGreen hover:text-accent duration-1000 cursor-pointer font-bold tracking-normal w-fit">
                        Welcome to my website, my name is...
                    </h2>
                    <h1 className="portrait:mx-auto landscape:text-left portrait:text-center text-[2rem] portrait:text-[2rem] landscape:text-3xl landscape:md:text-4xl landscape:lg:text-6xl font-bold text-lightText cursor-pointer hover:text-accent duration-1000 tracking-normal w-fit">
                        Mario Polchert
                    </h1>
                    <h2
                        className="portrait:mx-auto landscape:text-left portrait:text-center text-[4rem] portrait:text-[1.3rem] md:text-[3rem]
                    landscape:text-2xl landscape:md:text-3xl landscape:lg:text-5xl  font-bold text-paleGreen hover:text-accent duration-1000 cursor-pointer tracking-normal w-fit"
                    >
                        I&apos;m a Web Developer
                    </h2>
                    <button
                        type="button"
                        className="custom-button portrait:mx-auto landscape:w-12 landscape:mt-4 landscape:lg:mt-0"
                    >
                        <a href="#work">See my work...</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
