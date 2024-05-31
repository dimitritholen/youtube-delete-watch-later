//ALL THIS BECAUSE YOU SUCK AT MAKING
//SIMPLE FEATURES PEOPLE ACTUALLY WANT?!
let timer = 500; //Number of milliseconds

function delete_one(){
	document.querySelector("ytd-playlist-video-renderer").querySelector("button").click();
	setTimeout(()=>{
		document.querySelector("#items > ytd-menu-service-item-renderer:nth-child(3) > tp-yt-paper-item").click();
		
	}, timer);
}

function main(){
	setInterval(()=>{
		delete_one();
	}, (timer * 2)); //Twice the timeout used internally
		//to avoid conflicts
		//If your machine is too slow, adjust it higher
}

main();
