import { Link, useLoaderData, useNavigate } from "react-router-dom";

import TicketComponent from "../components/ticket";

import { deleteTicket, getTicket } from "../api";

export async function loader({ params }) {
  const { ticketId } = params;
  return getTicket({ ticketId });
}

export default function Ticket() {
  const navigate = useNavigate();
  const { data: ticket } = useLoaderData();

  return (
    <>
      <TicketComponent {...ticket} />
      <footer className="site-navigation">
        <Link to="/">
          <img src="/favicon.svg" alt="eye" />
        </Link>
        <nav>
          <button
            type="button"
            onClick={async () => {
              await deleteTicket({ ticketId: ticket.id });
              navigate("/");
            }}
          >
            Delete
          </button>
          <Link to="/login">Login</Link>
          <Link to="/latest">Último</Link>
        </nav>
      </footer>
    </>
  );
}
