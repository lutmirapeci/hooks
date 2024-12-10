import { useState, useEffect, useCallback } from "react";

export const useKeyPress = (targetKey: string) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        setIsKeyPressed(true);
      }
    },
    [targetKey]
  );

  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        setIsKeyPressed(false);
      }
    },
    [targetKey]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return isKeyPressed;
};
