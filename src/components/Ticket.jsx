const Ticket = ({ flight, onSelect, isSelected }) => {
  return (
    <div
      className={`bg-white flex items-center justify-between shadow-md rounded-xl w-full max-w-[100%] border border-primary-300 relative cursor-pointer ${
        isSelected ? "bg-blue-200 border-blue-500" : "bg-white"
      }
    `}
      onClick={() => onSelect(flight)}
    >
      {/* Left Side (Flight Details) */}
      <div className="flex-1 w-[80%] p-10">
        <div className="flex gap-2 text-gray-600 mb-2">
          <span className="bg-primary-300/80 text-primary-700/90 px-2 py-1 text-16 rounded-md">
            {flight.flightNumber}
          </span>
          <span className="bg-primary-300/80 text-primary-700/90 px-2 py-1 text-xs rounded-md"></span>
        </div>

        <div className="text-xl font-semibold">
          {flight.departureTime} <span className="text-gray-400">—</span>{" "}
          {/* {flight.duration} <span className="text-gray-400">—</span>{" "} */}
          {flight.arrivalTime}
        </div>

        <div className="text-6xl text-gray-500  font-medium">
          {flight.source} ✈️ {flight.destination}
        </div>

        <div className="text-xs text-gray-400 mt-1">
          VIEWING AVAILABLE SEATS
        </div>
      </div>

      {/* Vertical Dashed Divider with Cut-Outs */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Top Cut-Out */}
        <div className="w-10 h-10 bg-primary-700 shadow-inner-custom-bottom rounded-full absolute -top-7"></div>
        {/* Dashed Line */}
        <div className="border-4 border-dashed border-primary-700 h-52"></div>
        {/* Bottom Cut-Out */}
        <div className="w-10 h-10 bg-primary-700 shadow-inner-custom-top rounded-full absolute -bottom-7"></div>
      </div>

      {/* Right Side (Logo, Price, Button) */}
      <div className="flex w-[30%] flex-col items-center">
        <img
          src={flight.airline}
          alt="Airline Logo"
          className="w-12 h-12 object-contain"
        />
        <div className="text-lg font-semibold mt-2">${flight.price}</div>
        <button className="bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 mt-2 rounded-md hover:bg-blue-200">
          SELECT
        </button>
      </div>
    </div>
  );
};

export default Ticket;

//  <div
// className={` flex justify-between p-4 border rounded-lg shadow-md cursor-pointer ${
//   active ? "bg-blue-100 border-blue-500" : "bg-white"
// }`}
// onClick={handleClick}
// >
// {/* Left Side */}
// <div className="flex-1">
//   <p className="font-semibold">
//     {flight.departure} → {flight.arrival}
//   </p>
//   <p className="text-gray-600">
//     {flight.source} → {flight.destination}
//   </p>
// </div>

// {/* Right Side */}
// <div className="text-right w-1/4">
//   <div className="h-10 w-10 bg-gray-300 rounded-full mb-2"></div>{" "}
//   {/* Placeholder for Airline Logo */}
//   <p className="font-bold">${flight.price}</p>
//   <button className="bg-blue-500 text-white px-4 py-1 rounded mt-2">
//     Select
//   </button>
// </div>
// </div>
