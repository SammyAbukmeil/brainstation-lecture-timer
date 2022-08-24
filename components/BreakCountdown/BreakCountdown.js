import Countdown from "react-countdown";
import TimerComplete from "../TimerComplete/TimerComplete";

const BreakCountdown = (props) => {
  const halfLectureTime = Date.now() + props.time / 2;

  return (
    <>
      <Countdown date={halfLectureTime} ref={props.breakCountdownRef}>
        <TimerComplete message="Break is over!" />
      </Countdown>
    </>
  );
};

export default BreakCountdown;
