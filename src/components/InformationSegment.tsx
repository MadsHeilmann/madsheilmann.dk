import type { FC, ReactElement } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

const InformationSegment: FC = (): ReactElement | null => {
  return (
    <Grid>
      <Typography variant="h3" align="center">
        Welcome to Mads website
      </Typography>
      <Typography variant="subtitle1" align="center">
        Subtitle
      </Typography>
    </Grid>
  );
};

export default InformationSegment;
