import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://dxcnmehgippzsoygnrst.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4Y25tZWhnaXBwenNveWducnN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1OTQ2OTksImV4cCI6MjAwOTE3MDY5OX0.tm8pQ3LlsbUPgzzJnVsefe2w4ZV1Y7SjiENb73XsaeE"
);

export async function getTickets() {
  return supabase.from("players").select();
}
