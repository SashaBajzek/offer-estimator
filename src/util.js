export function toNumber(string) {
  if (typeof string === "number") {
    return string;
  } else {
    // Remove the extra characters
    if (string.charAt(0) === "$") {
      string = string.slice(1);
    }
    const number = parseFloat(string, 10)
      ? parseFloat(string.replace(/,/g, ""), 10)
      : 0;
    return number;
  }
}

// export function toNumber(string) {
//   if (typeof string === "number") {
//     return string;
//   } else {
//     // Remove the extra characters
//     const number = string.replace(/\D/g, "");
//     return Number(number);
//   }
// }

function toStringAddCommas(number) {
  return "$" + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const currencyFormatter = input => {
  let formattedInput = input;
  if (typeof input === "string") {
    // convert to number first to remove extra character inputs
    formattedInput = toNumber(formattedInput);
  }
  formattedInput = toStringAddCommas(formattedInput);
  return formattedInput;
};
