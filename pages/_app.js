import '@/styles/globals.sass'
import "@/styles/general.sass"
import MainLayout from '@/src/components/layout/MainLayout'

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} /> 
    </MainLayout>
  )
  /* This Component prop refers to the current page being displayed by next */
}
