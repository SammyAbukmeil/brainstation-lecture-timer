import Head from "next/head";
import { useState, useRef } from "react";
import Countdown from "react-countdown";
import Form from "../components/Form/Form";
import LectureSlide from "../components/LectureSlide/LectureSlide";
import SlideList from "../components/SlideList/SlideList";
import TimerComplete from "../components/TimerComplete/TimerComplete";

export default function Home() {
  const countDownRef = useRef();
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
  };

  const resumeClickHandler = () => {
    countDownRef.current.start();
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
              <Countdown date={Date.now() + timer} ref={countDownRef}>
                <TimerComplete />
              </Countdown>
              <button className="timer__btn" onClick={pauseClickHandler}>
                Pause
              </button>
              <button className="timer__btn" onClick={resumeClickHandler}>
                Resume
              </button>
              <SlideList slides={slideElements} />
            </>
          )}
        </section>
      </main>
    </div>
  );
}
