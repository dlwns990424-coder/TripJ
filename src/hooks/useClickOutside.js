import { useEffect, useRef } from "react";

export default function useClickOutside(isOpen, onClose) {
  const ref = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen, onClose]);

  return ref;
}
