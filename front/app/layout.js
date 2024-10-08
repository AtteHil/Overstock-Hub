import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import "./globals.css";
import NavBar from './nav-bar/nav-bar';


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <AppRouterCacheProvider>
          {props.children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
