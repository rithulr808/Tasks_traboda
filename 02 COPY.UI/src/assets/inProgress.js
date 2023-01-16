
import React from "react";
import {AiOutlinePlus} from "react-icons/ai";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import {Avatar, AvatarGroup} from "@mui/material";


const InProgress = () => {

    const [buttonOn, setButton] = React.useState(false);

    return(
        <div className="w-full border-x overflow-y-auto px-6  bg-stone-50">
            <div className="max-w-lg rounded-2xl overflow-hidden shadow-lg border px-7 m-7 bg-gray-100" >
                <div className="flex justify-between mt-4">
                <div className="font-bold text-3xl mb-2 scrollbar-hide">The Random</div>
                    <div>
                        <button className="text-gray-400 inline-flex  hover:text-gray-200 rounded-lg p-2 focus:text-gray-500"
                                onClick={
                                    () => setButton(!buttonOn)
                                }
                        >
                            { buttonOn ?
                                <AiOutlinePlus className="text-xl inline-block "/> :  <BiDotsHorizontalRounded  className="text-xl inline-block "/>
                            }

                        </button>
                    </div>
                </div>
                <div className="flex pt-4 pb-2">
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span
                        className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
                <img className="w-full rounded-[35px] " src="https://cdn.dribbble.com/userupload/4052163/file/original-7aac2d432332a2417e6d03e87914d86e.png?compress=1&resize=1024x768" alt="Sunset in the mountains"/>
                <div className="flex mt-4">
                <AvatarGroup total={24} className="mr-4 " >
                    <Avatar alt="Remy Sharp" src="https://cdn.technadu.com/wp-content/uploads/2021/07/Eren-Yeager.jpg" />
                    <Avatar alt="Travis Howard" src="https://pbs.twimg.com/media/DeY_wcnV0AYIm9x.jpg" />
                    <Avatar alt="Agnes Walker" src="https://yt3.ggpht.com/uhm01WkkEFBLb7C65lBGAwr-H-Lzo0V0qevaeR8XhY-T9rDokfh1lgskPrQsaIfcccV_EC-sZSKJ=s640-c-fcrop64=1,00000000ffffffff-nd-v1
                    " />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
                    <AiOutlinePlus className="text-xl inline-block text-gray-500 mt-3"/>
                </div>
                <div className="flex justify-between my-4">
                <p className="text-gray-400 text-sm p-2">
                    Lorem ipsum dolor sit amet
                </p>
                <button className=" py-2 text-white bg-purple-800 rounded-2xl px-3 focus:text-white hover:bg-purple-900 active:bg-purple-800 ">
                    Open
                </button>
                </div>
            </div>



            <div className="max-w-lg rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-7  ">
                <div className="px-6 py-4">

                    <div className="flex justify-between mt-4">
                        <div className="font-bold text-3xl mb-2 scrollbar-hide">Dev call</div>
                        <div>
                            <button className="text-gray-400 inline-flex  hover:text-gray-200 rounded-lg p-2 focus:text-gray-500"
                                    onClick={
                                        () => setButton(!buttonOn)
                                    }
                            >
                                { buttonOn ?
                                    <AiOutlinePlus className="text-xl inline-block "/> :  <BiDotsHorizontalRounded  className="text-xl inline-block "/>
                                }
                            </button>
                        </div>
                    </div>

                    <div className="flex  px-6 pt-4 pb-2 ">
                        <span
                        className="inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-orange-500 mr-2 mb-2">#tech</span>
                        <span
                            className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mr-2 mb-2">#techtech</span>

                    </div>
                    <p className="text-gray-700  text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
                    </p>
                    <Avatar className="m-4" alt="Agnes Walker" src="https://yt3.ggpht.com/uhm01WkkEFBLb7C65lBGAwr-H-Lzo0V0qevaeR8XhY-T9rDokfh1lgskPrQsaIfcccV_EC-sZSKJ=s640-c-fcrop64=1,00000000ffffffff-nd-v1
                    " />
                </div>

            </div>
        </div>
    )
}

export  default  InProgress;