export class EmailValidator {

	static EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	validate(email) {
		// if (superStatus !== ValidationStatus.OK) { //testade om ngt var tomt
		// 	return superStatus;
		// }

		if (EmailValidator.EMAIL_REGEX.test(email)) {
			return true;
		}
		return false;
	}

}
