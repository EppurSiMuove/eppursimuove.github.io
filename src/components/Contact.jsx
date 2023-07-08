const Contact = () => {
    const year = new Date().getFullYear();
    return (
        <section
            id="contact"
            className="bg-darkText h-auto w-screen scroll-smooth portrait:h-screen "
        >
            <div className="container h-full w-full flex flex-col items-center justify-center pt-16 landscape:md:mt-0">
                <div className="content max-w-[1024px] px-4 flex flex-col justify-center items-center w-full h-auto mt-16 landscape:lg:pt-0">
                    <div className="pb-16">
                        <p className="text-2xl md:text-3xl lg:text-4xl font-bold border-b-4 text-lightText border-accent hover:text-accent cursor-pointer duration-1000">
                            Tell me what you need...
                        </p>
                    </div>
                    <form
                        method="POST"
                        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
                        className="flex flex-col max-w-[800px] w-full"
                    >
                        <div>
                            <label
                                htmlFor="email"
                                className="block mt-0 mb-1 text-xl font-medium text-lightText dark:text-lightText"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm bg-[#333333] border-2 border-paleGreen text-lightText text-lg rounded-lg focus:border-accent block w-full p-2.5 placeholder:text-lg"
                                placeholder="Your best @mail"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="block mt-5 mb-1 text-xl font-medium text-lightText"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="block p-3 w-full bg-[#333333] text-lg text-lightText rounded-lg border-2 border-paleGreen shadow-sm  focus:border-accent placeholder:text-lg"
                                placeholder="Name your problem"
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mt-5 mb-1 text-xl font-medium text-lightText"
                            >
                                How can I help you?
                            </label>
                            <textarea
                                id="message"
                                rows="3"
                                className="block p-2.5 w-full text-lg text-lightText bg-[#333333] rounded-lg shadow-sm border-2 border-paleGreen   focus:border-accent  placeholder:text-lg"
                                placeholder="Describe your problem..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="group mx-auto flex items-center p-3 px-6 landscape:mb-8 mt-16 text-lg font-medium border-2 border-accent bg-darkText text-lightText rounded w-fit hover:text-paleGreen hover:border-accent focus:ring-4 focus:outline-none focus:ring-primary-300"
                        >
                            SEND MESSAGE
                            <span className="group group-hover:translate-x-2 duration-700">
                                {/* <FiArrowRightCircle className="group text-2xl ml-3 md:animate-pulse  text-red-500 " /> */}
                            </span>
                        </button>
                        <footer className="portrait:pt-24 landscape:pb-10 w-full landscape:h-[10vh] landscape:md:h-[5vh] bg-darkText flex justify-center box-border">
                            <h1 className="text-lightText bg-darkText">
                                Made by Mario Polchert &copy; {year}
                            </h1>
                        </footer>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
