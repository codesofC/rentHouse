import "@/styles/globals.css"
import BigContainer from "@/components/BigContainer"

export default function App({ Component, pageProps }) {
  return <BigContainer>
    <Component {...pageProps} />
  </BigContainer>
}
