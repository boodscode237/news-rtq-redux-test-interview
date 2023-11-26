import { ThemeProvider } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Header from "./Header";

import theme from "./theme";

const Layout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main className="App">
          <Outlet />
        </main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
