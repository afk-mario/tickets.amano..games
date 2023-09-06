import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(
  "https://dxcnmehgippzsoygnrst.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4Y25tZWhnaXBwenNveWducnN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1OTQ2OTksImV4cCI6MjAwOTE3MDY5OX0.tm8pQ3LlsbUPgzzJnVsefe2w4ZV1Y7SjiENb73XsaeE"
);

export async function getTickets() {
  return supabase
    .from("player_with_metadata")
    .select()
    .order("id", { ascending: false });
}

export async function getLatestTicket() {
  return supabase
    .from("player_with_metadata")
    .select()
    .order("id", { ascending: false })
    .limit(1)
    .single();
}

export async function getTicket({ ticketId }) {
  return supabase
    .from("player_with_metadata")
    .select()
    .eq("id", ticketId)
    .single();
}

export async function deleteTicket({ ticketId }) {
  const { error } = await supabase.from("players").delete().eq("id", ticketId);

  if (error) console.error(error);
}

export async function newTicket({ values }) {
  const { error, data } = await supabase.from("players").insert(values);
  if (error) console.error(error);
  return data;
}
