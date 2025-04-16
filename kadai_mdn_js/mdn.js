const today = new Date();
const formatted = today.toLocaleDateString("ja-JP", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
console.log(formatted);