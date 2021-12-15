import { useTransition } from "@react-spring/core";
import { config, animated } from "@react-spring/web";
import { useState } from "react";

const Bounce = (props) => {

    const [items] = useState([...props.text])

    console.log(items)

    const transition = useTransition(items, {
        from: { opacity: 0},
        enter: { opacity: 1 },
        delay: 200,
        trail: 100,
        config: config.molasses,
      });
    
      const fragment = transition((style, item) => {
        return <animated.span style={style}>{item}</animated.span>;
      });
    
      return (
        <>
          <p>{fragment}</p>
        </>
      );
};

export default Bounce;
