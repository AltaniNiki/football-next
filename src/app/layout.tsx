import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider, CssBaseline } from '@mui/material';
import BaseApp from "../components/BaseApp"
import LeagueList from "../components/League/LeagueList"
import theme from '../theme';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"
import ReduxProvider from '../app/store/ReduxProvider';
import { Ubuntu_Mono } from "next/font/google";
import './globals.css';

export const metadata: Metadata = {
  title: "Create Next App for football",
  description: "Generated my first app in nextJs",
};



// Φόρτωση γραμματοσειράς
const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: ["400", "700"], // ό,τι θες
  variable: "--font-ubuntu-mono"
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en" className={ubuntuMono.variable}>
      <body >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <ReduxProvider>
              <CssBaseline />
              <BaseApp></BaseApp>
              <Container style={{ marginTop: '64px' }}>
                <Grid container>
                  <Grid size={4}>
                    <LeagueList />
                  </Grid>
                  <Grid size={8}>
                    {children}
                  </Grid>
                </Grid>
              </Container>
            </ReduxProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
