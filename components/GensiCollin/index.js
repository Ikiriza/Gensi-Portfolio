import { useEffect, useRef, useState } from "react";
import A from "./gensiCollinSVGs/A";
import B from "./gensiCollinSVGs/B";
import E1 from "./gensiCollinSVGs/E1";
import E2 from "./gensiCollinSVGs/E2";
import H from "./gensiCollinSVGs/H";
import K1 from "./gensiCollinSVGs/K1";
import K2 from "./gensiCollinSVGs/K2";
import K3 from "./gensiCollinSVGs/K3";
import M from "./gensiCollinSVGs/M";
import N from "./gensiCollinSVGs/N";
import N2 from "./gensiCollinSVGs/N2";
import U from "./gensiCollinSVGs/U";

const SvgWrapper = ({ SVG, className, ...rest }) => (
  <div
    {...rest}
    className={`ai-gensi-collin-parallax ${className}`}
  >
    <SVG />
  </div>
)


export default function GensiCollin({ }) {
  const ref = useRef()

  const [mount, handleMount] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll()
  }, []);

  const isInViewport = () => {
    const rect = ref?.current?.getBoundingClientRect();
    return (rect?.top < window.innerHeight / 2)
  }

  const handleScroll = () => {
    handleMount(isInViewport())
  }

  return (
    <div ref={ref} className={`ai-gensi-collin ${mount ? 'ai-gensi-collin-visible' : ''}`}>
      <SvgWrapper
        className="ai_svg_M"
        SVG={M}
      />
      <SvgWrapper
        className="ai_svg_U"
        SVG={U}
      />
      <SvgWrapper
        className="ai_svg_N"
        SVG={N}
      />
      <SvgWrapper
        className="ai_svg_E1"
        SVG={E1}
      />
      <SvgWrapper
        className="ai_svg_E2"
        SVG={E2}
      />
      <SvgWrapper
        className="ai_svg_B"
        SVG={B}
      />
      <SvgWrapper
        className="ai_svg_K1"
        SVG={K1}
      />
      <SvgWrapper
        className="ai_svg_K2"
        SVG={K2}
      />
      <SvgWrapper
        className="ai_svg_K3"
        SVG={K3}
      />
      <SvgWrapper
        className="ai_svg_H"
        SVG={H}
      />
      <SvgWrapper
        className="ai_svg_A"
        SVG={A}
      />
      <SvgWrapper
        className="ai_svg_N2"
        SVG={N2}
      />
    </div>
  )
}
