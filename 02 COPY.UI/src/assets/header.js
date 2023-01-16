import {MdTerrain} from "react-icons/md";
import {CiSearch} from "react-icons/ci";
import {TbMinusVertical} from "react-icons/tb";
import {BsMic, BsSoundwave} from "react-icons/bs";
import {Switch} from "@mui/material";
import Profile from "./selectors/Profile";
import {BiNotification} from "react-icons/bi";


const Header = () => {

    return(
        <div className="flex flex-wrap bg-stone-100 border py-2">
            <MdTerrain className="mt-3 ml-5 text-3xl" />
            <h1 className="text-3xl font mt-2 pl-5">
                Random.
            </h1>
            <div className="p-3">
                <div className="relative ml-40 left-50">
                    <BsSoundwave
                        className="absolute  mt-3 text-gray-500 left-3"
                    />
                    <CiSearch
                        className="absolute mt-3 text-gray-500 right-10"
                    />
                    <TbMinusVertical
                        className="absolute mt-2 text-gray-400 text-2xl right-5"
                    />
                    <BsMic
                        className="absolute mt-3.5 text-gray-500 text-[13px] right-3 "
                    />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full h-10 py-1 pl-10  pr-[60px] text-truncate text-gray-600 border rounded-xl outline-none bg-gray-50 focus:bg-white focus:border-indigo-300"
                    />
                </div>
            </div>
            <div className="flex flex-wrap absolute right-3">
                <Switch className="mt-3 mr-3"/>
                <BiNotification className="mt-5 mr-5 text-2xl text-gray-400"/>
                <Profile />
            </div>

        </div>
    )
}
export default Header;