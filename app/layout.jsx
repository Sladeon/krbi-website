import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Unified Data for Manufacturing Operations | Kettle River BI",
  description:
    "Finance, Operations, and IT finally agree. See how Kettle River BI aligns your organization around one truth and drives $2M+ in measurable outcomes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-950">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
// Trigger redeploy
