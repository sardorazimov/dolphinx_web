export const metadata = { title: "Defense Lab — DolphinX Docs" };

function CodeBlock({ title, code }: { title?: string; code: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 my-4">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.06] border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        {title && <span className="ml-2 text-xs text-white/40 font-mono">{title}</span>}
      </div>
      <pre className="bg-[#0a0a0a] p-5 text-sm font-mono text-[#00d4aa] overflow-x-auto leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function DefenseLabPage() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className="text-[#00d4aa] text-xs font-bold uppercase tracking-[0.2em] mb-2">Defense</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Defense Lab</h1>
        <p className="text-white/60 leading-relaxed">
          The defense-lab module provides real-time attack monitoring, IP tracking,
          and structured JSON logging for forensic analysis.
        </p>
      </div>

      {/* Analyzer */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Analyzer</h2>
        <p className="text-white/60 text-sm mb-3">
          The <code className="text-[#00d4aa] font-mono">analyzer</code> binary listens on a configurable port and captures
          all incoming connection metadata in real time. It displays live stats in the terminal
          and persists each attack session to a JSON log file.
        </p>
        <CodeBlock title="bash" code={`cd defense-lab/analyzer
cargo run --release`} />
      </section>

      {/* JSON Logging */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">JSON Attack Logging</h2>
        <p className="text-white/60 text-sm mb-3">
          Each captured attack session is written to a JSON file for offline analysis.
          The log includes source IPs, timestamps, connection counts, and request rates.
        </p>
        <CodeBlock title="example: attack_log.json" code={`{
  "session_id": "a3f2c1",
  "start_time": "2024-01-15T12:00:00Z",
  "end_time": "2024-01-15T12:05:00Z",
  "total_connections": 10000,
  "peak_rps": 1234,
  "source_ips": [
    { "ip": "192.168.1.1", "connections": 500 },
    { "ip": "10.0.0.5",    "connections": 300 }
  ]
}`} />
      </section>

      {/* IP Tracking */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">IP Tracking</h2>
        <p className="text-white/60 text-sm">
          The analyzer maintains an in-memory map of source IPs and their connection counts
          throughout a session. This allows you to identify the most active attack sources,
          spot distributed patterns, and export per-IP data as part of the JSON log for
          further correlation analysis.
        </p>
      </section>
    </div>
  );
}
