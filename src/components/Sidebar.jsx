
import { FaRegCalendarAlt, FaRegChartBar, FaRegBell, FaRegUser, FaCog, FaCommentDots } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="w-1/5  h-screen bg-[rgb(238,255,249)] flex justify-center items-center p-4">
            <div className="w-11/12 h-full flex flex-col justify-between bg-white rounded-3xl shadow-lg shadow-green-300 p-4">
                
                <div className="flex items-center mb-8">
                    <img src='https://i.pinimg.com/474x/de/f7/b6/def7b694904830d5804ee5975b69e9ed.jpg' alt='image' className="w-10 h-10 rounded-full mr-4" />
                    <h1 className="text-xl font-bold">
                        <span className="text-black">HOTEL</span> <span className="text-gray-400">SWAN</span>
                    </h1>
                </div>
                
                
                <nav className="flex-grow mt-14">
                    <ul className="flex flex-col justify-center">
                        <li className="mb-6 flex items-center bg-gray-100 p-2 rounded-md">
                            <FaRegCalendarAlt className="mr-3 text-blue-500" />
                            <span className="text-blue-500">Overview</span>
                        </li>
                        <li className="mb-6 flex items-center pl-2">
                            <FaRegChartBar className="mr-3 text-gray-500" />
                            <span className="text-gray-700">Calendar</span>
                        </li>
                        <li className="mb-6 flex items-center pl-2">
                            <FaRegBell className="mr-3 text-gray-500" />
                            <span className="text-gray-700">Booking</span>
                        </li>
                        <li className="mb-6 flex items-center pl-2">
                            <FaRegUser className="mr-3 text-gray-500" />
                            <span className="text-gray-700">Earnings</span>
                        </li>
                        <li className="mb-6 flex items-center pl-2">
                            <FaRegUser className="mr-3 text-gray-500" />
                            <span className="text-gray-700">Staff</span>
                        </li>
                    </ul>
                </nav>

                
                <div className='flex justify-center'>
                    <div className="flex items-center mr-2 bg-orange-200 rounded-full pl-2">
                        <FaCommentDots className="mr-3 text-gray-500" />
                    </div>
                    <div className="flex items-center">
                        <FaCog className="mr-3 text-gray-500" />
                        <span className="text-gray-700">Settings</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
