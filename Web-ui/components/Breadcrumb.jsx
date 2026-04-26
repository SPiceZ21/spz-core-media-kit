/* SPZ UI — Breadcrumb */
function Breadcrumb({ items }) {
  return (
    <nav className="spz-breadcrumb">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="spz-breadcrumb-sep">/</span>}
          {i === items.length - 1
            ? <span className="spz-breadcrumb-current">{it}</span>
            : <a href="#">{it}</a>}
        </React.Fragment>
      ))}
    </nav>
  );
}

Object.assign(window, { Breadcrumb });
