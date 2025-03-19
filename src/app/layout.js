import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Portfolio de Mariem",
  description: "Mon portfolio en Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
