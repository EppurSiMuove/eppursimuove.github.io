import Footer from "./Footer";

const Contact = () => {
    return (
        <section
            id="contact"
            className="bg-darkText flex flex-col min-h-screen  w-screen -scroll-mt-12 landscape:-scroll-mt-20 "
        >
            <div className="min-w-md flex flex-1 items-center justify-center mx-auto landscape:mt-28 landscape:lg:mt-0 landscape:pt-20 landscape:lg:pt-0 ">
                <div className="form-container w-[40vw] portrait:w-[80vw] h-auto ">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-300">
                        Contact me
                    </h2>

                    <form
                        method="POST"
                        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
                        className="space-y-8 flex flex-col"
                    >
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium  text-gray-300"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow-sm  border  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                                placeholder="your@bestmail.com"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="block mb-2 text-sm font-medium text-gray-300 "
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="block p-3 w-full text-sm  rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                                placeholder="Name your problem..."
                                required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium  text-gray-300"
                            >
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows="6"
                                className="block p-4 w-full text-sm rounded-lg shadow-sm border  focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Give me some details..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="custom-button w-12 mx-auto"
                        >
                            Send message
                        </button>
                    </form>
                </div>
            </div>
            <div className="footer flex-none pb-4 landscape:mt-4 cursor-pointer ">
                <Footer />
            </div>
        </section>
    );
};

export default Contact;
