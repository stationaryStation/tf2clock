import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home = () => {
    const currentDate = new Date();
    const JungleInferno = new Date("10/16/2017 12:00");
    const difference_in_time = currentDate.getTime() - JungleInferno.getTime();

    const difference_in_days = Math.floor(difference_in_time / (1000 * 3600 * 24));
    const difference_in_hours = Math.floor(Math.abs(currentDate.getTime() - JungleInferno.getTime()) /  36e5);
    const difference_in_minutes = Math.floor((Math.abs(currentDate.getTime() - JungleInferno.getTime()) /  36e5) * 60);
    const difference_in_seconds = Math.floor((Math.abs(currentDate.getTime() - JungleInferno.getTime()) /  36e5) * 60 * 60);

    const [SinceMS, SetSinceMs] = useState<number>(0);
    const [SinceDays, SetSinceDays] = useState<number>(0);
    const [SinceHours, SetSinceHours] = useState<number>(0);
    const [SinceMinutes, SetSinceMinutes] = useState<number>(0);
    const [SinceSeconds, SetSinceSeconds] = useState<number>(0);

    useEffect(() => {
        setTimeout(() => {
            SetSinceDays(difference_in_days);
            SetSinceMs(difference_in_time);
            SetSinceHours(difference_in_hours);
            SetSinceMinutes(difference_in_minutes);
            SetSinceSeconds(difference_in_seconds);
        }, 1000);
    }, [difference_in_days,difference_in_time, difference_in_hours, difference_in_minutes, difference_in_seconds])

    return (
        <>
        <Head>
            <title>{difference_in_days} Days since Jungle Inferno</title>
            <meta property="description" content="Site made by Stationarystation" />
            <meta property="og:title" content={`${difference_in_days} days since Jungle Inferno`} key="title" />
            <meta property="og:description" content={`It has been: ${difference_in_days} days or ${difference_in_hours} hours or ${difference_in_minutes} minutes or ${difference_in_seconds} seconds or ${difference_in_time} ms since jungle inferno released`} key="description" />
            <meta property="og:image" content="https://github.com/stationaryStation/tf2clock/blob/master/public/assets/img/wide.png?raw=true" key="img" />
        </Head>

        <div className="container">
            <p id="uptitle">Days since Jungle Inferno:</p>
            <p id="reactiveContent">{SinceDays} days</p>
        </div>
        <div className="container">
            <p id="uptitle">Hours since Jungle Inferno:</p>
            <p id="reactiveContent">{SinceHours} hours</p>
        </div>
        <div className="container">
            <p id="uptitle">Minutes since Jungle Inferno</p>
            <p id="reactiveContent">{SinceMinutes} minutes</p>
        </div>
        <div className="container">
            <p id="uptitle">Seconds since Jungle Inferno</p>
            <p id="reactiveContent">{SinceSeconds} seconds</p>
        </div>
        <div className="container">
            <p id="uptitle">Milliseconds since Jungle Inferno</p>
            <p id="reactiveContent">{SinceMS} ms</p>
        </div>
        <footer>
            <p id="text">Made by StationaryStation</p>
            <Link id="link" passHref href="https://stationarystation.vercel.app">Homepage</Link>
        </footer>
        </>
    )
}

export default Home;