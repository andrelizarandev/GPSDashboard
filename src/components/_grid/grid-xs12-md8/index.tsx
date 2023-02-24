// Modules
import { ReactNode } from "react";
import { Grid } from "@mui/material";

type Props = {
  children:ReactNode;
}

export default function GridXS12MD8 ({ children }:Props) {
  return (
    <Grid xs={12} md={8} item>
      {children}
    </Grid>
  )
}