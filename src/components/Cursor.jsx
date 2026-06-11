import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const trail = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trailEl = trailRef.current;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      cursor.style.left = e.clientX - 6 + "px";
      cursor.style.top = e.clientY - 6 + "px";
    };

    const onEnter = () => {
      cursor.classList.add("hovering");
      hovering.current = true;
    };
    const onLeave = () => {
      cursor.classList.remove("hovering");
      hovering.current = false;
    };

    document.addEventListener("mousemove", onMove);

    const addHover = () => {
      document
        .querySelectorAll("a, button, .proj-row, .feat, .cs-next")
        .forEach((el) => {
          el.addEventListener("mouseenter", onEnter);
          el.addEventListener("mouseleave", onLeave);
        });
    };
    addHover();

    let animFrame;
    const tick = () => {
      trail.current.x += (mouse.current.x - trail.current.x) * 0.1;
      trail.current.y += (mouse.current.y - trail.current.y) * 0.1;
      trailEl.style.left = trail.current.x - 18 + "px";
      trailEl.style.top = trail.current.y - 18 + "px";
      animFrame = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={trailRef} className="cursor-trail" />
    </>
  );
}