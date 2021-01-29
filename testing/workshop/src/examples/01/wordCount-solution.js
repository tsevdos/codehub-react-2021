//  Solution

export const wordCount = (str) => {
  if (typeof str !== "string") {
    throw new Error("Prepei na mas doseis string!");
  }

  return str.length > 1 ? str.split(" ").length : 0;
};
