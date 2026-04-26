/* SPZ UI — Badge */
function Badge({ variant, children, ...rest }) {
  return (
    <span className="spz-badge" data-variant={variant} {...rest}>
      {children}
    </span>
  );
}

Object.assign(window, { Badge });
