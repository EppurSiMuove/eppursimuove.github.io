import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Social = () => {
    return (
        <div className="hidden lg:flex fixed flex-col top-[45%] left-0">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#333333] rounded-tr-3xl border-r-2 border-t-2 border-accent">
                    <a
                        className="flex justify-between items-center w-full text-accent pl-4 pr-4 font-extrabold"
                        href="https://www.linkedin.com/in/mariopolchert/"
                    >
                        Linkedin <FaLinkedin size={30} color={"#FFDEAD"} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#333333] border-r-2 border-accent ">
                    <a
                        className="flex justify-between items-center w-full text-accent pl-4 pr-4 font-extrabold"
                        href="https://github.com/mariopolchert"
                    >
                        Github <FaGithub size={30} color={"#FFDEAD"} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#333333] border-r-2 border-accent">
                    <a
                        className="flex justify-between items-center w-full text-accent pl-4 pr-4 font-extrabold"
                        href="https://twitter.com/mariopolchert"
                    >
                        Twitter <FaTwitter size={30} color={"#FFDEAD"} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#333333] rounded-br-3xl border-r-2 border-b-2 border-accent">
                    <a
                        className=" flex justify-between items-center w-full text-accent pl-4 pr-4 font-extrabold"
                        href="mailto:mario@mariopolchert.com"
                    >
                        Email <FiMail size={30} color={"#FFDEAD"} />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Social;
