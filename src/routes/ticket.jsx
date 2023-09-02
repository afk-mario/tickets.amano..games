import { useLoaderData, useParams } from "react-router-dom";

import TicketComponent from "../components/ticket";

import { getTickets } from "../api";

export async function loader() {
  return getTickets();
}

export default function Ticket() {
  const { ticketId } = useParams();

  console.log("ticketId", ticketId);
  const { data } = useLoaderData();
  console.log("data", data);

  const ticketIndex = data.findIndex((item) => {
    return item.id === Number(ticketId);
  });

  const ticket = data[ticketIndex];

  return <TicketComponent {...ticket} index={ticketIndex} />;
}
