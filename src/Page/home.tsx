import { useContext } from "react"
import { AppContext } from "../Utilities/Context"
const Home = () => {
    const {fullName,email,github,onGithub,onEmail,onFullName,image,onImage,removeImg,handleSubmit} = useContext(AppContext)

    return ( 
        <div className="z-10 h-[100%] text-white gap-3 flex flex-col items-center justify-start p-10 ">
            <h1 className="text-3xl md:text-5xl w-full md:w-[700px] text-center  font-bold ">Your Journey to Coding Conf 2025 Starts here!</h1>
            <p className=" text-lg text-center md:text-2xl leading-[35px] ">
            Secure your spot at next's year biggest coding conference.
            </p>
            <div className="flex gap-5 flex-col items-center justify-center text-center ">
                <form onSubmit={(e)=>handleSubmit(e,email,github,image,fullName)} className="flex flex-col gap-3 items-start justify-center w-full">
                <div className="flex flex-col gap-2 items-start justify-center w-full ">
                    <label htmlFor="upload" className="">Upload Avatar</label>
                    <input required type="file" onChange={onImage} name="" hidden id="upload"   />
                    <label className="flex cursor-pointer bg-[#4b486a] hover:bg-[#8784a4] flex-col w-full items-center justify-center border border-dashed p-5 rounded-lg">
                            {!image && <>
                                <label htmlFor='upload' className="bg-[#0c082b] cursor-pointer p-3 rounded-md border-[#8784a4] ">
                                <img src="/images/icon-upload.svg" alt="" />
                                </label>
                                <label htmlFor="upload" className="cursor-pointer">Drag and drop or click to upload</label>
                            </>
                            }
                            {image && <>
                                <div className="flex flex-col items-center justify-center gap-3">
                                <img src={image} alt="" className="w-[50px] h-[50px] object-cover rounded-lg " />
                                <div className="flex items-center justify-center gap-3">
                                    <p onClick={removeImg} className="rounded-md text-xs sm:text-sm p-1 sm:px-3 py-3 bg-[#8784a4] shadow ">
                                    <span className="sm:border-b p-2">Remove image</span>
                                    </p>
                                    <label htmlFor="upload" className="rounded-md cursor-pointer text-xs sm:text-sm p-1 sm:px-3 py-3 bg-[#8784a4] shadow ">
                                    <span className=" p-2">Change Image</span>
                                    </label>
                                </div>
                                </div>
                            </>}
                    </label>
                    <div className="flex w-full text-center items-center justify-center gap-3">
                        <img src="/images/icon-info.svg" alt="" className="flex items-center justify-center text-center " />
                        <p className="text-xs flex items-center justify-center text-center sm:text-sm">Upload your photo ( JPG or PNG, max size: 500KB ) </p>
                    </div>
                </div>
                <div className="flex w-full flex-col gap-2 items-start justify-center ">
                    <label htmlFor="fullName" className="" > Full Name </label>
                    <input id="fullName" value={fullName} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>onFullName(e)} required type="text" className={` hover:bg-[#8784a4] focus:outline-[#d2d1d6] rounded-md flex p-3 items-center justify-center w-full border-white bg-[#4b486a] `} />
                </div>
                <div className="flex w-full flex-col gap-2 items-start justify-center ">
                    <label htmlFor="email" className="" > Email </label>
                    <input id="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>onEmail(e)} placeholder="exmple@email.com" required type="email" className="hover:bg-[#8784a4] focus:outline-[#d2d1d6] rounded-md flex p-3 items-center justify-center w-full border-white bg-[#4b486a] " />
                </div>
                <div className="flex w-full flex-col gap-2 items-start justify-center ">
                    <label htmlFor="github" className="" > Github Username </label>
                    <input id="github" value={github} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>onGithub(e)} placeholder="@yourusername" required type="text" className="hover:bg-[#8784a4] focus:outline-[#d2d1d6] rounded-md flex p-3 items-center justify-center w-full border-white bg-[#4b486a] " />
                </div>
                {fullName && email && github && image && <button className="w-full cursor-pointer text-[#0c082b] font-semibold bg-[#f57261] rounded-lg flex items-center justify-center text-center py-3 px-5 bg- " type="submit">Generate My Ticket</button>}
                </form>
            </div>
        </div>
     );
}
 
export default Home;