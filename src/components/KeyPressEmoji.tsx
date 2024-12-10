import { useKeyPress } from "../hooks/useKeyPress";

const KeyPressEmoji = () => {
  const isHPressed = useKeyPress("h");
  const isSPressed = useKeyPress("s");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Press "h" or "s" on your keyboard</h1>
      <div style={{ fontSize: "100px" }}>
        {isHPressed && "😊"} {/* Happy face */}
        {isSPressed && "😢"} {/* Sad face */}
      </div>
    </div>
  );
};

export default KeyPressEmoji;
