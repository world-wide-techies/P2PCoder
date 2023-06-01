import Link from "next/link";
import Image from "next/image";
import codeIcon from "../../public/assets/sideTopNavBar/code.png";
import addIcon from "../../public/assets/sideTopNavBar/add.png";
import userIcon from "../../public/assets/sideTopNavBar/user.png";
import saveIcon from "../../public/assets/authNavBarControls/save-1.png";
import cameraIcon from "../../public/assets/authNavBarControls/peers.png";
import settingsIcon from "../../public/assets/sideBottomNavControls/settings.png";
import darkIcon from "../../public/assets/codeEditorIcons/vuesax/bold/Vector.png";
import closeIcon from "../../public/assets/codeEditorIcons/vuesax/bold/Vector-2.png";
import exclamation1 from "../../public/assets/codeEditorIcons/vuesax/bold/Vector-3.png";
import exclamation2 from "../../public/assets/codeEditorIcons/vuesax/bold/Vector-4.png";
import optionIcon from "../../public/assets/codeEditorIcons/vuesax/bold/element-4.png";
import htmlIcon from "../../public/assets/codeEditorIcons/symbol.png";

function HtmlScreen() {
    return (
        <div className="bg-[#1E1E2A]">
            <div className="flex flex-col h-screen">
                <div className="flex justify-between items-center sticky z-10 top-0 bg-[#2F2F3A] h-16 border-y border-solid border-[#504F5F]">
                    <div className="text-[#F3F3F6] font-nohemi font-black text-xl ml-3">
                        CARAI
                    </div>
                    <div className="flex">
                        <div className="flex items-center">
                            <Link href="#"><Image src={darkIcon} alt="dark Icon" className="w-8 h-8 p-2 my-2 hover:bg-[#504F5F] rounded-lg" /></Link>
                            <Link href="#"><Image src={cameraIcon} alt="camera Icon" className="w-12 h-12 p-3 my-2 hover:bg-[#504F5F] rounded-lg" /></Link>
                            <Link href="#"><Image src={optionIcon} alt="option Icon" className="w-8 h-8 p-2 my-2 hover:bg-[#504F5F] rounded-lg" /></Link>
                            <Link href="#"><Image src={saveIcon} alt="save Icon" className="w-12 h-12 p-2 my-2 hover:bg-[#504F5F] rounded-lg" /></Link>
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
                    <div className="flex flex-col justify-around w-20 bg-[#2F2F3A] left-0 z-0 h-full top-0  border-x border-solid border-[#504F5F]">
                        <div className="flex flex-col justify-around items-center h-52 mb-12">
                            <Link href="#"><Image src={addIcon} alt="close Icon" className="w-12 h-12 p-2 my-2 hover:bg-[#504F5F]  active:bg-[#494953] rounded-lg" /></Link>
                            <Link href="#"><Image src={userIcon} alt="close Icon" className="w-12 h-12 p-2 my-2 hover:bg-[#504F5F] rounded-lg" /></Link>
                        </div>
                        <div className="flex flex-col mb-16 items-center">
                            <Link href="#"><Image src={settingsIcon} alt="close Icon" className="w-12 h-12 p-2 rounded-lg hover:bg-[#504F5F]" /></Link>
                        </div>
                    </div>
                    <div className="flex flex-col h-full w-full">
                        <div className=" flex justify-between bg-[#2F2F3A] items-center ">
                                <div className="ml-3 h-11 bg-[#E3460C]">
                                <Link href="#"><div className="flex items-center px-4 py-2.5 mt-1 text-[#E3460C] font-nohemi text-sm font-normal bg-[#1E1E2A]">
                                <Image src={htmlIcon} alt="html Icon" className="w-4 h-4.5 mr-1"/>
                                    WELCOME
                                    <Image src={closeIcon} alt="html Icon" className="w-3 h-3 p-0.5 rounded-lg ml-2 hover:bg-[#504F5F]"/>
                                </div></Link>
                            </div>
                            <div className="flex  justify-between text-lg items-center mr-3 font-normal text-white font-nohemi">
                                <div className="mr-2">
                                45:00
                                </div>
                                <Link href="#" className=" flex justify-between items-center px-3 py-1.5 rounded-lg bg-[#1B501D]">
                                    <Image src={codeIcon} alt="close Icon" className="w-5 h-5 mr-2" />
                                    Run
                                </Link>
                            </div>
                        </div>
                        <textarea className="w-full h-screen text-white border-none bg-[#1E1E2A] focus:border-none p-2 overflow-x-auto overflow-y-auto" ></textarea>
                        <div className="h-16 w-full items-center bg-[#2F2F3A] bottom-0 border-y border-solid border-[#504F5F] flex justify-between">
                            <div className="flex w-full justify-between">
                                <div className="flex content-around">
                                <Image src={closeIcon} alt="html Icon" className="w-3 h-3 ml-1 rounded-lg  hover:bg-[#504F5F]"/>
                                <Image src={exclamation1} alt="html Icon" className="w-3 h-3 ml-1 rounded-lg  hover:bg-[#504F5F]"/>
                                <Image src={exclamation2} alt="html Icon" className="w-3 h-3 ml-1 rounded-lg  hover:bg-[#504F5F]"/>
                                </div>
                                <div className="flex font-normal text-xs text-[#E0E0F5] ">
                                    <div>Ln1</div>
                                    <div>Col1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HtmlScreen;