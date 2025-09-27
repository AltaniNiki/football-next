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
import Script from "next/script";
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
  
const hotjarId = 6531563; // π.χ. 3928475
const hotjarSv = 6;
const token = 'rUeQl';
const widgetId =492338564;


  return (
    <html lang="en" className={ubuntuMono.variable}>
      <body >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <ReduxProvider>
              <CssBaseline />
              <BaseApp></BaseApp>
              <Container style={{ marginTop: '75px' }}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
                    <LeagueList />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8 }}>
                    {children}
                  </Grid>
                </Grid>
              </Container>
            </ReduxProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
            {hotjarId && (
          <Script id="hotjar" strategy="afterInteractive">
            {`
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${hotjarId},hjsv:${hotjarSv}};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+_hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
          </Script>
        )}
         {token && (
          <Script
            id="appzi"
            strategy="afterInteractive"
            src={`https://w.appzi.io/w.js?token=${token}`}
          />
        )}
         {widgetId && (
          <Script id="sleekplan" strategy="afterInteractive">
            {`
              (function(w,d,s,o,f,js,fjs){
                w['SleekplanObject']=o;
                w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
                js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
                js.id=o;js.src='https://client.sleekplan.com/sdk/e.js';js.async=1;
                fjs.parentNode.insertBefore(js,fjs);
              }(window,document,'script','sleek'));
              sleek('init', { widgetId: '${widgetId}' });
            `}
          </Script>)}
      </body>
    </html>
  );
}
