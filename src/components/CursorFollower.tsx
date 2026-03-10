"use client";

import dynamic from "next/dynamic";

// Dynamically import the animated cursor to prevent SSR hydration errors
// since window is not defined on the server.
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function CursorFollower() {
  return (
    <div className="hidden md:block">
      <AnimatedCursor
        innerSize={10}
        outerSize={40}
        innerScale={0.6}
        outerScale={1.5}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "#1a1a1a",
        }}
        outerStyle={{
          border: "2px solid rgba(26, 26, 26, 0.5)",
          backgroundColor: "rgba(26, 26, 26, 0.05)",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          ".group",
          "#nav-hover-pill",
          '[role="button"]',
        ]}
      />
    </div>
  );
}
