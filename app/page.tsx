import FeaturesSection from "../components/shared/feautures-section";
import HeroContent from "../components/shared/hero-content";
import { getLatestCommits, getRepoStats } from "@/lib/github";
import { Star, GitFork, AlertCircle, Eye } from "lucide-react";

const VIDEO_URL = "./hero.mp4";

export default async function HomePage() {
  const [stats, commits] = await Promise.all([
    getRepoStats(),
    getLatestCommits(5),
  ]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover backdrop-blur-xl opacity-30"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/50" />

      {/* Hero */}
      <HeroContent stars={stats.stars} />

      {/* Stats Bar */}
      <div className="relative z-10 border-y border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Star, label: "Stars", value: stats.stars },
            { icon: GitFork, label: "Forks", value: stats.forks },
            { icon: AlertCircle, label: "Issues", value: stats.issues },
            { icon: Eye, label: "Watchers", value: stats.watchers },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <Icon size={18} className="text-[#00d4aa]" />
              <span className="text-2xl font-bold text-white">{value.toLocaleString()}</span>
              <span className="text-xs font-medium text-white/50 uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <FeaturesSection />

      {/* Latest Activity */}
      <section className="relative z-10 bg-background px-6 md:px-[120px] py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-[13px] font-medium text-[#00d4aa] uppercase tracking-[0.2em] mb-2">Latest Activity</p>
          <h2 className="text-[28px] md:text-[36px] font-medium text-white mb-10">Recent Commits</h2>
          <div className="flex flex-col gap-3">
            {commits.length === 0 ? (
              <p className="text-white/40 text-sm">No commits available.</p>
            ) : commits.map((c) => (
              <a
                key={c.sha}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors group"
              >
                <code className="text-[#00d4aa] text-xs font-mono mt-0.5 shrink-0">{c.sha}</code>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white truncate group-hover:text-[#00d4aa] transition-colors">{c.message}</p>
                  <p className="text-xs text-white/40 mt-1">{c.author} · {c.date ? new Date(c.date).toLocaleDateString() : ''}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="relative z-10 bg-black/30 px-6 md:px-[120px] py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-[13px] font-medium text-[#00d4aa] uppercase tracking-[0.2em] mb-2">Quick Start</p>
          <h2 className="text-[28px] md:text-[36px] font-medium text-white mb-10">Get running in seconds</h2>
          <div className="rounded-xl overflow-hidden border border-white/10">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.06] border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-white/40 font-mono">bash</span>
            </div>
            <pre className="bg-[#0a0a0a] p-6 text-sm font-mono text-[#00d4aa] overflow-x-auto leading-relaxed">
              <code>{`# Clone the repository
git clone https://github.com/sardorazimov/dolphinx.git
cd dolphinx

# Build and run
cargo build --release

# Run stress test
./target/release/dolphinx 127.0.0.1:8081 10000 1000

# Run defense analyzer
cd defense-lab/analyzer && cargo run --release`}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}

