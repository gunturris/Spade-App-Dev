
myApp.onPageInit('gamedetail', function (page) {  
	var mainView = myApp.addView('.view-main');
	var animatePages = myApp.params.animatePages;
	document.getElementById("feed_link").href 	 	 = 'feed/feed-list.html'; 
	document.getElementById("games_link").href 	 	 = 'feed/games.html'; 
	document.getElementById("redeem_link").href 	 	 = 'feed/redeem.html'; 
	document.getElementById("chat_link").href 	 	 = 'chat/chat.html'; 
	parse_data_detail_game( page.query.game_id )
}); 

function parse_data_detail_game( game_id ){
	xhr.open("POST", serverHost + "rest_gmdetail.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("gmid="+game_id); 
	xhr.onreadystatechange = function() { 
		respData = JSON.parse(xhr.responseText); 
 
		document.getElementById("game_detail" ).innerHTML = respData.gamedetail.desc;
		document.getElementById("game_review" ).innerHTML = respData.game_review[0].review;
		document.getElementById("game_player" ).innerHTML = respData.game_player[0].player;
		document.getElementById("game_rating" ).innerHTML = respData.game_rating[0].rating;
		document.getElementById("game_title" ).innerHTML = respData.gamedetail.name;
		document.getElementById("game_category" ).innerHTML = respData.gamedetail.category;
		document.getElementById("game_logo" ).src = respData.gamedetail.logo;
		console.log(respData.recom_game);
		var i = 0;
		var recent_games = '';

		for( var eachrowtrend in respData.recom_game ){  
		 
			recent_games +=' <div class="games-thumb">';
    			recent_games +='	<div class="games-thumb">';
      			recent_games +='		<img src="'+ respData.recom_game[i].logo +'" />';
      			recent_games +='		<a href="#" class="button-play-thumb" onclick="javascript:parse_data_detail_game('+ respData.recom_game[i].id +')">VIEW GAME</a>'; 
      			recent_games +='		<div class="clear"></div>';
    			recent_games +='	</div>';
  			recent_games +='</div>';
			document.getElementById("recentgame"+(i+1)).innerHTML = recent_games ;
			recent_games = '';
			if(i == 4) break;
			i++;
		}
		
	}
}

