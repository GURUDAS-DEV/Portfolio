/* ─────────────────────────── types ─────────────────────────── */
type GithubUser = {
  name: string | null;
  login: string;
  bio: string | null;
  html_url: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
};

type GithubRepo = {
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  pushed_at: string;
};

type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type ContributionApiResponse = {
  total: Record<string, number>;
  contributions: ContributionDay[];
};

/* ─────────────────────────── constants ─────────────────────── */
const USERNAME = "GURUDAS-DEV";

const LEVEL_COLORS: Record<number, string> = {
  0: "#ebebeb",
  1: "#a8e6cf",
  2: "#66dff4",
  3: "#ffd93d",
  4: "#ff6b9d",
};

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

/* ─────────────────────────── helpers ────────────────────────── */
const fmt = (n: number) =>
  new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(n);

/** Groups an array of days into columns of 7, padding the first column with nulls. */
function buildWeekColumns(days: ContributionDay[]): (ContributionDay | null)[][] {
  if (!days.length) return [];
  const firstDate = new Date(days[0].date + "T00:00:00");
  const startPad = firstDate.getDay(); // 0=Sun
  const padded: (ContributionDay | null)[] = [...Array(startPad).fill(null), ...days];
  const weeks: (ContributionDay | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) weeks.push(padded.slice(i, i + 7));
  return weeks;
}

/** Returns the month label for a week column (only if a new month starts in that column). */
function getMonthLabel(week: (ContributionDay | null)[]): string | null {
  const firstReal = week.find((d) => d !== null);
  if (!firstReal) return null;
  const date = new Date(firstReal.date + "T00:00:00");
  if (date.getDate() <= 7) return MONTHS[date.getMonth()];
  return null;
}

