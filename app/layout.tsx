
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { GoHomeFill } from "react-icons/go";
import { RiMessengerLine } from "react-icons/ri";
import { SlCompass } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Instagram ",
    description: "Instagram by Samir on Next.js by samir",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className= {`${inter.className}`  }  >
                <header className="py-3 border-b-2 ">
                    <div className="w-[95%] max-w-[1240px] flex justify-between items-center mx-auto my-0 fixed bg-slate-200 py-10px">
                        <div className="flex gap-4">
                        <img className="w-[40px] h-[40px]" src="icons/insta_logo.png" color="white" alt="Insta_Logo"  />
                        <img className="w-[120px] h-[40px]" src="icons/Logo.png" color="white" alt="Logo"  />
                        </div>
                        <button className="rounded-lg px-20 py-2 flex items-center gap-1 bg-[#FAFAFA] border border-[#DBDBDB] text-[#9C9C9C]">
                            <CiSearch />
                            Search
                        </button>

                        <nav className="flex gap-3">
                            <button>
                                <GoHomeFill size={30} />
                            </button>
                            <button>
                                <RiMessengerLine size={30} />
                            </button>
                            <button>
                                <SlCompass size={25} />
                            </button>
                            <button>
                                <FaRegHeart size={30} />
                            </button>
                            <button>
                                <div className="w-[27px] h-[27px] rounded-full bg-[#c4c4c4]"></div>
                            </button>
                        </nav>
                    </div>
                </header>
                {children}
            </body>
        </html>
    );
}
