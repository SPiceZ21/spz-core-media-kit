/* SPZ UI — Alert */
function Alert({ variant = 'info', icon, title, children }) {
  const defaultIcon = {
    info: 'info', success: 'check-circle-2', warn: 'triangle-alert',
    danger: 'octagon-alert', brand: 'flag',
  }[variant] || 'info';
  return (
    <div className="spz-alert" data-variant={variant}>
      <Icon name={icon || defaultIcon} size={16} />
      <div>
        {title && <p className="spz-alert-title">{title}</p>}
        {children && <p className="spz-alert-desc">{children}</p>}
      </div>
    </div>
  );
}

Object.assign(window, { Alert });
