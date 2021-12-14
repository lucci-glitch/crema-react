import { config, useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import { useState } from "react";

const Loading = (props) => {
    const [flip, set] = useState(false);
    const aniprops = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 200,
        config: config.molasses,
        onRest: () => set(!flip),
    });

    return <animated.h1 style={aniprops}>{props.label}</animated.h1>;
};

export default Loading;
