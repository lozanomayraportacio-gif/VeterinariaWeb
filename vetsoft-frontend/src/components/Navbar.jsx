import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2
          }}
        >

          <img
            src={logo}
            alt="VetSoft"
            width="70"
          />

          <Typography variant="h5">
            VetSoft Mayra
          </Typography>

        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;