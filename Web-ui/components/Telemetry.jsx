/* SPZ UI — TelemetryTile + LapRow (motorsport flavor) */
function TelemetryTile({ label, value, unit, delta }) {
  return (
    <div style={{
      background: 'var(--spz-surface-1)',
      border: '1px solid var(--spz-line)',
      borderRadius: 6,
      padding: '12px 14px',
      display: 'flex', flexDirection: 'column', gap: 6,
      minWidth: 140,
    }}>
      <div className="spz-eyebrow">{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
        <span style={{ fontFamily: 'var(--spz-font-mono)', fontSize: 22, fontWeight: 600, color: 'var(--spz-fg-1)', fontVariantNumeric: 'tabular-nums' }}>{value}</span>
        {unit && <span style={{ fontFamily: 'var(--spz-font-mono)', fontSize: 11, color: 'var(--spz-fg-3)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{unit}</span>}
      </div>
      {delta !== undefined && (
        <div style={{
          fontFamily: 'var(--spz-font-mono)', fontSize: 11, fontVariantNumeric: 'tabular-nums',
          color: delta < 0 ? 'var(--spz-success)' : delta > 0 ? 'var(--spz-danger)' : 'var(--spz-fg-3)',
        }}>
          {delta > 0 ? '+' : ''}{delta}
        </div>
      )}
    </div>
  );
}

function LapRow({ lap, time, sectors, status }) {
  const statusColor = status === 'pb' ? 'var(--spz-purple)' : status === 'best' ? 'var(--spz-success)' : 'var(--spz-fg-2)';
  return (
    <tr>
      <td><span className="spz-mono" style={{ color: 'var(--spz-fg-3)' }}>L{String(lap).padStart(2, '0')}</span></td>
      <td><span className="spz-mono" style={{ color: statusColor, fontWeight: 600 }}>{time}</span></td>
      {sectors.map((s, i) => (
        <td key={i}><span className="spz-mono" style={{ color: s.fastest ? 'var(--spz-purple)' : 'var(--spz-fg-2)' }}>{s.t}</span></td>
      ))}
      <td>
        {status && (
          <Badge variant={status === 'pb' ? 'purple' : status === 'best' ? 'success' : undefined}>
            {status === 'pb' ? 'PB' : status}
          </Badge>
        )}
      </td>
    </tr>
  );
}

Object.assign(window, { TelemetryTile, LapRow });
