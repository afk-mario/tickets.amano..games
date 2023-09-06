import { Link } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import { useState, useEffect } from "react";

import { supabase } from "../api";

import "./login.css";

function Login() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

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
          {!session ? (
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              providers={[]}
            />
          ) : (
            <>
              <h2>Logged in</h2>
              <button
                onClick={async () => {
                  const { error } = await supabase.auth.signOut();
                  if (error) console.error(error);
                }}
              >
                Log out
              </button>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default Login;
