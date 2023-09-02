import { Link, useLoaderData } from "react-router-dom";

import TicketComponent from "../components/ticket";

import { getTickets } from "../api";

export async function loader() {
  return getTickets();
}

export default function Latest() {
  const { data } = useLoaderData();

  const ticketIndex = data.length - 1;

  const ticket = data[ticketIndex];

  return (
    <>
      <Link to={`/ticket/${ticket.id}`}>
        <TicketComponent {...ticket} index={ticketIndex} />
      </Link>
      <footer className="site-navigation">
        <Link to="/">
          <img src="/favicon.svg" alt="eye" />
        </Link>
        <Link to="/latest">Último</Link>
      </footer>
    </>
  );
}
