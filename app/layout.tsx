import '@/app/assets/global.css';
import { inter } from '@/app/assets/fonts';
import { Toaster } from 'react-hot-toast'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Toaster position="bottom-center" />
        {children}
        <div
          style={{
            textAlign: 'center',
            color: '#2a832a',
            marginTop: '3rem',
            fontSize: '13px',
          }}>Powered by Pakam Technology</div>
      </body>
    </html>
  );
}