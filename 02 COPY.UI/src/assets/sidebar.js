import React from 'react';
import {MdOutlineDashboardCustomize} from "react-icons/md";
import {CiFolderOn} from "react-icons/ci";
import {FiCalendar} from "react-icons/fi";
import {BiMessageAltDetail, BiTask} from "react-icons/bi";
import {AiOutlinePlus, AiOutlineTeam} from "react-icons/ai";
import {RiArrowDropDownLine, RiArrowDropRightLine} from "react-icons/ri";
import { Avatar } from "@mui/material";


const Sidebar = () => {

    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    return (
        <div className="p-2 sticky top-0 overflow-auto  border-r-2 overflow-y-auto " style={{ height:"91.5vh", textAlign:"justify",  }}>
            <div className="mb-1 p-1 pl-8 mt-3">
                <div className="text-gray-400 inline-flex">
                    <Avatar
                        className="outline outline-offset-2 outline-green-400"
                        src="https://cdn.myanimelist.net/r/360x360/images/characters/2/160251.jpg?s=56c3ca82a04d87daf19252ac5e39d159"
                        alt="Gin"
                        sx={{ width: 50, height: 50 }}
                    />
                    <div className="ml-2 p-1">
                        <p className="text-sm text-gray-600">User</p>
                        <p className="text-sm"> @User_name </p>
                    </div>
                </div>
            </div>
            <div className=" mb-1 p-1 pl-5">
                <button className="inline-flex text-gray-400 hover:bg-gray-200 rounded-lg p-2 focus:text-gray-500">
                        <MdOutlineDashboardCustomize className="text-xl mr-2"/> Dashboard
                </button>
            </div>
            <div className="pb-3 p-1 pl-5">
                <button className="text-gray-400 inline-flex  hover:bg-gray-200 rounded-lg p-2 focus:text-gray-500"
                onClick={
                    () => setSidebarOpen(!sidebarOpen)
                }
                >
                   <CiFolderOn className="text-xl  mr-2" />
                     Project Board
                    { sidebarOpen ? <RiArrowDropDownLine className="text-2xl  ml-4"/> :    <RiArrowDropRightLine className="text-2xl  ml-4"/> }

                </button>
                { sidebarOpen ? (<div className="pl-7">
                    <div className="mt-1">
                    <button className="text-gray-400 hover:bg-gray-200 rounded-lg p-2 focus:text-gray-500">
                        MotivAider
                    </button>
                    </div>
                    <div className="mt-1">
                    <button className="text-gray-400 hover:bg-gray-200 rounded-lg p-2 focus:text-gray-500">
                        Reposee
                    </button>
                    </div>
                    <div className="mt-1" >
                    <button className="text-gray-400 hover:bg-gray-200 rounded-lg p-2 focus:text-gray-500">
                        Walletoy
                    </button>
                    </div>
                    </div>): null
                }
            </div>
            <div className="pb-3 p-1 pl-5">
                <button className="text-gray-400 inline-flex hover:bg-gray-200 rounded-lg p-2 focus:text-gray-500">
                    <FiCalendar className="text-xl  mr-2"/> Calender
                </button>
            </div>
            <div className="pb-3 p-1 pl-5">
                <button className="text-gray-400 inline-flex hover:bg-gray-200 rounded-lg p-2 focus:text-gray-500">
                    <BiTask className="text-xl mr-2"/>  Tasks
                </button>
            </div>
            <div className="pb-3 p-1 pl-5">
                <button className="text-gray-400 inline-flex hover:bg-gray-200 rounded-lg p-2 focus:text-gray-500">
                    <BiMessageAltDetail className="text-xl  mr-2 inline-flex"/>   Messages
                    <span
                        className="inline-flex justify-center items-center p-3 ml-9 w-2 h-2 text-sm font-medium
                        text-white bg-orange-400 rounded-full">3</span>
                </button>
            </div>
            <div className="pb-3 p-1 pl-5">
                <button className="text-gray-400 inline-flex hover:bg-gray-200 rounded-lg p-2 focus:text-gray-500">
                    <AiOutlineTeam className="text-xl  mr-2"/>   Team Members
                </button>
            </div>
            <div>
                <div id="dropdown-cta" className="rounded-2xl dark:bg-blue-900 border-2 m-4 absolute bottom-2" role="alert">
                    <img src={"https://cdn.dribbble.com/userupload/2767341/file/original-6a588c41f19ff52e43ef7bc7e8cfcb2b.jpg?compress=1&resize=1200x900"} className="rounded-2xl" alt="no task"/>
                    <p className="m-2 text-lg font-bold">
                        No data to show,
                        Create new task now
                    </p>
                    <div className="w-full justify-center inline-flex bg-gray-200 rounded-2xl p-4"
                       ><button className=" text-white bg-purple-800 rounded-2xl p-3 focus:text-white hover:bg-purple-900 active:bg-purple-800 ">
                        Create new task <AiOutlinePlus className="inline-block"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;