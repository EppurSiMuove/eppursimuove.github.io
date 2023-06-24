const About = () => {
    return (
        <section id="about" className=" h-screen w-screen bg-darkText ">
            <div className="container h-full w-full flex flex-col items-center justify-center ">
                <div className="content max-w-[1024px] grid grid-cols-1 text-lightText">
                    <div className="space-y-4 portrait:mt-[5vh] mt-[10vh]">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold  hover:text-accent duration-1000">
                            <span className="custom-underline">ABOUT</span>
                        </h2>
                        <p className="portrait:text-2xl text-lg md:text-2xl">
                            Hi...I&apos;m
                            <span className=" md:animate-pulse hover:text-accent hover:animate-none cursor-pointer duration-1000">
                                &nbsp;Mario
                            </span>
                            , it&apos;s good to have you here. Have a look
                            around.
                        </p>
                        <p className="text-lg md:text-xl">
                            I&apos;m a passionate web developer dedicated to
                            delivering high-quality work. I have a solid
                            foundation in web technologies, and continuously
                            learning to provide optimal solutions. Collaboration
                            and communication are essential to success, and as a
                            quick learner and team player, I bring those skills
                            to every project. Offering website design,
                            development, and maintenance services. Let&apos;s
                            create something exceptional together!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
