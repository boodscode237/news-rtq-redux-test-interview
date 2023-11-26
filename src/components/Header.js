import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@mui/material";

const Header = () => {
  return (
    <header className="Header">
      <CssBaseline />
      <AppBar
        component="nav"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link to="/">Redux Blog</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
