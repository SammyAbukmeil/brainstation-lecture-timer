import Countdown from "react-countdown";
import TimerComplete from "../TimerComplete/TimerComplete";

const BreakCountdown = (props) => {
  const halfLectureTime = Date.now() + props.time / 2;

  return (
    <>
      <Countdown
        date={halfLectureTime}
        ref={props.breakCountdownRef}
        daysInHours={true}
        zeroPadTime={2}
      >
        <TimerComplete />
      </Countdown>
    </>
  );
};

export default BreakCountdown;
