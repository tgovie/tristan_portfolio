/** Minutes after midnight in US Eastern Time for the given date. */
export function easternMinutes(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);
  const h = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const m = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  return h * 60 + m;
}

export function easternClock(date = new Date()) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(date);
}

/** Whether `minutes` falls in [start, end), handling ranges that wrap past midnight. */
export function inRange(minutes: number, start: number, end: number) {
  return start <= end ? minutes >= start && minutes < end : minutes >= start || minutes < end;
}

/** CME equity futures are closed from Friday 17:00 to Sunday 18:00 ET. */
export function isWeekendClosed(date = new Date()) {
  const day = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", weekday: "short" }).format(date);
  const m = easternMinutes(date);
  return day === "Sat" || (day === "Fri" && m >= 17 * 60) || (day === "Sun" && m < 18 * 60);
}
