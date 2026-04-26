/* SPZ UI — Card + CardHeader */
function Card({ armed, children, style, className = '', ...rest }) {
  return (
    <div
      className={`spz-card ${className}`}
      data-armed={armed ? 'true' : undefined}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}

function CardHeader({ title, desc, children }) {
  return (
    <div className="spz-card-header">
      <div>
        {title && <h3 className="spz-card-title">{title}</h3>}
        {desc && <div className="spz-card-desc">{desc}</div>}
      </div>
      {children}
    </div>
  );
}

Object.assign(window, { Card, CardHeader });
