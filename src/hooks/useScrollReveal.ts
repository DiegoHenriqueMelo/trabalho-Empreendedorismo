import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible } as { ref: RefObject<T>; isVisible: boolean };
}
