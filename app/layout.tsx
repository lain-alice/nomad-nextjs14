import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  // Metadata 타입도 Next.js에서 제공
  title: { template: "%s | Next Movies", default: "Next Movies" },
  description: "The best movies on the best",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
