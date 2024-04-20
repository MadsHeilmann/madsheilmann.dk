import type { FC, ReactElement } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const ButtonAppBar: FC = (): ReactElement | null => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
