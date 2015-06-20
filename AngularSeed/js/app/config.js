/* global define */

define({
	appName: 'PhoneBook',
	appDir: 'js/app',
	libDir: '/lib',
	routes: {
		'/contacts' : 'contact/Contact',
		'/contact/:id' : 'contact/ContactDetail',
		'/foobar': 'FooBar'
	},
	defaultRedirect: '/contacts'
});
