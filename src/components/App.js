import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { ThemeProvider } from "../context/themeContext";
import { UserProvider } from "../context/user";


function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);
  return (
    <main className={theme}>
      <UserProvider>
      <Header theme={theme} setTheme={setTheme} user={user} setUser={setUser} />
      <Profile theme={theme} user={user} />
    </UserProvider>
    </main>
  );
}

export default App;
