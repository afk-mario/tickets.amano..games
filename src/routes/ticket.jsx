import { Link, useLoaderData, useParams } from "react-router-dom";

import TicketComponent from "../components/ticket";

import { getTickets } from "../api";

export async function loader() {
  return getTickets();
}

export default function Ticket() {
  const { ticketId } = useParams();

  const { data } = useLoaderData();

  const ticketIndex = data.findIndex((item) => {
    return item.id === Number(ticketId);
  });

  const ticket = data[ticketIndex];

  return (
    <>
      <TicketComponent {...ticket} index={ticketIndex} />
      <footer className="site-navigation">
        <Link to="/">
          <img src="/favicon.svg" alt="eye" />
        </Link>
        <Link to="/latest">Último</Link>
      </footer>
    </>
  );
}
