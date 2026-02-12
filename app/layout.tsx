import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "카페수월 - Cafe Suwol | 지역 독립출판 플랫폼형 북카페",
  description: "커피를 마시고, 책을 읽고, 기억을 남깁니다. 대전 북카페 수월",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {children}
      </body>
    </html>
  );
}
