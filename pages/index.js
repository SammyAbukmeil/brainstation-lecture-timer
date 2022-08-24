import Head from "next/head";
import { useState, useRef } from "react";
import Countdown from "react-countdown";
import BreakCountdown from "../components/BreakCountdown/BreakCountdown";
import Controls from "../components/Controls/Controls";
import Form from "../components/Form/Form";
import LectureSlide from "../components/LectureSlide/LectureSlide";
import SlideList from "../components/SlideList/SlideList";
import TimerComplete from "../components/TimerComplete/TimerComplete";

export default function Home() {
  const countDownRef = useRef();
  const breakCountDownRef = useRef();
  const [timer, setTimer] = useState(0);
  const [slides, setSlides] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();

    const time = e.target.time.value;
    const slides = e.target.slides.value;

    const milliseconds = time * 60000;

    setTimer(milliseconds);
    setSlides(slides);
  };

  const slideElements = [];

  for (let i = 0; i < slides; i++) {
    slideElements.push(<LectureSlide key={i} slide={i} />);
  }

  const pauseClickHandler = () => {
    countDownRef.current.pause();
    breakCountDownRef.current.pause();
  };

  const resumeClickHandler = () => {
    countDownRef.current.start();
    breakCountDownRef.current.start();
  };

  return (
    <div>
      <Head>
        <title>Brainstation Lecture Timer</title>
        <meta name="description" content="Help educators time their lectures" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="header">
          <h1>Brainstation Lecture Timer</h1>
        </header>
        <Form submitHandler={submitHandler} />
        <section className="timer">
          {timer > 0 && (
            <>
              <section className="countdowns">
                <Countdown date={Date.now() + timer} ref={countDownRef}>
                  <TimerComplete message="Done!" />
                </Countdown>
                <Controls
                  pause={pauseClickHandler}
                  resume={resumeClickHandler}
                />
                <BreakCountdown
                  time={timer}
                  breakCountdownRef={breakCountDownRef}
                />
              </section>
              <SlideList slides={slideElements} />
            </>
          )}
        </section>
      </main>
    </div>
  );
}
