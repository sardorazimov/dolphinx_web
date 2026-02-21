export const metadata = { title: "Attack Tools — DolphinX Docs" };

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

const cliArgs = [
  { arg: "<host:port>", desc: "Target address and port (e.g. 127.0.0.1:8081)" },
  { arg: "<requests>", desc: "Total number of requests to send" },
  { arg: "<concurrency>", desc: "Number of concurrent connections" },
  { arg: "hold", desc: "(optional) Keep connections alive" },
  { arg: "infinite", desc: "(optional) Loop until manually stopped" },
  { arg: "--benchmark", desc: "Auto-determine max stable throughput" },
  { arg: "scan <target>", desc: "Run port scanner against target" },
  { arg: "recon <target>", desc: "Run recon mode against target" },
];

export default function AttackToolsPage() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className="text-[#00d4aa] text-xs font-bold uppercase tracking-[0.2em] mb-2">Reference</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Attack Tools</h1>
        <p className="text-white/60 leading-relaxed">
          The <code className="text-[#00d4aa] font-mono">dolphinx</code> binary bundles several network testing and recon tools.
        </p>
      </div>

      {/* Multi-stresser */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Multi-Stresser / dolphinx</h2>
        <p className="text-white/60 text-sm mb-3">
          A high-concurrency TCP/HTTP stress testing engine. Sends configurable bursts of connections
          to measure server resilience under load.
        </p>
        <CodeBlock title="usage" code={`dolphinx <host:port> <requests> <concurrency> [hold] [infinite]`} />

        <h3 className="text-white/80 font-semibold mt-6 mb-3">CLI Arguments</h3>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-white/[0.05] border-b border-white/10">
                <th className="text-left px-4 py-3 text-white/60 font-medium">Argument</th>
                <th className="text-left px-4 py-3 text-white/60 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              {cliArgs.map(({ arg, desc }) => (
                <tr key={arg} className="border-b border-white/[0.06] hover:bg-white/[0.02]">
                  <td className="px-4 py-3 font-mono text-[#00d4aa] whitespace-nowrap">{arg}</td>
                  <td className="px-4 py-3 text-white/60">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Port Scanner */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Port Scanner</h2>
        <p className="text-white/60 text-sm mb-3">
          Asynchronously scans thousands of ports using Rust{'\''}s async runtime.
          Fast, efficient, and outputs open ports with service hints.
        </p>
        <CodeBlock title="bash" code={`dolphinx scan <target>`} />
      </section>

      {/* Recon Mode */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Recon Mode</h2>
        <p className="text-white/60 text-sm mb-3">
          Collects network intelligence about a target — open ports, headers, response times,
          and basic fingerprinting.
        </p>
        <CodeBlock title="bash" code={`dolphinx recon <target>`} />
      </section>

      {/* Benchmark Mode */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-2">Benchmark Mode</h2>
        <p className="text-white/60 text-sm mb-3">
          Automatically ramps up concurrency to determine the maximum stable throughput
          of a target. Results are exported as a JSON report.
        </p>
        <CodeBlock title="bash" code={`dolphinx --benchmark <target>`} />
      </section>

      {/* Planned */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-3">Planned Tools</h2>
        <div className="flex flex-col gap-3">
          {[
            "Port scanner enhancements (service version detection)",
            "Slowloris simulator",
            "UDP flood mode",
            "HTTP/2 stress support",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/[0.08] bg-white/[0.02]">
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-500/70 border border-yellow-500/30 rounded px-1.5 py-0.5">
                Soon
              </span>
              <span className="text-white/50 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
