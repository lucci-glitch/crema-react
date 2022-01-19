import { config, useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import { useState } from "react";

const Loading = (props) => {
    const [flip, set] = useState(false);
    const springProps = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 200,
        config: config.slow,
        onRest: () => set(!flip),
    });

    return <animated.h4 style={springProps}>{props.label}</animated.h4>;
};

export default Loading;
