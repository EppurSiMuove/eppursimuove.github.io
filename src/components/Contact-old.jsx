import Footer from "./Footer";

const Contact = () => {
    return (
        <section
            id="contact"
            className="flex h-screen w-full flex-col justify-between  scroll-smooth bg-darkText landscape:h-auto landscape:lg:h-screen"
        >
            <div className="content flex max-w-[1024px] flex-col items-center px-4 portrait:pt-[5vh] landscape:mt-[30vh] landscape:h-auto landscape:lg:pt-0">
                <div className="pb-12  landscape:pb-12">
                    <p className="custom-underline cursor-pointer text-2xl font-bold text-lightText duration-1000 hover:text-accent md:text-3xl lg:text-4xl">
                        Tell me what you need...
                    </p>
                </div>
                <form
                    method="POST"
                    action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
                    className="mb-auto flex w-full max-w-[800px] flex-col"
                >
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-1 mt-0 block text-xl font-medium text-lightText dark:text-lightText"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="block w-full rounded-lg border-2 border-paleGreen bg-[#333333] p-2.5 text-lg text-lightText shadow-sm placeholder:text-lg focus:border-accent"
                            placeholder="Your best @mail"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="subject"
                            className="mb-1 mt-5 block text-xl font-medium text-lightText"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="block w-full rounded-lg border-2 border-paleGreen bg-[#333333] p-3 text-lg text-lightText shadow-sm  placeholder:text-lg focus:border-accent"
                            placeholder="Name your problem"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="mb-1 mt-5 block text-xl font-medium text-lightText"
                        >
                            How can I help you?
                        </label>
                        <textarea
                            id="message"
                            rows="3"
                            className="block w-full rounded-lg border-2 border-paleGreen bg-[#333333] p-2.5 text-lg text-lightText shadow-sm   placeholder:text-lg  focus:border-accent"
                            placeholder="Describe your problem..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="focus:ring-primary-300 group mx-auto mt-16 flex w-fit items-center rounded border-2 border-accent bg-darkText p-3 px-6 text-lg font-medium text-lightText hover:border-accent hover:text-paleGreen focus:outline-none focus:ring-4 landscape:mb-8"
                    >
                        SEND MESSAGE
                        <span className="group duration-700 group-hover:translate-x-2"></span>
                    </button>
                </form>
            </div>
            <div className="footer mt-auto pb-4">
                <Footer />
            </div>
        </section>
    );
};

export default Contact;

