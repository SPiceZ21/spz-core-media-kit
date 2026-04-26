/* SPZ UI — Live dot indicator */
function Live({ color, children = 'Live' }) {
  return <span className="spz-live" data-color={color}>{children}</span>;
}

Object.assign(window, { Live });
