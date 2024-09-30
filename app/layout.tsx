import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./Provider";
import Header from "./Components/Header";

export const metadata: Metadata = {
  title: "Developer Portfolio Website",
  description:
    "amazing developer website built bay using nextJs NextUI  and Tailwindcss.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/99482717?s…00&u=2fbe9b57ce3b7ad39523ce9434916cbcd53a51c1&v=4"
          type="image/png"
          sizes="32x32"
          className="rounded-full"
        />
      </head>
      <body className="w-screen px-auto">
        <Providers>
          <header>
            <Header />
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
