import { Link, useLoaderData } from "react-router-dom";

import TicketComponent from "../components/ticket";

import { getLatestTicket } from "../api";

export async function loader() {
  return getLatestTicket();
}

export default function Latest() {
  const { data: ticket } = useLoaderData();

  return (
    <>
      <Link to={`/ticket/${ticket.id}`}>
        <TicketComponent {...ticket} />
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
