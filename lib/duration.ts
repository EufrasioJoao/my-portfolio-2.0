type Locale = "en" | "pt";

export function getDuration(
  startDate: Date,
  endDate: Date | null,
  locale: Locale
): string {
  const end = endDate ?? new Date();
  const totalMonths =
    (end.getFullYear() - startDate.getFullYear()) * 12 +
    (end.getMonth() - startDate.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const jsLocale = locale === "pt" ? "pt-BR" : "en-US";

  const startLabel = startDate.toLocaleDateString(jsLocale, {
    month: "short",
    year: "numeric",
  });
  const endLabel = endDate
    ? endDate.toLocaleDateString(jsLocale, { month: "short", year: "numeric" })
    : locale === "pt"
      ? "Presente"
      : "Present";

  let duration = "";
  if (years > 0 && months > 0) {
    duration =
      locale === "pt"
        ? `${years} ano${years > 1 ? "s" : ""} ${months} ${months === 1 ? "mês" : "meses"}`
        : `${years} yr${years > 1 ? "s" : ""} ${months} mo`;
  } else if (years > 0) {
    duration =
      locale === "pt"
        ? `${years} ano${years > 1 ? "s" : ""}`
        : `${years} yr${years > 1 ? "s" : ""}`;
  } else {
    duration =
      locale === "pt"
        ? `${months} ${months === 1 ? "mês" : "meses"}`
        : `${months} mo`;
  }

  return `${startLabel} – ${endLabel} · ${duration}`;
}

export const jobs = [
  {
    company: "Forge",
    startDate: new Date(2024, 10), // Nov 2024
    endDate: new Date(2025, 7),
  },
  {
    company: "Flexibilidade Lda",
    startDate: new Date(2025, 7), // Aug 2025
    endDate: new Date(2026, 5), // Jun 2025
  },
  {
    company: "FlexTech",
    startDate: new Date(2024, 2), // Mar 2024
    endDate: new Date(2024, 9),   // Oct 2024
  },
];
