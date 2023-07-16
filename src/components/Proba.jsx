import Footer from "./Footer";

const Proba = () => {
    return (
        <section className="body-font bg-gray-900 text-gray-400">
            <div className="container mx-auto flex min-h-screen flex-col pt-24">
                {/* <div className="flex h-full w-full flex-col flex-wrap items-center justify-evenly "> */}
                <div className="mx-5 flex flex-grow flex-col ">
                    {/* <div className="content flex w-full max-w-[1024px] flex-col items-center justify-center px-4 py-24 portrait:mt-0 landscape:md:pt-36 landscape:lg:mt-[12vh]"> */}
                    <div className="pb-10 text-center">
                        <p className="cursor-pointer border-b-4 border-accent text-2xl font-bold text-lightText duration-1000 hover:text-accent md:text-3xl lg:text-4xl">
                            Tell me what you need...
                        </p>
                    </div>
                    <form
                        method="POST"
                        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
                        className="flex w-full max-w-[800px] flex-col"
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
                            className="focus:ring-primary-300 group mx-auto mt-8 flex w-fit items-center rounded border-2 border-accent bg-darkText p-3 px-6 text-lg font-medium text-lightText hover:border-accent hover:text-paleGreen focus:outline-none focus:ring-4 landscape:mb-8"
                        >
                            SEND MESSAGE
                            <span className="group duration-700 group-hover:translate-x-2"></span>
                        </button>
                    </form>
                </div>
                <Footer />
            </div>
        </section>
    );
};

export default Proba;
