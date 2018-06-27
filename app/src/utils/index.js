
export const mapContactsToId = (contacts) => {
	const contactsMap = {};
	contacts.forEach((contact) => {
		contact.name = parseName(contact.name);
		contact.phone = parsePhone(contact.phone);
		contactsMap[contact.id] = contact;
	});
	return contactsMap;
}

export const parseName = (name) => name.replace(/[^A-Z]+/ig, ' ');

export const parsePhone = (phone) => phone.replace(/[^0-9]+/ig, '');
