// Modules
import { ReactNode } from "react";
import { Grid } from "@mui/material";

type Props = {
  children:ReactNode;
}

export default function GridXS0SM4MD6LG8 ({ children }:Props) {
  return (
    <Grid xs={0} sm={4} md={6} lg={8} item>
      {children}
    </Grid>
  )
}