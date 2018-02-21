class NameFormatter {

	invertName(name) {

		if(name === undefined){
			throw('Error')
		}
		if (name === '') {
			return '';
		}

		if (name !== '') {

		name = name.trim();
		let honor = ''; // Initialize honor as a falsy value to keep the name construction consistent
		
			let honorIndex = name.indexOf('.');
			if(honorIndex > 0){
				// if there is a title we leave it at the front
				honor = name.slice(0, honorIndex + 1);
				name = name.slice(honorIndex + 2); // + 2 to remove the space after honor title
			}
			// Setting each variable to make it easier
			name = name.split(' ')
			let firstName = name[0];
			let lastName = name[1];
			let result = ''; // Our starting point in the reconstruction

			// Handling honor without first or lastname
			if(!firstName && !lastName && honor){
				return '';
			}

			// Now our name can be reconstructed following the same structure every time
			if(honor){
				result += honor + ' ';
			}
			if(lastName){
				result += lastName + ', '; // There is no honorary + last-name only so mwahaha, can always add an extra check is there is :o)
			}
			if(firstName){
				result += firstName;
			}

			return result;
		}
	}
}

module.exports = NameFormatter;