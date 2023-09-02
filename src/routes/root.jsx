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
        <Link to="/latest">Último</Link>
      </header>
      <div className="c-ticket-list">
        {data.map((item, i) => {
          return (
            <Link to={`/ticket/${item.id}`} key={item.id}>
              <Ticket index={i} {...item} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
