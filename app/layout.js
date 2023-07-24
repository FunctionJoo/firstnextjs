import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '넥스트 장인 쿠팡프레시',
  description: '개고수 입갤 ㅋㅋ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className='navbar'>
          <Link href="/">홈</Link>
          <Link href="/list">List</Link>
          <Link href="/cart">장바구니</Link>
        </div>
        {children}
      </body>
    </html>
  )
}
