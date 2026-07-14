"use client";

import { useEffect, useState } from "react";

export function LiveClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());

    const timeout = setTimeout(update, 0);
    const interval = setInterval(update, 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  if (!now) return null;

  const dateStr = now.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Asia/Ho_Chi_Minh",
  });

  const timeStr = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Ho_Chi_Minh",
  });

  return (
    <div>
      <p className="text-foreground/50 text-sm">{dateStr}</p>
      <p className="text-foreground font-mono text-2xl font-semibold tracking-wide">
        {timeStr}
      </p>
    </div>
  );
}
