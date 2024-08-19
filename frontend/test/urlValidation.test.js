import isValidHttpUrl from "../src/components/input/urlValidation";

jest.mock("../src/components/input/urlValidation", () => jest.fn());

describe("isValidHttpUrl", () => {
    it("fails if value is not recognised as url", () => {

        expect(isValidHttpUrl("www.google.com")).toBe(false);

        expect(isValidHttpUrl("http://www.google.com")).toBe(true);

    });
});