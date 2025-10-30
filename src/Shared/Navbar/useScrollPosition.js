import { useEffect, useState } from "react";

const useScrollPosition = () => {
  // Set initial state
  const [scrollPosition, setScrollPosition] = useState(0);

  // Create scroll event listener
  const handleScroll = () => {
    // Get current scroll position
    const position = window.pageYOffset;
    // Set scroll position state
    setScrollPosition(position);
  };

  // Add scroll event listener on mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Remove scroll event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Return scroll position state
  return scrollPosition;
};

export default useScrollPosition;
