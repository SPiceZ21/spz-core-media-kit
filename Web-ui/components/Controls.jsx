/* SPZ UI — Switch / Checkbox / RadioGroup */
const { useState: _useStateCtrl } = React;

function Switch({ checked, onChange, ...rest }) {
  const [_on, _set] = _useStateCtrl(!!checked);
  const on = checked !== undefined ? checked : _on;
  const toggle = () => {
    const next = !on;
    if (checked === undefined) _set(next);
    onChange?.(next);
  };
  return (
    <button
      role="switch"
      aria-checked={on}
      className="spz-switch"
      data-on={on ? 'true' : 'false'}
      onClick={toggle}
      {...rest}
    />
  );
}

function Checkbox({ checked, onChange, ...rest }) {
  const [_on, _set] = _useStateCtrl(!!checked);
  const on = checked !== undefined ? checked : _on;
  const toggle = () => {
    const next = !on;
    if (checked === undefined) _set(next);
    onChange?.(next);
  };
  return (
    <span
      role="checkbox"
      aria-checked={on}
      className="spz-checkbox"
      data-on={on}
      onClick={toggle}
      {...rest}
    />
  );
}

function RadioGroup({ value, onChange, options }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {options.map((opt) => (
        <label key={opt.value} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 13, color: 'var(--spz-fg-2)' }}>
          <span className="spz-radio" data-on={value === opt.value} onClick={() => onChange?.(opt.value)} />
          {opt.label}
        </label>
      ))}
    </div>
  );
}

Object.assign(window, { Switch, Checkbox, RadioGroup });
