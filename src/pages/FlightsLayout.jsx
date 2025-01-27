import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Flights from "../components/Flights";

export default function FlightsLayout() {
  const [selectedTicket, setSelectedTicket] = useState(null);

  return (
    <div className="flex w-[100vw]">
      <aside className="max-h-screen w-[35%] sticky top-16">
        <Sidebar ticket={selectedTicket} />
      </aside>

      <main className="pt-16 w-[65%] ">
        <Flights
          selectedTicket={selectedTicket}
          onTicketSelect={setSelectedTicket}
        />
      </main>
    </div>
  );
}
