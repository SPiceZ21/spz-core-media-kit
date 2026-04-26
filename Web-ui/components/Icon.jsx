/* SPZ UI — Icon (Lucide via global) */
const { useRef, useEffect } = React;

function Icon({ name, size = 14, strokeWidth = 1.75, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      window.lucide.createIcons({ nameAttr: 'data-lucide', icons: window.lucide.icons, attrs: {} });
    }
  }, [name]);
  return (
    <i
      ref={ref}
      data-lucide={name}
      style={{ width: size, height: size, display: 'inline-flex', strokeWidth }}
      {...rest}
    />
  );
}

Object.assign(window, { Icon });
