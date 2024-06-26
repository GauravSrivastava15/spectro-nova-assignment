
import { FaSearch, FaBell } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="flex items-center justify-between w-full p-2">
            
            <div className="flex items-center w-3/5 border-b border-gray-300 rounded-md p-2 ">
                <FaSearch className="text-black mr-2" />
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="w-full p-2 focus:outline-none focus:border-transparent bg-[rgb(238,255,249)]  "
                />
            </div>

            
            <div className="relative flex items-center justify-center bg-white rounded-full p-2 shadow">
                <FaBell className="text-gray-500 text-xl" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-600"></span>
            </div>

            
            <div className="flex items-center">
            <span className="text-gray-700 mr-2 font-semibold">William Dawson</span>
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCldKgmO2Hs0UGk6nRClAjATKoF9x2liYYA&s" 
                    alt="User" 
                    className="w-10 h-10 rounded-full "
                />
                
            </div>
        </div>
    );
};

export default Header;
