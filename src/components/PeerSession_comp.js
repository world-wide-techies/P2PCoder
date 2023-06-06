import link from 'next/link'
import Image from 'next/image'
import htmlSymbol from '../../public/assets/codeEditorIcons/symbol.png'
import cssSymbol from '../../public/assets/codeEditorIcons/CSS3.png'
import jsSymbol from '../../public/assets/codeEditorIcons/Group.png'
import closeIconWhite from '../../public/assets/onboardingIcons/close_light.png';
import Link from 'next/link';

function PeerSession(){
    return(
        <div className="bg-[#2F2F3A] text-white p-6">
            <div className=" flex flex-col">
                <div className="flex justify-between">
                    <div className="text-2xl font-bold text-3xl leading-8 font-nohemi">New Peer Session</div>
                    <Image src={closeIconWhite} className="w-5 h-5"/>
                </div>
                <div>
                    <div className="text-base font-nohemi font-semibold mt-8 leading-5">Session Name</div>
                    <input 
                    type = "text"
                    name = "sessionname"
                    id ="sessionname"
                    placeholder = "Enter Session Name"
                    className="py-3 mt-2 mb-4 px-4 h-12 w-full font-nohemi font-normal text-sm bg-[#1E1E2A] text-white rounded-lg"/>
                </div>
                <div>
                    <div className="text-2xl font-bold mb-4 text-3xl leading-8 font-nohemi">
                        Select Language
                    </div>
                    <div className="flex justify-between ">
                        <div className= "flex flex-col justify-center items-center w-36 h-32 shadow-md shadow-black rounded-lg bg-[#3D3D48]">
                        <Image src={htmlSymbol} className="w-8 h-9"/>
                        <div className="text-white font-nohemi font-bold text-xl">HTML</div>
                        </div>
                        <div className= "flex flex-col justify-center items-center w-36 h-32 shadow-md shadow-black rounded-lg bg-[#3D3D48]">
                        <Image src={cssSymbol} className="w-8 h-9"/>
                        <div className="text-white font-nohemi font-bold text-xl">CSS</div>
                        </div>
                        <div className= "flex flex-col justify-center items-center w-36 h-32 shadow-md shadow-black rounded-lg bg-[#3D3D48]">
                        <Image src={jsSymbol} className="w-8 h-9"/>
                        <div className="text-white font-nohemi font-bold text-xl">JAVASCRIPT</div>
                        </div>
                    </div>
                </div>
                <Link href="">
                <div className="w-full py-7 px-6 text-white mt-12 rounded-lg bg-[#5F5BD7] text-center font-normal text-lg font-nohemi">
                    Create Peer Session
                </div>
                </Link>
            </div>
        </div>
    )
}

export default PeerSession;