export function formatMatchDate(iso: string, locale = 'el-GR') {
    const d = new Date(iso); // π.χ. "2023-08-18T19:30:00+00:00"

    return new Intl.DateTimeFormat(locale, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }).format(d);
}