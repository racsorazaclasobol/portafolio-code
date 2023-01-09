import Head from 'next/head'
import "bootswatch/dist/lux/bootstrap.min.css";

export default function MyApp({ Component, pageProps }) {

    return (
        <>
            <Head>
                <title> Portafolio </title>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous"></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />

            </Head>
            
            <Component {...pageProps} />
        </>
    )

}