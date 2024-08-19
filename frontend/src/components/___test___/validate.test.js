import isValidHttpUrl from "../input/urlValidation";

test('should fail this is not a url', () => {
    expect(isValidHttpUrl("this is just text")).toBe(false);
})

test('should fail this url do not contain a protocol', () => {
    expect(isValidHttpUrl("www.google.com")).toBe(false);
})

test('should pass proper url', () => {
    expect(isValidHttpUrl("https://www.linkedin.com/in/shaked-levy/")).toBe(true);
})