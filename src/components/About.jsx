const About = () => {
    return (
        <section
            id="about"
            className="grid min-h-screen w-screen bg-darkText landscape:scroll-mt-16 landscape:lg:scroll-mt-0 landscape:pt-12 landscape:lg:pt-0 "
        >
            <div className="grid place-content-center h-auto px-4 md:w-1/2 mx-auto ">
                <div className=" text-lightText space-y-8 portrait:space-y-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-300 ">
                        About me
                    </h2>
                    <p className="text-center text-lg md:text-2xl landscape-xs:text-2xl portrait:text-2xl md:animate-pulse hover:animate-none cursor-pointer">
                        Hi...I&apos;m
                        <span className="text-paleGreen cursor-pointer duration-1000 hover:animate-none hover:text-accent">
                            &nbsp;Mario
                        </span>
                        , it&apos;s good to have you here. Have a look around.
                    </p>
                    <p className="text-center text-lg md:text-xl landscape-xs:text-xl">
                        I&apos;m a passionate web developer dedicated to
                        delivering high-quality work. I have a solid foundation
                        in web technologies, and I&apos;m continuously learning
                        to provide optimal solutions. Collaboration and
                        communication are essential to success, and as a quick
                        learner and team player, I bring those skills to every
                        project. Offering website design, development, and
                        maintenance services. <br />
                        <h2
                            title="Contact me"
                            className="block mt-4 text-lg md:text-2xl landscape-xs:text-2xl portrait:text-2xl cursor-pointer hover:text-accent"
                        >
                            <a href="#contact">
                                Let&apos;s create something exceptional
                                together!
                            </a>
                        </h2>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
