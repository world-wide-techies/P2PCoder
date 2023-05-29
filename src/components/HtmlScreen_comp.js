import Link from "next/link";
import Image from "next/image";
import codeIcon from "../../public/assets/sideTopNavBar/code.png";
import addIcon from "../../public/assets/sideTopNavBar/add.png";
import userIcon from "../../public/assets/sideTopNavBar/user.png";
import saveIcon from "../../public/assets/authNavBarControls/save-1.png";
import cameraIcon from "../../public/assets/authNavBarControls/peers.png";
import settingsIcon from "../../public/assets/sideBottomNavControls/settings.png";

function HtmlScreen() {
    return (
        <div className="bg-[#1E1E2A]">
            <div className="flex flex-col">
                <div className="flex justify-between items-center sticky z-10 top-0 bg-[#2F2F3A] h-16 border-y border-solid border-[#504F5F]">
                    <div className="text-[#F3F3F6] font-nohemi font-black text-xl ml-3">
                        CARAI
                    </div>
                    <div className="flex">
                        <div className="flex">
                            <Link href="/login"><Image src={addIcon} alt="close Icon" className="w-12 h-12 p-2 my-2 hover:bg-[#504F5F] rounded-lg" /></Link>
                            <Link href="/login"><Image src={cameraIcon} alt="close Icon" className="w-12 h-12 p-2 my-2 hover:bg-[#504F5F] rounded-lg" /></Link>
                            <Link href="/login"><Image src={addIcon} alt="close Icon" className="w-12 h-12 p-2 my-2 hover:bg-[#504F5F] rounded-lg" /></Link>
                            <Link href="/login"><Image src={saveIcon} alt="close Icon" className="w-12 h-12 p-2 my-2 hover:bg-[#504F5F] rounded-lg" /></Link>
                        </div>
                        <div className=" p-4">
                            <Link href="/signup" className="bg-[#5F5BD7] mr-1 px-3 w-5 py-2 font-nohemi font-normal rounded-lg text-white items-center">
                                Sign Up
                            </Link>
                            <Link href="/login" className="bg-[#CDCDDA] px-3 w-5 ml-1 py-2 font-nohemi font-normal rounded-lg text-black">
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-20 bg-[#2F2F3A] sticky left-0 z-0 top-0 h-screen border-x border-solid border-[#504F5F]">
                        <div className="flex flex-col  content-evenly items-center pt-20">
                            <Link href="/login"><Image src={addIcon} alt="close Icon" className="w-10 h-10 p-2 my-2 hover:bg-[#504F5F] rounded-lg" /></Link>
                            <Link href="/login"><Image src={userIcon} alt="close Icon" className="w-10 h-10 p-2 my-2 hover:bg-[#504F5F] rounded-lg" /></Link>
                        </div>
                        <div className="flex flex-col content-evenly items-center mt-96">
                            <Link href="/login"><Image src={settingsIcon} alt="close Icon" className="w-10 h-10 p-2 rounded-lg hover:bg-[#504F5F]" /></Link>
                        </div>
                    </div>
                    <div className="flex flex-col h-full w-full">
                        <div className="h-11 flex justify-between bg-[#2F2F3A] items-center ">
                                <div className="ml-3 h-11 bg-[#E3460C]">
                                <Link href="#"><div className="px-4 py-3 mt-1 text-[#E3460C] font-nohemi text-sm font-normal bg-[#1E1E2A]">
                                    WELCOME
                                </div></Link>
                            </div>
                            <div className="flex  justify-between items-center mr-3 text-white font-nohemi">
                                <div className="mr-2">
                                45:00
                                </div>
                                <div className=" flex justify-between items-center px-3 py-1.5 rounded-lg bg-[#1B501D]">
                                    <Link href="/login"><Image src={codeIcon} alt="close Icon" className="w-5 h-5 mr-2" /></Link>
                                    Run
                                </div>
                            </div>
                        </div>
                        <textarea className="w-full h-screen text-white border-none bg-[#1E1E2A] focus:border-none p-2 overflow-x-auto overflow-y-auto" ></textarea>
                        <div className="h-11 w-full bg-[#504F5F] bottom-0"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HtmlScreen;