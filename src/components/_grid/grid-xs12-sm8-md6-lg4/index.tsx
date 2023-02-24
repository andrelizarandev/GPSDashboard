// Modules
import { ReactNode } from "react";
import { Grid } from "@mui/material";

type Props = {
  children:ReactNode;
}

export default function GridXS12SM8MD6LG4 ({ children }:Props) {
  return (
    <Grid xs={12} sm={8} md={6} lg={4} item>
      {children}
    </Grid>
  )
}