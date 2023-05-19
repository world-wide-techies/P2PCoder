function VerificationSuccessful(){
    return (
        <div className="space-y-6">
            <div className="">
                <div className="flex justify-between ">
                    <h1 className="text-blue-500 font-bold text-5xl">Verification Successful</h1>
                    <h2>cancel</h2>
                </div>
                <p className="my-6 text-2xl font-semibold">Account has been successfully verified with Carai</p>
                <button className="px-6 py-3 bg-blue-600 my-7 text-white rounded-md font-bold border-[1px] w-full">
                    Continue to account setup
                </button>
            </div>
        </div>
    )
}
export default VerificationSuccessful