import { SWRConfig } from "swr";
import GlobalStyle from "../styles";

async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("failed to fetch data");
    error.status = response.status;
    throw error;
  }
  const data = await response.json();
  return data;
}

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </SWRConfig>
  );
}
