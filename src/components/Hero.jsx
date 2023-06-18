const Hero = () => {
    return (
        <section id="home" className="bg-green-300 h-screen w-screen ">
            <div className="container h-full w-full flex flex-col items-center justify-center bg-teal-300">
                <div className="content pl-48">
                    <h2 className="text-center md:text-left text-3xl  md:text-3xl lg:text-4xl text-paleGreen hover:text-accent duration-1000 py-4 cursor-pointer font-bold">
                        Welcome to my website, my name is...
                    </h2>
                    <h1 className="text-center md:text-left h-12 text-3xl  md:text-7xl lg:text-7xl md:h-20 font-bold text-lightText cursor-pointer hover:text-accent duration-1000">
                        Mario Polchert
                    </h1>
                    <h2 className="text-center md:text-left  text-3xl md:text-7xl lg:text-7xl font-bold text-paleGreen hover:text-accent duration-1000 cursor-pointer">
                        I'm a Web Developer
                    </h2>
                    <div className="pt-4 sm:flex flex-row space-x-4 mx-auto md:mx-0 justify-center md:justify-start">
                        <button
                            className="group flex flex-row items-center justify-around md:w-60 h-16 lg:text-lg text-lightText border-2 border-accent rounded px-6 py-3 my-2 hover:text-paleGreen hover:border-accent group-hover:duration-1000"
                            href="#work"
                        >
                            <span>SEE MY WORK...</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
