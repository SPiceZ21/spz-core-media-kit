/* SPZ UI — Slider */
const { useState: _useStateSlider, useRef: _useRefSlider } = React;

function Slider({ value, onChange, min = 0, max = 100, step = 1 }) {
  const [_v, _set] = _useStateSlider(value ?? min);
  const v = value !== undefined ? value : _v;
  const trackRef = _useRefSlider(null);

  const setFromEvent = (e) => {
    const r = trackRef.current.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    let next = min + ratio * (max - min);
    next = Math.round(next / step) * step;
    next = Math.max(min, Math.min(max, next));
    if (value === undefined) _set(next);
    onChange?.(next);
  };

  const onDown = (e) => {
    setFromEvent(e);
    const move = (ev) => setFromEvent(ev);
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  const pct = ((v - min) / (max - min)) * 100;
  return (
    <div className="spz-slider" ref={trackRef} onMouseDown={onDown}>
      <div className="spz-slider-track">
        <div className="spz-slider-fill" style={{ width: `${pct}%` }} />
      </div>
      <div className="spz-slider-thumb" style={{ left: `${pct}%` }} />
    </div>
  );
}

Object.assign(window, { Slider });
