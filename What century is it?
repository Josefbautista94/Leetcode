function whatCentury(year) {
  let century = Math.ceil(year / 100);
  let suffix = "th";
  if (century % 100 === 11 || century % 100 === 12 || century % 100 === 13) {
    suffix = "th";
  } else if (century % 10 === 1) {
    suffix = "st";
  } else if (century % 10 === 2) {
    suffix = "nd";
  } else if (century % 10 === 3) {
    suffix = "rd";
  }
  return century + suffix;
}
