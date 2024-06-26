import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

const RoomList = () => {
  return (
    <div className="flex gap-12">
      <div className="flex flex-col">
        <div className="w-44 h-40 bg-pink-100 rounded-xl">
          <div className="flex justify-center text-3xl mb-2 text-orange-400 font-bold pt-4 relative">
            <div className="relative">
              <span className="mr-2">4%</span>
              <FaArrowUpLong className="text-base absolute top-0 left-20" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mr-2">
              <h1 className="text-2xl bg-white mt-2 p-2 text-center font-medium rounded-2xl">
                31
              </h1>
              <p className="font-normal pt-1">Booked</p>
            </div>
            <div className="ml-2">
              <h1 className="text-2xl bg-white mt-2 p-2 text-center font-medium rounded-2xl">
                19
              </h1>
              <p className="font-normal pt-1">Check in</p>
            </div>
          </div>
        </div>
        <div className="mt-2 text-center text-lg ">Saint Denis</div>
      </div>

      <div className="flex flex-col">
        <div className="w-44 h-40 bg-purple-200 rounded-xl">
          <div className="flex justify-center text-3xl mb-2 text-purple-800 font-bold pt-4 relative">
            <div className="relative">
              <span className="mr-2">6%</span>
              <FaArrowDownLong className="text-base absolute top-0 left-20" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mr-2">
              <h1 className="text-2xl bg-white mt-2 p-2 text-center font-medium rounded-2xl">
                8
              </h1>
              <p className="font-normal pt-1">Booked</p>
            </div>
            <div className="ml-2">
              <h1 className="text-2xl bg-white mt-2 p-2 text-center font-medium rounded-2xl">
                5
              </h1>
              <p className="font-normal pt-1">Check in</p>
            </div>
          </div>
        </div>
        <div className="mt-2 text-center text-lg ">Blackwater</div>
      </div>

      <div
        className="w-44 h-40 flex flex-col justify-center items-center border-2 border-dashed border-gray-500
       text-gray-400 rounded-xl"
      >
        <div className="text-3xl font-semibold">+</div>
        <div className="">Add new Object</div>
      </div>
    </div>
  );
};

export default RoomList;
