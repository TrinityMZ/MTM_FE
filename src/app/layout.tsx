import "./globals.css";
import { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "맨투맨",
  description: "우리는 누군가에게 멘토이자 멘티이다. - 맨투맨",
};

const pretendard = localFont({ src: "./PretendardVariable.woff2" });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <Providers>
          <Header />
          <div>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
