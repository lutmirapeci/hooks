import { useTimer } from "../hooks/useTimer";

const TimerComponent = () => {
  const seconds = useTimer();

  return (
    <div>
      <h1>Timer</h1>
      <p>Seconds since mounted: {seconds}</p>
    </div>
  );
};

export default TimerComponent;
