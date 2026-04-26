/* SPZ UI — DropdownMenu / MenuItem / MenuLabel / MenuDivider */
const { useState: _useStateDD, useRef: _useRefDD, useEffect: _useEffectDD } = React;

function DropdownMenu({ trigger, children }) {
  const [open, setOpen] = _useStateDD(false);
  const ref = _useRefDD(null);
  _useEffectDD(() => {
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);
  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <span onClick={() => setOpen((o) => !o)}>{trigger}</span>
      {open && (
        <div className="spz-popover" style={{ position: 'absolute', top: 'calc(100% + 4px)', right: 0, zIndex: 20 }}>
          {children}
        </div>
      )}
    </div>
  );
}

function MenuItem({ icon, shortcut, children, onClick }) {
  return (
    <div className="spz-menu-item" onClick={onClick}>
      {icon && <Icon name={icon} />}
      <span>{children}</span>
      {shortcut && <span className="spz-menu-item-shortcut">{shortcut}</span>}
    </div>
  );
}

function MenuLabel({ children }) {
  return <div className="spz-menu-label">{children}</div>;
}

function MenuDivider() {
  return <div className="spz-menu-divider" />;
}

Object.assign(window, { DropdownMenu, MenuItem, MenuLabel, MenuDivider });
