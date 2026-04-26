/* SPZ UI — Avatar */
function Avatar({ initials, src, size = 28 }) {
  return (
    <span className="spz-avatar" style={{ width: size, height: size, fontSize: size <= 24 ? 10 : 11 }}>
      {src
        ? <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : initials}
    </span>
  );
}

Object.assign(window, { Avatar });
