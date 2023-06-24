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
        <section id="tools" className="bg-darkText h-screen w-screen ">
            <div className="container h-full w-full flex flex-col items-center justify-center ">
                <div className="content max-w-[1024px] ">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold  hover:text-accent duration-1000">
                        <span className="custom-underline text-lightText">
                            TOOLS
                        </span>
                    </h2>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="portrait:w-20 w-12 mx-auto"
                                src={HTML}
                                alt="HTML icon"
                            />
                            <p className="my-4 text-lightText">HTML</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="portrait:w-20 w-12 mx-auto"
                                src={CSS}
                                alt="CSS icon"
                            />
                            <p className="my-4 text-lightText">CSS</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="portrait:w-20 w-12 mx-auto"
                                src={JavaScript}
                                alt="JAVASCRIPT icon"
                            />
                            <p className="my-4 text-lightText">JAVASCRIPT</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="portrait:w-20 w-12 mx-auto"
                                src={Wordpress}
                                alt="HTML icon"
                            />
                            <p className="my-4 text-lightText">WORDPRESS</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="portrait:w-20 w-12 mx-auto"
                                src={Tailwind}
                                alt="TailwindCss icon"
                            />
                            <p className="my-4 text-lightText">TAILWIND</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="portrait:w-20 w-12 mx-auto"
                                src={ReactImg}
                                alt="REACT icon"
                            />
                            <p className="my-4 text-lightText">REACT</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="portrait:w-20 w-12 mx-auto"
                                src={NextJSIcon}
                                alt="NEXTJS icon"
                            />
                            <p className="my-4 text-lightText">NEXT.JS</p>
                        </div>
                        <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                            <img
                                className="portrait:w-20 w-12 mx-auto"
                                src={Node}
                                alt="NODE icon"
                            />
                            <p className="my-4 text-lightText">NODE JS</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
