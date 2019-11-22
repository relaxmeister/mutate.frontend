import { EmailValidator } from "../EmailValidator";

const emailValidator = new EmailValidator();

test("validVersions", () => {

	// Create list of test cases
    expect(emailValidator.validate("hej@hej.hej")).toEqual(true);
    
	expect(emailValidator.validate("hotmale77@hotmail.se")).toEqual(true);
	
});

test("invalidVersions", () => {
	//const emailValidator = new EmailValidator();

	// Create list of test cases
	expect(emailValidator.validate("jojjethebest@hotmail.c")).toEqual(false);

	expect(emailValidator.validate("jojjethebesthotmail.com")).toEqual(false);
});