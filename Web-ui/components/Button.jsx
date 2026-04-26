/* SPZ UI — Button */
function Button({ variant = 'default', size = 'default', icon, iconRight, children, ...rest }) {
  return (
    <button className="spz-btn" data-variant={variant} data-size={size} {...rest}>
      {icon && <Icon name={icon} />}
      {children}
      {iconRight && <Icon name={iconRight} />}
    </button>
  );
}

Object.assign(window, { Button });