/* ─────────────────────────── component ─────────────────────── */
const GithubContribution = async () => {
  let user: GithubUser | null = null;
  let repos: GithubRepo[] = [];
  let contributions: ContributionDay[] = [];
  let totalContributions = 0;

  try {
    const [userRes, reposRes, contribRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, { next: { revalidate: 1800 } }),
      fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`, {
        next: { revalidate: 1800 },
      }),
      fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=2026`, {
        next: { revalidate: 1800 },
      }),
    ]);

    if (userRes.ok) user = (await userRes.json()) as GithubUser;
    if (reposRes.ok) repos = (await reposRes.json()) as GithubRepo[];
    if (contribRes.ok) {
      const data = (await contribRes.json()) as ContributionApiResponse;
      contributions = data.contributions ?? [];
      totalContributions = (data.total as Record<string, number>)?.["2026"] ?? 0;
    }
  } catch {
    /* fail gracefully */
  }

  /* ── derived stats ── */
  const totalStars = repos.reduce((s, r) => s + r.stargazers_count, 0);
  const totalForks = repos.reduce((s, r) => s + r.forks_count, 0);
  const cutoff = new Date(); cutoff.setMonth(cutoff.getMonth() - 6);
  const activeRepos = repos.filter((r) => new Date(r.pushed_at) >= cutoff).length;

  const langMap = repos.reduce<Record<string, number>>((acc, r) => {
    if (!r.language) return acc;
    acc[r.language] = (acc[r.language] ?? 0) + 1;
    return acc;
  }, {});
  const topLangs = Object.entries(langMap).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const maxLangCount = topLangs[0]?.[1] ?? 1;

  const statCards = [
    { label: "Contributions 2026", value: fmt(totalContributions), accent: "#ffd93d" },
    { label: "Public Repos", value: fmt(user?.public_repos ?? repos.length), accent: "#a8e6cf" },
    { label: "Total Stars", value: fmt(totalStars), accent: "#ff6b9d" },
    { label: "Active (6M)", value: fmt(activeRepos), accent: "#66dff4" },
    { label: "Followers", value: fmt(user?.followers ?? 0), accent: "#ffd93d" },
    { label: "Total Forks", value: fmt(totalForks), accent: "#a8e6cf" },
  ];

  const weeks = buildWeekColumns(contributions);
  const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  /* ─── longest streak ── */
  let longestStreak = 0; let currentStreak = 0;
  for (const day of contributions) {
    if (day.count > 0) { currentStreak++; longestStreak = Math.max(longestStreak, currentStreak); }
    else { currentStreak = 0; }
  }

  return (
    <section className="w-full flex flex-col justify-center items-center font-space-grotesk">
      <div className="w-full flex flex-col gap-6 px-5 py-4 sm:gap-7 sm:px-8 sm:py-5 md:gap-8 md:px-12">
        {/* ── heading ── */}
        <div className="cta-overlay-shell w-fit">
          <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />
          <div className="nav-cta relative inline-flex w-fit rounded-lg border-[3px] border-black bg-[#ffd93d] px-4 py-2 text-3xl font-black leading-none text-black sm:px-5 sm:py-2.5 sm:text-4xl md:px-6 md:py-3 md:text-5xl">
            <h1>GITHUB CONTRIBUTIONS</h1>
          </div>
        </div>

        {/* ── outer card ── */}
        <div className="cta-overlay-shell cta-overlay-static w-full">
          <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />
          <div className="cta-overlay-front relative w-full rounded-lg border-[3px] border-black bg-white p-4 sm:p-6 md:p-8">

            {/* ── profile row ── */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-xl border-[3px] border-black bg-black" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={user?.avatar_url ?? `https://github.com/${USERNAME}.png`}
                    alt={`${USERNAME} avatar`}
                    width={88}
                    height={88}
                    className="relative h-20 w-20 rounded-xl border-[3px] border-black object-cover sm:h-22 sm:w-22"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-black sm:text-3xl leading-none">
                    {user?.name ?? USERNAME}
                  </h2>
                  <a
                    href={`https://github.com/${USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 block text-sm font-bold tracking-wide text-black/60 underline-offset-2 hover:underline"
                  >
                    @{USERNAME}
                  </a>
                  {user?.bio && (
                    <p className="mt-1.5 max-w-sm text-sm font-medium text-black/70 leading-snug">{user.bio}</p>
                  )}
                </div>
              </div>

              {/* inline badges (no broken img tags) */}
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "⭐ Stars", value: fmt(totalStars), bg: "#ffd93d" },
                  { label: "👥 Followers", value: fmt(user?.followers ?? 0), bg: "#a8e6cf" },
                  { label: "🔀 Forks", value: fmt(totalForks), bg: "#ff6b9d" },
                ].map((badge) => (
                  <div key={badge.label} className="relative">
                    <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-lg border-2 border-black bg-black" />
                    <div
                      className="relative rounded-lg border-2 border-black px-3 py-1.5 text-xs font-black text-black"
                      style={{ backgroundColor: badge.bg }}
                    >
                      {badge.label} · {badge.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── stat cards grid ── */}
            <div className="mt-6 grid grid-cols-3 gap-2.5 sm:grid-cols-6">
              {statCards.map((item) => (
                <div key={item.label} className="relative">
                  <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-lg border-2 border-black bg-black" />
                  <div
                    className="relative rounded-lg border-2 border-black px-3 py-2.5 text-center"
                    style={{ backgroundColor: item.accent }}
                  >
                    <p className="text-[10px] font-black uppercase tracking-widest text-black/60 leading-none">{item.label}</p>
                    <p className="mt-1 text-lg font-black text-black leading-none sm:text-xl">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── contribution heatmap ── */}
            <div className="mt-7 relative">
              <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-xl border-[3px] border-black bg-black" />
              <div className="relative rounded-xl border-[3px] border-black bg-[#fafafa] p-5 sm:p-7">

                {/* header */}
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-black uppercase tracking-widest text-black">
                      Contribution Activity 2026
                    </p>
                    <p className="mt-0.5 text-xs font-bold text-black/50">
                      {totalContributions} contributions this year
                    </p>
                  </div>
                  {/* legend */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Less</span>
                    {[0, 1, 2, 3, 4].map((lvl) => (
                      <div
                        key={lvl}
                        className="h-4 w-4 rounded border border-black/15"
                        style={{ backgroundColor: LEVEL_COLORS[lvl] }}
                      />
                    ))}
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40">More</span>
                  </div>
                </div>

                {weeks.length > 0 ? (
                  <div className="overflow-x-auto pb-1">
                    <div className="flex gap-1.5 w-fit">
                      {/* day-of-week labels */}
                      <div className="flex shrink-0 flex-col gap-1.5 pr-0.5 pt-6">
                        {DAY_LABELS.map((d, i) => (
                          <span
                            key={d}
                            className="h-4 w-7 text-[9px] font-black uppercase tracking-wide text-black/35 leading-none flex items-center justify-end"
                            style={{ visibility: i % 2 !== 0 ? "visible" : "hidden" }}
                          >
                            {d}
                          </span>
                        ))}
                      </div>

                      {/* week columns with month labels above */}
                      <div className="flex flex-col gap-1.5">
                        {/* month labels */}
                        <div className="flex gap-1.5">
                          {weeks.map((week, wi) => {
                            const label = getMonthLabel(week);
                            return (
                              <div
                                key={wi}
                                className="w-4 shrink-0 text-[9px] font-black text-black/50 leading-none whitespace-nowrap overflow-visible"
                              >
                                {label ?? ""}
                              </div>
                            );
                          })}
                        </div>

                        {/* cells grid */}
                        <div className="flex gap-1.5">
                          {weeks.map((week, wi) => (
                            <div key={wi} className="flex shrink-0 flex-col gap-1.5">
                              {week.map((day, di) => (
                                <div
                                  key={di}
                                  title={day ? `${day.date} · ${day.count} contribution${day.count !== 1 ? "s" : ""}` : ""}
                                  className="h-4 w-4 rounded-sm border border-black/10 transition-all duration-100 hover:scale-125 hover:shadow-sm hover:border-black/30 cursor-default"
                                  style={{
                                    backgroundColor: day ? LEVEL_COLORS[day.level] : "transparent",
                                    borderColor: day && day.level > 0 ? "rgba(0,0,0,0.20)" : "rgba(0,0,0,0.07)",
                                  }}
                                />
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-36 items-center justify-center rounded-lg border-2 border-dashed border-black/20 bg-white">
                    <p className="text-sm font-bold text-black/40">Contribution data loading…</p>
                  </div>
                )}

                {/* streak stats grid */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { label: "Longest Streak", value: `${longestStreak}`, unit: "days", bg: "#ffd93d" },
                    { label: "Current Streak", value: `${currentStreak}`, unit: "days", bg: "#a8e6cf" },
                    { label: "Active Days",    value: `${contributions.filter((d) => d.count > 0).length}`, unit: "days", bg: "#ff6b9d" },
                    { label: "Peak Day",       value: `${Math.max(...contributions.map((d) => d.count), 0)}`, unit: "commits", bg: "#66dff4" },
                  ].map((stat) => (
                    <div key={stat.label} className="relative">
                      <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-xl border-2 border-black bg-black" />
                      <div
                        className="relative rounded-xl border-2 border-black px-4 py-3"
                        style={{ backgroundColor: stat.bg }}
                      >
                        <p className="text-[9px] font-black uppercase tracking-widest text-black/50 leading-none">{stat.label}</p>
                        <p className="mt-1.5 text-2xl font-black text-black leading-none">{stat.value}</p>
                        <p className="mt-0.5 text-[10px] font-bold text-black/50">{stat.unit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── language stats ── */}
        

            {/* ── github stats cards (external svgs) ── */}


          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubContribution;
