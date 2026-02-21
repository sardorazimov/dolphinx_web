export const metadata = { title: "Getting Started — DolphinX Docs" };

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

export default function GettingStartedPage() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className="text-[#00d4aa] text-xs font-bold uppercase tracking-[0.2em] mb-2">Guide</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Getting Started</h1>
        <p className="text-white/60 leading-relaxed">
          Follow these steps to install and run DolphinX on your machine.
        </p>
      </div>

      {/* Prerequisites */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-3">Prerequisites</h2>
        <ul className="list-disc list-inside text-white/60 flex flex-col gap-2 text-sm">
          <li>Rust 1.70+ and Cargo installed (<a href="https://rustup.rs" target="_blank" rel="noopener noreferrer" className="text-[#00d4aa] hover:underline">rustup.rs</a>)</li>
          <li>Git</li>
          <li>Linux or macOS recommended (Windows supported via WSL)</li>
        </ul>
        <CodeBlock title="bash" code={`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env`} />
      </section>

      {/* Clone */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-3">Clone the Repository</h2>
        <CodeBlock title="bash" code={`git clone https://github.com/sardorazimov/dolphinx.git
cd dolphinx
cargo build --release`} />
      </section>

      {/* Attack Stresser Modes */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-3">Run the Attack Stresser</h2>
        <p className="text-white/60 text-sm mb-4">
          The <code className="text-[#00d4aa] font-mono">dolphinx</code> binary supports four stress-testing modes:
        </p>

        <h3 className="text-white/80 font-medium mb-1">Normal mode</h3>
        <CodeBlock title="bash" code={`./target/release/dolphinx 127.0.0.1:8081 10000 1000`} />

        <h3 className="text-white/80 font-medium mb-1 mt-6">Hold mode — keeps connections open</h3>
        <CodeBlock title="bash" code={`./target/release/dolphinx 127.0.0.1:8081 10000 1000 hold`} />

        <h3 className="text-white/80 font-medium mb-1 mt-6">Infinite mode — runs until manually stopped</h3>
        <CodeBlock title="bash" code={`./target/release/dolphinx 127.0.0.1:8081 10000 1000 infinite`} />

        <h3 className="text-white/80 font-medium mb-1 mt-6">Hold + Infinite — persistent connections, infinite loop</h3>
        <CodeBlock title="bash" code={`./target/release/dolphinx 127.0.0.1:8081 10000 1000 hold infinite`} />
      </section>

      {/* Defense Analyzer */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-3">Run the Defense Analyzer</h2>
        <p className="text-white/60 text-sm mb-3">
          The defense-lab analyzer monitors incoming connections and logs attack data to JSON.
        </p>
        <CodeBlock title="bash" code={`cd defense-lab/analyzer
cargo run --release`} />
      </section>
    </div>
  );
}
