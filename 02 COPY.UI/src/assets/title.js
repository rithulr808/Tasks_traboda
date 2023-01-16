import React from 'react';
import {Avatar, AvatarGroup} from "@mui/material";
import {RiArrowDropDownLine, RiArrowDropRightLine} from "react-icons/ri";
import {GoPrimitiveDot} from "react-icons/go";
import {CiCalendar, CiFilter} from "react-icons/ci";
import {FiLink2} from "react-icons/fi";

const Title = () => {

    const [Options, setOptionsOpen] = React.useState(false);

    return(
      <div className="border-b">
          <div className=" flex flex-wrap p-6">
              <h1 className="text-6xl text-purple-900 font-bold" >
                  MotivAider
              </h1>
              <span className="text-lg ml-5  mt-4 text-green-400">
                  <GoPrimitiveDot className="text-3xl inline-block"/>In progress
                  <button
                      onClick={
                          () => setOptionsOpen(!Options)
                      }>
                    { Options ? <RiArrowDropDownLine className="ml-1  inline-block text-4xl" />
                        :  <RiArrowDropRightLine className="ml-1  inline-block text-4xl" />
                    }
                  </button>
              </span>
          </div>
          <div className="flex flex-wrap p-2 ml-4">
              <button className="py-1 px-3 text-gray-400 rounded-full border">
                  <CiFilter className="text-gray-400 inline-block mr-1 text-2xl"/> Filter
                  <RiArrowDropDownLine className="ml-1 text-gray-400 inline-block text-3xl" />
              </button>
              <button className="py-1 px-3 ml-4 text-gray-400 rounded-full border">
                  <CiCalendar className="text-gray-400 inline-block mr-1 text-2xl"/>
                  Today
                  <RiArrowDropDownLine className="ml-1 text-gray-400 inline-block text-3xl" />
              </button>
              <div className="ml-6 text-4xl font-thin text-gray-300 mr-6">|</div>

              <AvatarGroup total={24} className="mr-4" >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
              </AvatarGroup>
              <button className="py-1 px-6 ml-4 bg-gray-100 rounded-full text-purple-900 hover:bg-gray-200 ">
                  Add member <div className="text-xl inline-block ml-2 ">+</div>
              </button>
              <FiLink2 className="mt-3 text-2xl  text-gray-400 ml-4 hover:text-green-400 "/>
          </div>
          <hr className=" mx-6"/>
          <div className="flex flex-wrap justify-between text-gray-400 p-3">

              <pre className="mt-3 text-sm" > Last updated on: 23 November,2022</pre>
              <div>
              <button className="py-1 px-3 ml-4 text-gray-400 rounded-full border ">
                  <CiCalendar className="text-gray-400 inline-block mr-1 text-2xl"/>
                  All Task
                  <RiArrowDropDownLine className="ml-1 text-gray-400 inline-block text-3xl "/>
              </button>
              <button className="py-1 px-3 ml-4 text-gray-400 rounded-full border">
                  <CiCalendar className="text-gray-400 inline-block mr-1 text-2xl"/>
                  Sort
                  <RiArrowDropDownLine className="ml-1 text-gray-400 inline-block text-3xl" />
              </button>
              <button className="py-1 px-3 ml-4 text-gray-400 rounded-full border">
                  <CiCalendar className="text-gray-400 inline-block mr-1 text-2xl"/>
                  Customize
                  <RiArrowDropDownLine className="ml-1 text-gray-400 inline-block text-3xl" />
              </button>
              </div>
          </div>


      </div>
    );
}

export default  Title;