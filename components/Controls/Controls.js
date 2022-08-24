const Controls = (props) => {
  return (
    <section className="controls">
      <button className="timer__btn" onClick={props.pause}>
        Pause
      </button>
      <button className="timer__btn" onClick={props.resume}>
        Resume
      </button>
    </section>
  );
};

export default Controls;
