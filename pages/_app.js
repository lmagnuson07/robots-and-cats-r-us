import '../styles/global.css'
import DefaultLayout from './../components/layouts/DefaultLayout'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
  <>
    <DefaultLayout>
      {getLayout(<Component {...pageProps} />)}
    </DefaultLayout>
  </>
  )
}

export default MyApp
