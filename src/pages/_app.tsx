// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'antd/dist/reset.css';
import AppLayout from '@/components/AppLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}
