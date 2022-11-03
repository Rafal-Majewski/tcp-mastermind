import {describe, test, expect} from "vitest";
import {Hello} from "../../src/hello";

describe("Hello", () => {
	test("should return hello world", () => {
		const hello = new Hello("Hello World");
		expect(hello.getMessage()).toBe("Hello World");
	});
});
