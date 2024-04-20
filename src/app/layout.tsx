import type { Metadata } from "next";
import type { FC, ReactNode } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import MainContainer from "@/components/MainContainer";

export const metadata: Metadata = {
  title: "Mads Heilmann",
  description: "Mads Heilmann's personal website",
};

export interface Children {
  readonly children: ReactNode;
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const RootLayout: FC<Children> = ({ children }: Readonly<Children>) => {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <CssBaseline />
          <MainContainer>{children}</MainContainer>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
