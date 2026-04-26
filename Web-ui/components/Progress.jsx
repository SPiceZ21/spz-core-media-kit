/* SPZ UI — Progress */
function Progress({ value = 0 }) {
  return (
    <div className="spz-progress">
      <div className="spz-progress-fill" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}

Object.assign(window, { Progress });
