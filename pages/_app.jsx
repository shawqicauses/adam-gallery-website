import {Provider} from "../context"
import "../styles/globals.css"

// eslint-disable-next-line
export default function MyApp({Component, pageProps}) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  )
}
