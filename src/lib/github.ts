type ContributionDay = {
  date: string;
  level: number;
};

const dayLength = 86_400_000;

export async function getContributionCalendar(username: string) {
  try {
    // Read the same calendar GitHub serves to signed-out profile visitors.
    const response = await fetch(`https://github.com/users/${encodeURIComponent(username)}/contributions`, {
      headers: { 'Accept-Language': 'en-US' },
      signal: AbortSignal.timeout(4000),
    });
    if (!response.ok) return null;

    const html = await response.text();
    const days: ContributionDay[] = [];
    for (const [cell] of html.matchAll(/<td\b[^>]*>/gi)) {
      const date = cell.match(/\sdata-date="(\d{4}-\d{2}-\d{2})"/)?.[1];
      const level = cell.match(/\sdata-level="([0-4])"/)?.[1];
      if (date && level !== undefined && Number.isFinite(Date.parse(date))) {
        days.push({ date, level: Number(level) });
      }
    }

    days.sort((a, b) => a.date.localeCompare(b.date));
    const firstDay = Date.parse(days[0]?.date ?? '');
    const isFullYear = days.length >= 365 && days.length <= 371;
    if (!isFullYear || days.some(({ date }, index) => Date.parse(date) !== firstDay + index * dayLength)) {
      return null;
    }

    const count = html.match(/([\d,]+)\s+contributions?\s+in\s+the\s+last\s+year/i)?.[1];
    return { days, total: count ? Number(count.replaceAll(',', '')) : null };
  } catch {
    return null;
  }
}
