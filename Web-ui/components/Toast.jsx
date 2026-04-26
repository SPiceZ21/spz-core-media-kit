/* SPZ UI — Toast / ToastProvider / useToast */
const { useState: _useStateToast, useEffect: _useEffectToast, useCallback: _useCallbackToast, createContext: _createCtxToast, useContext: _useCtxToast } = React;

const ToastCtx = _createCtxToast(null);

function ToastProvider({ children }) {
  const [toasts, setToasts] = _useStateToast([]);

  const dismiss = _useCallbackToast((id) => {
    setToasts((arr) => arr.map((t) => (t.id === id ? { ...t, leaving: true } : t)));
    setTimeout(() => setToasts((arr) => arr.filter((t) => t.id !== id)), 220);
  }, []);

  const push = _useCallbackToast((toast) => {
    const id = Math.random().toString(36).slice(2);
    const dur = toast.duration ?? 4000;
    setToasts((arr) => [...arr, { id, ...toast, dur }]);
    if (dur > 0) setTimeout(() => dismiss(id), dur);
    return id;
  }, [dismiss]);

  return (
    <ToastCtx.Provider value={{ push, dismiss }}>
      {children}
      <div className="spz-toast-stack">
        {toasts.map((t) => <Toast key={t.id} {...t} onClose={() => dismiss(t.id)} />)}
      </div>
    </ToastCtx.Provider>
  );
}

function useToast() { return _useCtxToast(ToastCtx); }

function Toast({ variant = 'info', icon, eyebrow, title, description, mono, onClose, dur, leaving }) {
  const defaultIcon = {
    info: 'info', success: 'check-circle-2', warn: 'triangle-alert',
    danger: 'octagon-alert', brand: 'flag',
  }[variant] || 'info';
  _useEffectToast(() => { if (window.lucide) window.lucide.createIcons(); }, []);
  return (
    <div
      className="spz-toast"
      data-variant={variant}
      data-leaving={leaving ? 'true' : undefined}
      style={{ '--_dur': `${dur}ms` }}
    >
      <Icon name={icon || defaultIcon} size={16} />
      <div>
        {eyebrow && <div className="spz-toast-eyebrow">{eyebrow}</div>}
        {title && <p className="spz-toast-title">{title}</p>}
        {description && <p className="spz-toast-desc">{description}</p>}
        {mono && <div className="spz-toast-mono">{mono}</div>}
      </div>
      <button className="spz-toast-close" onClick={onClose} aria-label="Close">
        <Icon name="x" size={12} />
      </button>
      {dur > 0 && <span className="spz-toast-progress" />}
    </div>
  );
}

Object.assign(window, { ToastProvider, useToast, Toast });
