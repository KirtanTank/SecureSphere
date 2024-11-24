import "./globals.css";

export const metadata = {
  title: "Secure Sphere",
  description: "Your hub for secure user management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
