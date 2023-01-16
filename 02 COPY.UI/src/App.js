import './App.css';
import Header from "./assets/header";
import Sidebar from "./assets/sidebar";
import Title from "./assets/title";
import InProgress from "./assets/inProgress";
import {BiDotsHorizontalRounded} from "react-icons/bi";
import Completed from "./assets/Completed";

function App() {
  return (
    <div className="App">
        <Header />
        <div >
        <div className="w-1/5 inline-block absolute left-0">
            <Sidebar/>
        </div>
        <div className="w-4/5  absolute right-0">
            <Title/>
            <div className="bg-stone-100 inline-flex" >
                <div className=" overflow-y-auto scrollbar-hide" style={{ height:"67vh" }}>
                    <div className=" sticky top-0 z-30 flex justify-between p-2 bg-gray-50 w-full">
                        <button className="py-1 px-6 ml-4 bg-orange-400 rounded-full text-gray-50 hover:bg-orange-300 ">
                            In progress
                        </button>
                        <div>
                            <button className="py-3 px-2  text-purple-900 hover:text-gray-400 ">
                                <div className="text-xl inline-block ml-2 ">+</div>
                            </button>
                            <button className="py-3 px-2 ml-4 text-purple-900 hover:text-gray-400 ">
                                <BiDotsHorizontalRounded  className="text-xl inline-block "/>
                            </button>
                        </div>
                    </div>
                    <InProgress />
                </div>
                <div className="overflow-y-auto scrollbar-hide" style={{ height:"67vh" }}>
                    <div className=" sticky top-0 z-30 flex justify-between p-2 bg-gray-50 w-full">
                        <button className=" px-6 ml-4 bg-green-400 rounded-full text-gray-50 hover:bg-green-200">
                            Completed
                        </button>
                        <div>
                            <button className="py-3 px-2  text-purple-900 hover:text-gray-400 ">
                                <div className="text-xl inline-block ml-2 ">+</div>
                            </button>
                            <button className="py-3 px-2 ml-4 text-purple-900 hover:text-gray-400 ">
                                <BiDotsHorizontalRounded  className="text-xl inline-block "/>
                            </button>
                        </div>
                    </div>
                    <Completed/>
                </div>
                <div className="overflow-y-auto scrollbar-hide" style={{ height:"67vh" }}>
                    <div className=" sticky top-0 z-30 flex justify-between p-2 bg-gray-50 w-full">
                        <button className=" px-6 ml-4 bg-stone-500 rounded-full text-gray-50 hover:bg-stone-400">
                            To Do
                        </button>
                        <div>
                            <button className="py-3 px-2  text-purple-900 hover:text-gray-400 ">
                                <div className="text-xl inline-block ml-2 ">+</div>
                            </button>
                            <button className="py-3 px-2 ml-4 text-purple-900 hover:text-gray-400 ">
                                <BiDotsHorizontalRounded  className="text-xl inline-block "/>
                            </button>
                        </div>
                    </div>
                    <InProgress/>
                </div>
            </div>
        </div>

        </div>
    </div>
  );
}

export default App;
