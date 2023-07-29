import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Wordpress from "../assets/wordpress.png";
import NextJSIcon from "../assets/nextjs.png";
import Tailwind from "../assets/tailwind.png";

const Tools = () => {
    return (
        <section
            id="tools"
            className="bg-darkText grid min-h-screen w-screen portrait:scroll-mt-8 scroll-mt-0 landscape:pt-24 landscape:lg:pt-0"
        >
            <div className=" w-1/2 portrait:w-full mx-auto grid p-4 grid-cols-1 place-content-center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-300">
                    Tools
                </h2>
                <div className="grid text-lightText  ">
                    <div className="w-full grid portrait:grid-cols-2  md:grid-cols-4 gap-4 text-center py-8">
                        <div className="group shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
                            <img
                                className=" portrait:w-20 w-24 mx-auto"
                                src={HTML}
                                alt="HTML icon"
                            />
                            <p className="my-4 text-lightText group-hover:text-accent duration-700">
                                HTML
                            </p>
                        </div>
                        <div className="group shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className=" portrait:w-20 w-24 mx-auto"
                                src={CSS}
                                alt="CSS icon"
                            />
                            <p className="my-4 text-lightText group-hover:text-accent duration-700">
                                CSS
                            </p>
                        </div>
                        <div className="group shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className=" portrait:w-20 w-24 mx-auto"
                                src={JavaScript}
                                alt="JAVASCRIPT icon"
                            />
                            <p className="my-4 text-lightText group-hover:text-accent duration-700">
                                JAVASCRIPT
                            </p>
                        </div>
                        <div className="group shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className=" portrait:w-20 w-24 mx-auto"
                                src={Wordpress}
                                alt="HTML icon"
                            />
                            <p className="my-4 text-lightText group-hover:text-accent duration-700">
                                WORDPRESS
                            </p>
                        </div>
                        <div className="group shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className=" portrait:w-20 w-24 mx-auto"
                                src={Tailwind}
                                alt="TailwindCss icon"
                            />
                            <p className="my-4 text-lightText group-hover:text-accent duration-700">
                                TAILWIND
                            </p>
                        </div>
                        <div className="group shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="portrait:w-20 w-24 mx-auto"
                                src={ReactImg}
                                alt="REACT icon"
                            />
                            <p className="my-4 text-lightText group-hover:text-accent duration-700">
                                REACT
                            </p>
                        </div>
                        <div className="group shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className=" portrait:w-20 w-24 mx-auto"
                                src={NextJSIcon}
                                alt="NEXTJS icon"
                            />
                            <p className="my-4 text-lightText group-hover:text-accent duration-700">
                                NEXT.JS
                            </p>
                        </div>
                        <div className="group shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className=" portrait:w-20 w-24 mx-auto"
                                src={Node}
                                alt="NODE icon"
                            />
                            <p className="my-4 text-lightText group-hover:text-accent duration-700">
                                NODE JS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
