import { Link, Form, redirect } from "react-router-dom";
import { newTicket } from "../api";

export async function action({ request }) {
  let formData = await request.formData();
  let values = Object.fromEntries(formData);
  await newTicket({ values });
  return redirect("/");
}

function NewTicket() {
  return (
    <>
      <header className="site-navigation">
        <Link to="/">
          <img src="/favicon.svg" alt="eye" />
        </Link>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/latest">Último</Link>
        </nav>
      </header>
      <main className="p-login">
        <div className="wrapper">
          <Form method="post">
            <label htmlFor="gems_collected">Collected gems</label>
            <input name="gems_collected" type="number" defaultValue="0" />
            <label htmlFor="gems_total">Total gems</label>
            <input name="gems_total" type="number" defaultValue="100" />
            <input
              type="text"
              hidden
              readOnly
              value="pixelatl-23"
              name="event"
            />
            <button type="submit">Save</button>
          </Form>
        </div>
      </main>
    </>
  );
}

export default NewTicket;
