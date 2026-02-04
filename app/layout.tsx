import "./globals.css";
import Navbar from "../components/Navbar";
import ScrollAnimation from "../components/ScrollAnimation";

export const metadata = {
  title: "Tristan Govier - Computer Engineer & Swimmer",
  description: "Portfolio of Tristan Govier - McGill Computer Engineering student, varsity swimmer, and software engineer. Explore my experience, swimming achievements, and trading journal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, Segoe UI, 'Helvetica Neue', sans-serif", backgroundColor: "#ffffff", color: "#171717" }}>
        <ScrollAnimation />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
