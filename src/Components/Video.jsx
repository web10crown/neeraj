import { memo, useEffect, useState } from "react";


const VideoBackground = () => {
    const [hue, setHue] = useState(320);

    useEffect(() => {
        const interval = setInterval(() => {
            setHue((prevHue) => (prevHue + 30) % 360);
        }, 5000);


        return () => clearInterval(interval);
    }, []);
    return (
        <video className="video-background" style={{ filter: `blur(10px) hue-rotate(${hue}deg)` }} autoPlay loop muted>
            <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}
export default memo(VideoBackground);