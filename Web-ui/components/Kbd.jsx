/* SPZ UI — Kbd / KbdGroup / Keycap */
function Kbd({ children, ...rest }) {
  return <span className="spz-kbd" {...rest}>{children}</span>;
}

function KbdGroup({ keys }) {
  return (
    <span className="spz-kbd-group">
      {keys.map((k, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="spz-kbd-plus">+</span>}
          <Kbd>{k}</Kbd>
        </React.Fragment>
      ))}
    </span>
  );
}

function Keycap({ children, pressed, ...rest }) {
  return (
    <span className="spz-keycap" data-pressed={pressed ? 'true' : undefined} {...rest}>
      {children}
    </span>
  );
}

Object.assign(window, { Kbd, KbdGroup, Keycap });
