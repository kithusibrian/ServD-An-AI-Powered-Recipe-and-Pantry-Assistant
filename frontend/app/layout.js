import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { neobrutalism } from "@clerk/themes";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Servd - AI Recipes Platform",
  description: "Create and share AI recipes with Servd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/orange-logo.png" sizes="any" />
      </head>
      <body className={`${inter.className}`}>
        <ClerkProvider
          appearance={{
            theme: neobrutalism,
          }}
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          {/* Footer */}
          <footer className="py-8 px-4 border-t">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Servd Logo"
                  width={48}
                  height={48}
                  className="w-14"
                />
              </div>
              <p className="text-stone-500 text-sm">
                &copy; {new Date().getFullYear()} KithusiBrian. All rights
                reserved.
              </p>
            </div>
          </footer>
        </ClerkProvider>
      </body>
    </html>
  );
}
