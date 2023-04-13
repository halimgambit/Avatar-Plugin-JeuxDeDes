exports.action = function(data, callback){

	let client = setClient(data);

	info("JeuxDedes from:", data.client, "To:", client);
	jeuxDeDes (data, client);
	callback();
}

function jeuxDeDes (data, client) {
	
	function nb_aleatoire(min, max){
	var nb = min + (max-min+1)*Math.random();
	return Math.floor(nb);
	}
	let des = nb_aleatoire(1, 6);
	nb_aleatoire()
	Avatar.speak("Je lance les dés .... vous obtenez." + des, data.client, function(){
	Avatar.Speech.end(data.client);
	});
}


function setClient (data) {
	var client = data.client;
    if (data.action.room)
	client = (data.action.room != 'current') ? data.action.room : (Avatar.currentRoom) ? Avatar.currentRoom : Config.default.client;
	if (data.action.setRoom)
	client = data.action.setRoom;
	return client;
}