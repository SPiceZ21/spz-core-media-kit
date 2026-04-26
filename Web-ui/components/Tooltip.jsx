/* SPZ UI — Tooltip (hover) */
const { useState: _useStateTT } = React;

function Tooltip({ label, children }) {
  const [show, setShow] = _useStateTT(false);
  return (
    <span
      style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <span
          className="spz-tooltip"
          style={{ bottom: 'calc(100% + 6px)', left: '50%', transform: 'translateX(-50%)' }}
        >
          {label}
        </span>
      )}
    </span>
  );
}

Object.assign(window, { Tooltip });
