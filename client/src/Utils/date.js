const date = new Date();
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export const getDay = () => {
  const day = date.getDate().toString();
  if (days.includes(day)) return `0${day}`;
  if (day) return day;
};
export const getMonth = months[date.getMonth()];
export const getYear = date.getFullYear();
