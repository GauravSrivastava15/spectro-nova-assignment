import { FaChevronDown } from "react-icons/fa";
import BookingList from "./BookingList";
import Header from "./Header";
import RoomList from "./RoomList";

const Main = () => {
  return (
    <div className="w-4/5 h-full overflow-y-auto bg-[rgb(238,255,249)]">
      <div className="p-4  mr-4">
        <Header />
        <div className="flex">
          <div className="w-4/5">
            <div className="mt-5 mb-8">
              <h1 className="text-5xl font-semibold ">
                <span className="text-gray-400">Welcome,</span>{" "}
                <span className="text-black">William</span>
              </h1>
              <p className="pt-2">
                You have <span className="underline">9 free rooms</span> at
                Saint
              </p>
            </div>
            <RoomList />
            <div className="bg-white rounded-3xl shadow-md p-4 mt-4 w-4/5 ">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Object overview</h3>
                <div className="flex space-x-4 items-center">
                  <button className="text-blue-500 bg-gray-100 px-3 py-1 rounded-md">
                    Overview
                  </button>
                  <div className="flex items-center space-x-1">
                    <button className="text-gray-500">Nov 15 - Nov 20</button>
                    <FaChevronDown className="text-gray-500" />
                  </div>
                </div>
              </div>
              <img
                src="https://assets-us-01.kc-usercontent.com/cddce937-cf5a-003a-bfad-78b8fc29ea3f/d339008c-bcfd-45bb-8292-d05899d536db/combination%20chart.png"
                alt="Chart"
                className="w-full h-48"
              />
            </div>
          </div>
          <BookingList />
        </div>
      </div>
    </div>
  );
};

export default Main;
