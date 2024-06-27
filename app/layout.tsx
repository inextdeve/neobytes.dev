import { Montserrat } from "next/font/google";
import Layout from "../components/Layout";
import "../styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Orders",
  description: "Neobytes dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
