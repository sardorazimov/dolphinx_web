import { Suspense } from "react";
import { getLatestCommits, getLatestRelease } from "@/lib/github";
import { Tag, GitCommit, Calendar, User } from "lucide-react";

export const metadata = { title: "Changelog — DolphinX" };

async function ReleaseSection() {
  const release = await getLatestRelease();
  if (!release) return null;

  return (
    <div className="p-6 rounded-xl border border-[#00d4aa]/30 bg-[#00d4aa]/5 mb-10">
      <div className="flex items-center gap-2 mb-3">
        <Tag size={16} className="text-[#00d4aa]" />
        <span className="text-[#00d4aa] font-mono font-bold">{release.tag}</span>
        <span className="text-white/40 text-xs ml-2">
          {release.published ? new Date(release.published).toLocaleDateString() : ""}
        </span>
      </div>
      {release.name && <h3 className="text-white font-semibold mb-2">{release.name}</h3>}
      {release.body && (
        <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line line-clamp-6">
          {release.body}
        </p>
      )}
      <a
        href={release.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-xs text-[#00d4aa] hover:underline"
      >
        View on GitHub →
      </a>
    </div>
  );
}

async function CommitsSection() {
  const commits = await getLatestCommits(20);

  if (commits.length === 0) {
    return <p className="text-white/40 text-sm">No commits available.</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {commits.map((c) => (
        <a
          key={c.sha}
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all group"
        >
          <GitCommit size={15} className="text-[#00d4aa] mt-0.5 shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <p className="text-sm text-white group-hover:text-[#00d4aa] transition-colors truncate flex-1">
                {c.message}
              </p>
              <code className="text-[#00d4aa]/60 text-xs font-mono shrink-0">{c.sha}</code>
            </div>
            <div className="flex items-center gap-3 mt-1.5 text-xs text-white/40">
              <span className="flex items-center gap-1"><User size={11} />{c.author}</span>
              {c.date && (
                <span className="flex items-center gap-1">
                  <Calendar size={11} />
                  {new Date(c.date).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="flex flex-col gap-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="h-16 rounded-xl border border-white/10 bg-white/[0.02] animate-pulse" />
      ))}
    </div>
  );
}

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background px-6 md:px-[120px] py-24">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#00d4aa] text-xs font-bold uppercase tracking-[0.2em] mb-2">History</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Changelog</h1>
        <p className="text-white/60 mb-10">Latest releases and commit history from the DolphinX repository.</p>

        <Suspense fallback={<div className="h-24 rounded-xl border border-white/10 animate-pulse mb-10" />}>
          <ReleaseSection />
        </Suspense>

        <h2 className="text-xl font-semibold text-white mb-5">Recent Commits</h2>
        <Suspense fallback={<LoadingFallback />}>
          <CommitsSection />
        </Suspense>
      </div>
    </div>
  );
}
