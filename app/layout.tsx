import "./globals.css";
import { ReactNode } from "react";
export const metadata={title:"Icon Vista PMS",description:"Hotel Property Management System"};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body>{children}</body></html>}