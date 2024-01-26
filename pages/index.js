import Head from "next/head";
import { useRef, useState } from "react";
import Countdown from "react-countdown";
import BreakCountdown from "../components/BreakCountdown/BreakCountdown";
import Form from "../components/Form/Form";
import LectureSlide from "../components/LectureSlide/LectureSlide";
import SlideList from "../components/SlideList/SlideList";
import TimerComplete from "../components/TimerComplete/TimerComplete";

export default function Home() {
  const countDownRef = useRef();
  const breakCountDownRef = useRef();
  const [timer, setTimer] = useState(0);
  const [slides, setSlides] = useState(0);
  const [heavySlides, setHeavySlides] = useState(0);
  const [heavySlideOptions, setHeavySlideOptions] = useState([]);

  function submitHandler(e) {
    e.preventDefault();

    const time = e.target.time.value;
    const slides = e.target.slides.value;
    // const heavySlides = e.target.heavySlides.value;

    const milliseconds = time * 60000;

    setTimer(milliseconds);
    setSlides(slides);
    // setHeavySlides(heavySlides);
  }

  const slideElements = [];

  for (let i = 0; i < slides; i++) {
    // const splitHeavySlides = heavySlides
    //   .split(" ")
    //   .map((heavySlide) => +heavySlide);

    slideElements.push(
      <LectureSlide
        key={i}
        slide={i}
        // isHeavy={splitHeavySlides.includes(i + 1)}
      />
    );
  }

  return (
    <div>
      <Head>
        <title>Brainstation Lecture Timer</title>
        <meta name="description" content="Help educators time their lectures" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="main">
        {!timer && (
          <Form
            submitHandler={submitHandler}
            setHeavySlideOptions={setHeavySlideOptions}
            heavySlideOptions={heavySlideOptions}
          />
        )}
        <section className="timer">
          {timer > 0 && (
            <>
              <section className="countdowns">
                <Countdown
                  date={Date.now() + timer}
                  ref={countDownRef}
                  zeroPadTime={2}
                  daysInHours={true}
                  overtime={true}
                >
                  <TimerComplete message="Done!" />
                </Countdown>
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
