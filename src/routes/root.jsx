import { Outlet, Link, useLoaderData } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import Ticket from "../components/ticket";

import "./styles.css";

const supabase = createClient(
  "https://dxcnmehgippzsoygnrst.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4Y25tZWhnaXBwenNveWducnN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1OTQ2OTksImV4cCI6MjAwOTE3MDY5OX0.tm8pQ3LlsbUPgzzJnVsefe2w4ZV1Y7SjiENb73XsaeE"
);

export async function loader() {
  const { data, error } = await supabase.from("players").select();
  return { data, error };
}

export default function Root() {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <div className="c-ticket-list">
      {data.map((item, i) => {
        return <Ticket key={item.id} index={i} {...item} />;
      })}
    </div>
  );
}
