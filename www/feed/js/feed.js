mainView.router.loadPage("feed/feed-list.html");

myApp.onPageInit('allgames', function ( ) { 
	var mainView = myApp.addView('.view-main');
	var animatePages = myApp.params.animatePages;
	document.getElementById("feed_link").href 	 	 = 'feed/feed-list.html'; 
	document.getElementById("games_link").href 	 	 = 'javascript:;'; 
	document.getElementById("redeem_link").href 	 	 = 'feed/redeem.html'; 
	document.getElementById("chat_link").href 	 	 = 'chat/chat.html'; 
	openAllGames( );
}); 
 

myApp.onPageInit('feed', function ( ) { 
	var mainView = myApp.addView('.view-main');
	var animatePages = myApp.params.animatePages;
	document.getElementById("feed_link").href 	 	 = 'javascript:;'; 
	document.getElementById("games_link").href 	 	 = 'feed/games.html'; 
	document.getElementById("redeem_link").href 	 	 = 'feed/redeem.html'; 
	document.getElementById("chat_link").href 	 	 = 'chat/chat.html'; 
	openPageFeed( );
});



myApp.onPageInit('allgames', function ( ) {
	var fruits = ('Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple').split(' ');
	var autocompleteDropdownSimple = myApp.autocomplete({
		input: '#autocomplete-dropdown',
		openIn: 'dropdown',
		source: function (autocomplete, query, render) {
			var results = [];
			if (query.length === 0) {
				render(results);
				return;
			}
			// Find matched items
			for (var i = 0; i < fruits.length; i++) {
				if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
			}
			// Render items by passing array with result items
			render(results);
		}
	});

});




function openAllGames( ){ 
	xhr.open("POST", serverHost + "rest_category.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(); 
	xhr.onreadystatechange = function() { 
		if (xhr.readyState == 4 && xhr.status == 200) {
			respData = JSON.parse(xhr.responseText); 

/*
			document.getElementById("userpic-allgames").src 	     = respData.userpic;
			document.getElementById("username_label-allgames").innerHTML = respData.username;
			document.getElementById("userpoint_label-allgames").innerHTML = respData.userpoint;

*/
			var i = 1; 
			var button_ps = '';  
			for( var eachrowcategory in respData.category ){  
				document.getElementById("cat"+i).innerHTML = '<a href="feed/allgames.html"><img class="cat-icon" src="'+respData.category[i].imageiconlogo+'" </a> '+ respData.category[i].name ;
				if(i == 6) break;				
				i++;
			} 
			
			var i = 0; 
			
			for( var eachrowrecent in respData.frequency ){    
				
	 			 document.getElementById("slideA"+ (i+1) ).innerHTML ='<div class="games-thumb"><img src="'+ respData.frequency[i].imageiconlogo +'"><a href="gamedetail.html?game_id='+respData.frequency[i].game_id +'" class="button-play-thumb">VIEW GAME</a><div class="clear"></div></div> ';
				if(i == 7) break;
				i++;
			}
			

			var i = 0; 
			 
			for( var eachrowtrend in respData.favorit ){    console.log(respData.favorit);
				document.getElementById("slideB"+  (i+1) ).innerHTML  = '<div class="games-thumb"><img src="'+ respData.favorit[i].imagelogo +'"><a href="gamedetail.html?game_id='+respData.favorit[i].game_id +'" class="button-play-thumb">VIEW GAME</a> <div class="clear"></div> </div>  ';	 
				if(i == 7) break;
				i++;
			} 
			


			var i = 0;
			var random_games_tr = '';

			for( var eachrowtrend in respData.random ){  
				 
				random_games_tr +='<div class="col-33 tablet-20">';
            			random_games_tr +='	<div class="games-thumb">';
              			random_games_tr +='		<img src="'+ respData.random[i].imglogo +'">';
              			random_games_tr +='		<a href="gamedetail.html?game_id='+ respData.random[i].id +'" class="button-play-thumb">VIEW GAME</a>'; 
              			random_games_tr +='		<div class="clear"></div>';
            			random_games_tr +='	</div>';
          			random_games_tr +='</div>';
				if(i == 34) break;
				i++;
			}
			document.getElementById("random_games_div").innerHTML = random_games_tr;
			 
		} 
	}
}



function openPageFeed( ){
	xhr.open("POST", serverHost + "rest_feed.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(); 
	xhr.onreadystatechange = function() { 
		if (xhr.readyState == 4 && xhr.status == 200) {
			respData = JSON.parse(xhr.responseText);
			 
			document.getElementById("userpic-feedlist").src 	 	 = respData.userpic;
			document.getElementById("username_label-feedlist").innerHTML = respData.sortname;
			document.getElementById("userpoint_label-feedlist").innerHTML = respData.userpoint;

			var i = 0; 
			var contentfeed = ''; 
			for( var eachrow in respData.feeds ){  
				 
				contentfeed += view_list_feed(respData.feeds[i].gusrimage, respData.feeds[i].usrname ,
						 respData.feeds[i].logo ,respData.feeds[i].score ,respData.feeds[i].gamename
						,respData.feeds[i].totcom,respData.feeds[i].update_date , respData.feeds[i].msg ,respData.feeds[i].rating ,respData.feeds[i].game_id 
					);
				i++;
			}
			 
			document.getElementById("contentfeed_div").innerHTML = contentfeed;
			
			 
		} 
	}
}


function changeDateFormat(inputDate){  // expects Y-m-d
	var str = '';
	var d = new Date(inputDate);
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	str += days[d.getDay()] +' at '+ d.getHours() +':' + d.getMinutes();    
	return str;
}


function view_list_feed(feed_userpic , feed_username , feed_gamelogo,feed_score ,feed_gamename ,feed_totcom , feed_played , feed_message , feed_rating , feed_game_id){
	
	 
	var newDate = changeDateFormat(feed_played);

	if(feed_totcom == '0' ) var tcomment = "0 Comment";
	else var tcomment =  feed_totcom +" Comments";
	
	var viewtext = '' 	
	+'<div class="card feed-card">' 
        +'<div class="card-header no-border">'

         +' <div class="feed-avatar"><img src="'+ feed_userpic +'" width="34" height="34"></div>'
         +' <div class="feed-name"><a>'+ feed_username +'</a> on <a>'+feed_gamename+'</a></div>'
         +' <div class="feed-date"> '+ newDate  +'</div>'
        +'</div>'
        +'<div class="card-content bg-babyblue">'
        +'  <div class="row">'
        +'    <div class="col-40 tablet-20"><img src="'+ feed_gamelogo +'" width="100%"></div>'
        +'    <div class="col-60 tablet-80 feed-content">'
        + feed_message
        +'      <h4>'+feed_score+'</h4>'
        +'      <a href="gamedetail.html?game_id='+feed_game_id+'"><div class="button-play">VIEW GAME </div></a>'
        +'    </div>'
        +'  </div>'
        +'</div>'
        +'<div class="card-footer no-border">'
        +'  <div class="bintang link">';
	for(var t=1; t<=5; t++)	{
		if(feed_rating >= t )
        		  viewtext +='   <i class="fa fa-star-o" aria-hidden="true">i</i>'  ;
		else
			  viewtext +='   <i class="fa fa-star-o" aria-hidden="true"></i>'  ;
	}

          viewtext +=' </div>'
         +' <a href="#" class="link"><i class="fa fa-share-alt" aria-hidden="true"></i> Share</a>'
         +' <a href="#" class="link">'+tcomment+'</a>'
        +'</div>'
     +' </div>';
	return viewtext;
}
