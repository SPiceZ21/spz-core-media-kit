/* SPZ UI — Tabs + Segment */
const { useState: _useStateTabs } = React;

function Tabs({ value, onChange, items }) {
  const [_v, _set] = _useStateTabs(items[0]?.value);
  const v = value ?? _v;
  return (
    <div className="spz-tabs">
      {items.map((it) => (
        <button
          key={it.value}
          className="spz-tab"
          data-active={v === it.value ? 'true' : 'false'}
          onClick={() => { if (value === undefined) _set(it.value); onChange?.(it.value); }}
        >
          {it.label}
        </button>
      ))}
    </div>
  );
}

function Segment({ value, onChange, items }) {
  const [_v, _set] = _useStateTabs(items[0]?.value);
  const v = value ?? _v;
  return (
    <div className="spz-segment">
      {items.map((it) => (
        <button
          key={it.value}
          className="spz-segment-item"
          data-active={v === it.value}
          onClick={() => { if (value === undefined) _set(it.value); onChange?.(it.value); }}
        >
          {it.label}
        </button>
      ))}
    </div>
  );
}

Object.assign(window, { Tabs, Segment });
