import { wordCount } from "../wordCount";

describe("wordCount function:", () => {
  it("must return 1 with the string YOLO", () => {
    const testStr = "YOLO.";

    expect(wordCount(testStr)).toBe(1);
  });

  it("must return 4 with the below string", () => {
    const testStr = "Thryle ton gipedon Olympiake!";

    expect(wordCount(testStr)).toBe(4);
  });

  it("must return 0 with an empty string", () => {
    const testStr = "";

    expect(wordCount(testStr)).toBe(0);
  });

  it("must throw new Error if argument is not a string", () => {
    const testStr = 123; // Not a string!!!!

    expect(() => wordCount(testStr)).toThrowError(
      "Prepei na mas doseis string!"
    );
  });
});
