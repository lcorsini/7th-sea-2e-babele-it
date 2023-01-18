Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: '7th-Sea-2e-babele-it',
			lang: 'it',
			dir: 'compendium'
		});
		
		document.getElementById("logo").src="/modules/7th-sea-2e-babele-it/img/fvtt-anvil-it.png";
		
	}
});
