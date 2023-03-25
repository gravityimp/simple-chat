export function getUserLastOnline(date: Date): string {
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / 60000);

  if (diffInMinutes < 1) {
    return "now";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} ${
      diffInMinutes === 1 ? "minute ago" : "minutes ago"
    }`;
  } else if (diffInMinutes < 600) {
    const diffInHours = Math.floor(diffInMinutes / 60);
    return `${diffInHours} ${diffInHours === 1 ? "hour ago" : "hours ago"}`;
  } else if (isSameDay(date, now)) {
    return "today";
  } else if (
    isSameDay(
      date,
      new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1)
    )
  ) {
    return "yesterday";
  } else {
    return date.toLocaleDateString(navigator.language, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
}

export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

export function getMessageTime(date: Date): string {
  if (isSameDay(date, new Date())) {
    return date.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  return date.toLocaleDateString(navigator.language, {
    month: "numeric",
    day: "numeric",
  });
}

/* TEST CASES

const lastOnline = new Date(); // current date and time
const lastOnline = new Date(); // current date and time
const lastOnline = new Date(Date.now() - (5 * 3600 * 1000)); // 5 hours ago

const lastOnline = new Date(); // current date and time
lastOnline.setHours(9, 0, 0, 0); // set the time to 9:00 AM

const lastOnline = new Date(); // current date and time
lastOnline.setDate(lastOnline.getDate() - 1); // set the date to yesterday
lastOnline.setHours(14, 30, 0, 0); // set the time to 2:30 PM

const lastOnline = new Date('2022-02-01T12:30:00Z'); // February 1, 2022 at 12:30:00 UTC
*/
