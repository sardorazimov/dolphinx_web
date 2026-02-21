const REPO = 'sardorazimov/dolphinx'
const BASE = 'https://api.github.com/repos/' + REPO

function authHeaders(): HeadersInit {
  const token = process.env.GITHUB_TOKEN
  return token ? { Authorization: `Bearer ${token}` } : {}
}

export interface RepoStats {
  stars: number
  forks: number
  issues: number
  watchers: number
  description: string
}

export interface Commit {
  sha: string
  message: string
  author: string
  date: string
  url: string
}

export interface Release {
  tag: string
  name: string
  published: string
  url: string
  body: string
}

export async function getRepoStats(): Promise<RepoStats> {
  try {
    const res = await fetch(BASE, {
      headers: authHeaders(),
      next: { revalidate: 3600 },
    })
    if (!res.ok) throw new Error('Failed to fetch repo stats')
    const data = await res.json()
    return {
      stars: data.stargazers_count ?? 0,
      forks: data.forks_count ?? 0,
      issues: data.open_issues_count ?? 0,
      watchers: data.watchers_count ?? 0,
      description: data.description ?? '',
    }
  } catch {
    return { stars: 0, forks: 0, issues: 0, watchers: 0, description: '' }
  }
}

interface GitHubCommitAuthor {
  name?: string
  date?: string
  login?: string
}

interface GitHubCommitData {
  sha: string
  html_url: string
  author: GitHubCommitAuthor | null
  commit: {
    message: string
    author: GitHubCommitAuthor | null
  }
}

export async function getLatestCommits(limit = 10): Promise<Commit[]> {
  try {
    const res = await fetch(`${BASE}/commits?per_page=${limit}`, {
      headers: authHeaders(),
      next: { revalidate: 3600 },
    })
    if (!res.ok) throw new Error('Failed to fetch commits')
    const data: GitHubCommitData[] = await res.json()
    return data.map((c) => ({
      sha: c.sha.slice(0, 7),
      message: (c.commit.message ?? '').split('\n')[0],
      author: (c.author?.login ?? c.commit.author?.name) ?? 'unknown',
      date: c.commit.author?.date ?? '',
      url: c.html_url ?? '',
    }))
  } catch {
    return []
  }
}

export async function getLatestRelease(): Promise<Release | null> {
  try {
    const res = await fetch(`${BASE}/releases/latest`, {
      headers: authHeaders(),
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    const data = await res.json()
    return {
      tag: data.tag_name ?? '',
      name: data.name ?? '',
      published: data.published_at ?? '',
      url: data.html_url ?? '',
      body: data.body ?? '',
    }
  } catch {
    return null
  }
}

export async function getReadme(): Promise<string> {
  try {
    const res = await fetch(`${BASE}/readme`, {
      headers: { ...authHeaders(), Accept: 'application/vnd.github.raw' },
      next: { revalidate: 3600 },
    })
    if (!res.ok) return ''
    return await res.text()
  } catch {
    return ''
  }
}
