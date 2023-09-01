import "./App.css";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://dxcnmehgippzsoygnrst.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4Y25tZWhnaXBwenNveWducnN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1OTQ2OTksImV4cCI6MjAwOTE3MDY5OX0.tm8pQ3LlsbUPgzzJnVsefe2w4ZV1Y7SjiENb73XsaeE"
);

function App() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getTickets();
  }, []);

  async function getTickets() {
    const { data } = await supabase.from("players").select("*");
    setTickets(data);
  }

  return (
    <div className="App">
      <ul>
        {tickets.map((item) => {
          return (
            <li key={item.id}>
              <span>
                {item.gems_collected}/{item.gems_total}
              </span>
              <time>{item.created_at}</time>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
