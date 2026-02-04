'use client';

import { useState } from 'react';

interface Trade {
  id: string;
  date: string;
  symbol: string;
  type: 'LONG' | 'SHORT';
  entryPrice: number;
  exitPrice: number;
  quantity: number;
  pnl: number;
  notes?: string;
}

export default function Trading() {
  const [trades, setTrades] = useState<Trade[]>([
    {
      id: '1',
      date: new Date(2026, 1, 3).toISOString().split('T')[0],
      symbol: 'NQ',
      type: 'LONG',
      entryPrice: 20500,
      exitPrice: 20580,
      quantity: 1,
      pnl: 800,
      notes: 'Breakout trade on technical support',
    },
  ]);

  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    symbol: 'NQ',
    type: 'LONG' as const,
    entryPrice: '',
    exitPrice: '',
    quantity: '1',
    notes: '',
  });

  const handleAddTrade = (e: React.FormEvent) => {
    e.preventDefault();
    
    const entry = parseFloat(formData.entryPrice);
    const exit = parseFloat(formData.exitPrice);
    const qty = parseInt(formData.quantity);

    if (!entry || !exit || !qty) return;

    const priceDiff = formData.type === 'LONG' ? exit - entry : entry - exit;
    const pnl = Math.round(priceDiff * qty * 100) / 100;

    const newTrade: Trade = {
      id: Date.now().toString(),
      date: formData.date,
      symbol: formData.symbol,
      type: formData.type,
      entryPrice: entry,
      exitPrice: exit,
      quantity: qty,
      pnl,
      notes: formData.notes,
    };

    setTrades([newTrade, ...trades]);
    setFormData({
      date: new Date().toISOString().split('T')[0],
      symbol: 'NQ',
      type: 'LONG',
      entryPrice: '',
      exitPrice: '',
      quantity: '1',
      notes: '',
    });
  };

  const deleteTrade = (id: string) => {
    setTrades(trades.filter(t => t.id !== id));
  };

  const totalPnL = trades.reduce((sum, trade) => sum + trade.pnl, 0);
  const winRate = trades.length > 0 ? Math.round((trades.filter(t => t.pnl > 0).length / trades.length) * 100) : 0;

  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 12, background: 'linear-gradient(120deg, #0066cc, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Trading Journal</h1>
      <p style={{ fontSize: '1.1rem', opacity: 0.85, marginBottom: 40 }}>
        Daily trade tracking and performance metrics for quantitative trading strategies (NQ, ES futures).
      </p>

      {/* Stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 20,
          marginBottom: 40,
        }}
      >
        <StatCard label="Total P&L" value={`$${totalPnL.toFixed(2)}`} positive={totalPnL >= 0} />
        <StatCard label="Total Trades" value={trades.length.toString()} />
        <StatCard label="Win Rate" value={`${winRate}%`} />
        <StatCard label="Avg Win" value={`$${trades.length > 0 ? (trades.filter(t => t.pnl > 0).reduce((sum, t) => sum + t.pnl, 0) / Math.max(1, trades.filter(t => t.pnl > 0).length)).toFixed(2) : 0}`} />
      </div>

      {/* Add Trade Form */}
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.02)',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: 40,
          border: '1px solid rgba(0,0,0,0.08)',
        }}
      >
        <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '0 0 24px 0' }}>Add New Trade</h2>
        <form
          onSubmit={handleAddTrade}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 16,
          }}
        >
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)' }}
          />
          <input
            type="text"
            placeholder="Symbol (NQ, ES)"
            value={formData.symbol}
            onChange={(e) => setFormData({ ...formData, symbol: e.target.value.toUpperCase() })}
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)' }}
          />
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value as 'LONG' | 'SHORT' })}
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)' }}
          >
            <option value="LONG">LONG</option>
            <option value="SHORT">SHORT</option>
          </select>
          <input
            type="number"
            placeholder="Entry Price"
            value={formData.entryPrice}
            onChange={(e) => setFormData({ ...formData, entryPrice: e.target.value })}
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)' }}
          />
          <input
            type="number"
            placeholder="Exit Price"
            value={formData.exitPrice}
            onChange={(e) => setFormData({ ...formData, exitPrice: e.target.value })}
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)' }}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)' }}
          />
          <input
            type="text"
            placeholder="Notes (optional)"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            style={{ padding: '10px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)', gridColumn: 'span 2' }}
          />
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#0066cc',
              color: 'white',
              fontWeight: 600,
              cursor: 'pointer',
              gridColumn: 'span 1',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#7c3aed';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 102, 204, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#0066cc';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Add Trade
          </button>
        </form>
      </div>

      {/* Trades Table */}
      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.95rem',
          }}
        >
          <thead>
            <tr style={{ borderBottom: '2px solid rgba(0,0,0,0.1)' }}>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 700 }}>Date</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 700 }}>Symbol</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 700 }}>Type</th>
              <th style={{ padding: '12px', textAlign: 'right', fontWeight: 700 }}>Entry</th>
              <th style={{ padding: '12px', textAlign: 'right', fontWeight: 700 }}>Exit</th>
              <th style={{ padding: '12px', textAlign: 'right', fontWeight: 700 }}>Qty</th>
              <th style={{ padding: '12px', textAlign: 'right', fontWeight: 700 }}>P&L</th>
              <th style={{ padding: '12px', textAlign: 'left', fontWeight: 700 }}>Notes</th>
              <th style={{ padding: '12px', textAlign: 'center', fontWeight: 700 }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((trade) => (
              <tr key={trade.id} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <td style={{ padding: '12px' }}>{trade.date}</td>
                <td style={{ padding: '12px', fontWeight: 600 }}>{trade.symbol}</td>
                <td
                  style={{
                    padding: '12px',
                    fontWeight: 600,
                    color: trade.type === 'LONG' ? '#059669' : '#dc2626',
                  }}
                >
                  {trade.type}
                </td>
                <td style={{ padding: '12px', textAlign: 'right' }}>${trade.entryPrice.toFixed(2)}</td>
                <td style={{ padding: '12px', textAlign: 'right' }}>${trade.exitPrice.toFixed(2)}</td>
                <td style={{ padding: '12px', textAlign: 'right' }}>{trade.quantity}</td>
                <td
                  style={{
                    padding: '12px',
                    textAlign: 'right',
                    fontWeight: 600,
                    color: trade.pnl > 0 ? '#059669' : trade.pnl < 0 ? '#dc2626' : '#000',
                  }}
                >
                  ${trade.pnl.toFixed(2)}
                </td>
                <td style={{ padding: '12px', fontSize: '0.9rem', opacity: 0.7 }}>{trade.notes}</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>
                  <button
                    onClick={() => deleteTrade(trade.id)}
                    style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      border: 'none',
                      backgroundColor: '#fee2e2',
                      color: '#dc2626',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {trades.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', opacity: 0.6 }}>
          <p>No trades recorded yet. Add your first trade above!</p>
        </div>
      )}
    </main>
  );
}

function StatCard({ label, value, positive }: { label: string; value: string; positive?: boolean }) {
  return (
    <div
      style={{
        padding: '20px',
        borderRadius: '12px',
        backgroundColor: 'rgba(0,0,0,0.02)',
        border: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      <p style={{ margin: '0 0 8px 0', fontSize: '0.9rem', fontWeight: 500, opacity: 0.7 }}>{label}</p>
      <p
        style={{
          margin: 0,
          fontSize: '1.5rem',
          fontWeight: 700,
          color: positive === true ? '#059669' : positive === false ? '#dc2626' : '#000',
        }}
      >
        {value}
      </p>
    </div>
  );
}
