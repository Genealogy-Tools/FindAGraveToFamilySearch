{
	let active = document.activeElement;
	let activeRoot = active && active.shadowRoot;
	console.log('active',activeRoot,activeRoot.querySelectorAll('birch-standards-picker'))
	
	chrome.storage.sync.get(['field','autoName','fullName','memorial','autoBirth','firstName','lastName','suffix','dob','dod','pob','pod','bio','burial'], function (items){
		console.log('storage',items,items.field);
		switch(items.field){
			case 'autoName':
				activeRoot.querySelector('fs-tree-name-template').shadowRoot.querySelector('#roman_first').value = items['firstName'];
				activeRoot.querySelector('fs-tree-name-template').shadowRoot.querySelector('#roman_last').value = items['lastName'];
				activeRoot.querySelector('fs-tree-name-template').shadowRoot.querySelector('#roman_suffix').value = items['suffix'];
				break;
			case 'fullName':
			case 'firstName':
				activeRoot.querySelector('fs-tree-name-template').shadowRoot.querySelector('#roman_first').value = items[items.field];
				break;
			case 'lastName':
				activeRoot.querySelector('fs-tree-name-template').shadowRoot.querySelector('#roman_last').value = items[items.field];
				break;
			case 'suffix':
				activeRoot.querySelector('fs-tree-name-template').shadowRoot.querySelector('#roman_suffix').value = items[items.field];
				break;
			case 'dob':
				activeRoot.querySelectorAll('birch-standards-picker')[0].shadowRoot.querySelector('birch-typeahead').shadowRoot.querySelector('#input').value = items[items.field];
				break;
			case 'pob':
				activeRoot.querySelectorAll('birch-standards-picker')[1].shadowRoot.querySelector('birch-typeahead').shadowRoot.querySelector('#input').value = items[items.field];
				break;
			case 'autoBirth':
				activeRoot.querySelectorAll('birch-standards-picker')[0].shadowRoot.querySelector('birch-typeahead').shadowRoot.querySelector('#input').value = items['dob'];
				activeRoot.querySelectorAll('birch-standards-picker')[1].shadowRoot.querySelector('birch-typeahead').shadowRoot.querySelector('#input').value = items['pob'];
			case 'dod':
				activeRoot.querySelectorAll('birch-standards-picker')[0].shadowRoot.querySelector('birch-typeahead').shadowRoot.querySelector('#input').value = items[items.field];
				break;
			case 'pod':
				activeRoot.querySelectorAll('birch-standards-picker')[1].shadowRoot.querySelector('birch-typeahead').shadowRoot.querySelector('#input').value = items[items.field];
				break;
			case 'autoDeath':
				activeRoot.querySelectorAll('birch-standards-picker')[0].shadowRoot.querySelector('birch-typeahead').shadowRoot.querySelector('#input').value = items['dod'];
				activeRoot.querySelectorAll('birch-standards-picker')[1].shadowRoot.querySelector('birch-typeahead').shadowRoot.querySelector('#input').value = items['pod'];
				break;
			case 'burial':
				activeRoot.querySelectorAll('birch-standards-picker')[1].shadowRoot.querySelector('birch-typeahead').shadowRoot.querySelector('#input').value = items[items.field];
				break;
		}
		switch(items.field){
			case 'autoName':
			case 'fullName':
			case 'firstName':
			case 'lastName':
			case 'suffix':
			case 'dob':
			case 'pob':
			case 'autoBirth':
			case 'autoDeath':
			case 'dod':
			case 'pod':
			case 'burial':
				if(!activeRoot.querySelector('#reason').value.includes(items.memorial)){
					activeRoot.querySelector('#reason').value = `${activeRoot.querySelector('#reason').value}\nFind a grave #${items.memorial}`;
				}
				break;
		}
	})

//console.log('should paste',document.activeElement);
}