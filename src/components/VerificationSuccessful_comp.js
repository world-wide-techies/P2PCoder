import Link from "next/link";
import Image from "next/image";
import closeIcon from "../../public/assets/onboardingIcons/close_black.png";

function VerificationSuccessful(){
    return (
        <div className="space-y-6">
            <div className="">
                <div className="flex justify-between ">
                    <h1 className="text-blue-500 font-bold text-5xl">Verification Successful</h1>
                    <Link href= "/login"><Image src={closeIcon} alt="close Icon" className="w-9 h-9" /></Link>
                </div>
                <p className="my-6 text-2xl font-semibold">Account has been successfully verified with Carai</p>
                <Link href="/login" className="hover:bg-blue-500 bg-violet-800 text-white text-center font-bold block w-full p-2 rounded-lg">
                Log in
                </Link>
            </div>
        </div>
    )
}
export default VerificationSuccessful