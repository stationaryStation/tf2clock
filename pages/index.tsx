import Link from "next/link";
import Head from "next/head";

const Home = () => {
    const currentDate = new Date();
    const JungleInferno = new Date("10/16/2017");
    const difference_in_time = currentDate.getTime() - JungleInferno.getTime();

    const difference_in_days = Math.floor(difference_in_time / (1000 * 3600 * 24));
    
    return (
        <>
        <Head>
            <title>{difference_in_days} Days since Jungle Inferno</title>
            <meta property="description" content="Site made by Stationarystation" />
            <meta property="og:title" content={`${difference_in_days} days since Jungle Inferno`} key="title" />
            <meta property="og:description" content="Site made by Stationarystation" />
            <meta property="og:image" content="../public/assets/img/wide.png" />
        </Head>

        <div className="container">
                <p id="uptitle">Days since Jungle Inferno:</p>
                <p id="reactiveContent">{difference_in_days}</p>
        </div>
        <footer>
            <p id="text">Made by StationaryStation</p>
            <Link id="link" passHref href="https://stationarystation.vercel.app">Homepage</Link>
        </footer>
        </>
    )
}

export default Home;