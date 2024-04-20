"use client";

import Container from "@mui/material/Container";
import type { FC, ReactElement, ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/library/theme";
import ButtonAppBar from "@/components/Header";

export interface Children {
  readonly children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const MainContainer: FC<Children> = ({
  children,
}: Children): ReactElement | null => {
  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar />
      <Container>{children}</Container>
    </ThemeProvider>
  );
};

export default MainContainer;
