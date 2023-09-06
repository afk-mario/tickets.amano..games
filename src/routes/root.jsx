import { Link, useLoaderData } from "react-router-dom";

import { getTickets } from "../api";

import Ticket from "../components/ticket";

import "./styles.css";

export async function loader() {
  return getTickets();
}

export default function Root() {
  const { data } = useLoaderData();
  return (
    <>
      <header className="site-navigation">
        <Link to="/">
          <img src="/favicon.svg" alt="eye" />
        </Link>
        <nav>
          <Link to="/new">New</Link>
          <Link to="/login">Login</Link>
          <Link to="/latest">Último</Link>
        </nav>
      </header>
      <div className="c-ticket-list">
        {data.map((item) => {
          return (
            <Link to={`/ticket/${item.id}`} key={item.id}>
              <Ticket {...item} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
