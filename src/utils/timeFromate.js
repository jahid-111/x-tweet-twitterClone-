export const getTime = (dateString) => {
  if (!dateString) return "Unknown"; // Handle missing dates
  const date = new Date(dateString);
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return date.toLocaleString("en-US", options); // Example: January 29, 2025, 12:45 AM
};
