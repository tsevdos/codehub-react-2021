// Spec
// count how many words contains a string

export const wordCount = (str) => {
  if (typeof str !== "string") {
    throw new Error("Prepei na mas doseis string!");
  }

  return str === "" ? 0 : str.split(" ").length;
};
