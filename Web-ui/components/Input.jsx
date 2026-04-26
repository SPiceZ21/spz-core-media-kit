/* SPZ UI — Input / Textarea / Select / Field */
function Input(props) { return <input className="spz-input" {...props} />; }
function Textarea(props) { return <textarea className="spz-textarea" {...props} />; }
function Select({ children, ...rest }) {
  return <select className="spz-select" {...rest}>{children}</select>;
}
function Field({ label, helper, children }) {
  return (
    <div className="spz-input-group">
      {label && <label className="spz-label">{label}</label>}
      {children}
      {helper && <div className="spz-helper">{helper}</div>}
    </div>
  );
}

Object.assign(window, { Input, Textarea, Select, Field });
