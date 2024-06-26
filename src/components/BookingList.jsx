import { FaLock } from "react-icons/fa";

const BookingList = () => {
  const bookings = [
    {
      name: "Wade Warren",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCldKgmO2Hs0UGk6nRClAjATKoF9x2liYYA&s",
      dates: "01.12 - 01.14",
      status: "Paid",
      details: "#SGL · 0 guests",
    },
    {
      name: "Jacob Jones",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCldKgmO2Hs0UGk6nRClAjATKoF9x2liYYA&s",
      dates: "01.12 - 01.13",
      status: "Pending",
      details: "#GDPL · 3 guests",
    },
    {
      name: "Kathryn Murphy",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCldKgmO2Hs0UGk6nRClAjATKoF9x2liYYA&s",
      dates: "01.12 - 01.15",
      status: "Paid",
      details: "#DBL · 1 guest",
    },
  ];

  return (
    <div className="w-2/5 p-4 bg-white shadow-md rounded-3xl">
      {/* Top Section */}
      <div className="flex flex-col items-start mb-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdKeT7lIatVy1HPrl2rEr0KGnzFsnBVVbgbA&s"
          alt="Booking"
          className="w-full h-52 rounded-3xl"
        />
        <div className="flex justify-between w-full mt-2">
          <h2 className="text-lg font-bold">Booking List</h2>
          <div className="text-gray-500">...</div>
        </div>
      </div>

      {/* Booking List */}
      <div className="bg-white rounded-lg shadow-md p-4">
        {bookings.map((booking, index) => (
          <div key={index} className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <img
                src={booking.image}
                alt={booking.name}
                className="w-10 h-10 rounded-full mr-2"
              />
              <div>
                <h3 className="text-sm font-semibold">{booking.name}</h3>
                <p className="text-xs text-gray-500">{booking.details}</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500">{booking.dates}</p>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded ${
                  booking.status === "Paid"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {booking.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-purple-100 rounded-3xl shadow-md h-28 p-4 mt-4 relative">
        <h3 className="text-sm font-semibold mb-2 text-center">
          UNLOCK NEW FEATURES
        </h3>
        <div className="flex justify-center mt-8 ">
          <button className="w-28 bg-blue-500 text-white text-sm font-semibold py-2 rounded-lg shadow-md relative">
            Get Pro Now
            <div className="absolute -top-2 -right-2 bg-white rounded-full p-1">
              <FaLock className="text-black" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
