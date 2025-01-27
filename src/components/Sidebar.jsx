import planeSketch from "../assets/plane-sketch.png";

import { RoundedButton } from "./UI/Button.jsx";

export default function Sidebar({ ticket }) {
  if (!ticket) {
    return (
      <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 border border-gray-200 w-full max-w-xl h-screen text-center">
        {/* Fallback Image */}
        <img
          src={planeSketch}
          alt="No Flights Available"
          className="w-72 h-48 object-cover rounded-md"
        />

        {/* Message */}
        <h2 className="text-xl font-semibold text-gray-900/80 mt-4">
          Find, Book, Fly!
        </h2>
        <p className="text-primary-700 mt-2">
          Kickstart your journey by searching for the best flights. Your next
          adventure is just a ticket away!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col  bg-white shadow-lg rounded-lg p-6 border border-gray-200 w-full max-w-xl h-screen">
      {/* Flight Number */}
      <p className="text-lg font-semibold text-gray-700/80 my-2 ">
        Flight Number:{" "}
        <span className="text-white bg-primary-700/80 py-2 px-4 rounded-2xl">
          {ticket.flightNumber}
        </span>
      </p>

      {/* Airline Name */}
      <h2 className="text-7xl font-bold text-primary-700">{ticket.airline}</h2>

      {/* Flight Details */}
      <div className="my-4 grid grid-cols-2 gap-y-4 gap-x-1.5 font-extrabold text-primary-900/70">
        <p>
          <span className="font-semibold text-primary-700/80">Source:</span>{" "}
          {ticket.source}
        </p>
        <p>
          <span className="font-semibold text-primary-700/80">
            Source Terminal:
          </span>{" "}
          {ticket.sourceTerminal}
        </p>

        <p>
          <span className="font-semibold text-primary-700/80">
            Destination:
          </span>{" "}
          {ticket.destination}
        </p>
        <p>
          <span className="font-semibold text-primary-700/80">
            Destination Terminal:
          </span>{" "}
          {ticket.destinationTerminal}
        </p>

        <p>
          <span className="font-semibold text-primary-700/80">
            Departure Time:
          </span>{" "}
          {ticket.departureTime}
        </p>
        <p>
          <span className="font-semibold text-primary-700/80">
            Arrival Time:
          </span>{" "}
          {ticket.arrivalTime}
        </p>

        <p>
          <span className="font-semibold text-primary-700/80">Capacity:</span>{" "}
          {ticket.capacity}
        </p>
        <p>
          <span className="font-semibold text-primary-700/80">
            Available Seats:
          </span>{" "}
          {ticket.availableSeats}
        </p>

        <p className="text-3xl font-bold text-primary-900/70 col-span-2">
          <span className="font-semibold text-primary-700/80"> Price:</span> ₹
          {ticket.price.toLocaleString()}
        </p>
      </div>

      {/* Booking Button */}
      <RoundedButton>Book Now</RoundedButton>
    </div>
  );
}
