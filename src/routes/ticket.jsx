import { Link, useLoaderData } from "react-router-dom";

import TicketComponent from "../components/ticket";

import { getTicket } from "../api";

export async function loader({ params }) {
  const { ticketId } = params;
  return getTicket({ ticketId });
}

export default function Ticket() {
  const { data: ticket } = useLoaderData();

  return (
    <>
      <TicketComponent {...ticket} />
      <footer className="site-navigation">
        <Link to="/">
          <img src="/favicon.svg" alt="eye" />
        </Link>
        <Link to="/latest">Último</Link>
      </footer>
    </>
  );
}
