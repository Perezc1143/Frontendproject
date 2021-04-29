var newArr= [];
var count = 0;
function gameTime(){
            $.get(`https://www.scorebat.com/video-api/v1/`, (data) => {
                var results = data // The data comes to us in JSON format, it must be parsed in to a object that we can use
                for(var i in results){
                    if(i >= 10){
                    newArr = newArr +  newArr.push[i]++; 
                    }
                    var match = results[i].title;
                    var team =results[i].side1.name;
                    var bothTeam = team + results[i].side2.name;
                    var competition = results[i].competition.name;
                    var matchDate = results[i].date;
                    var vid = results[i].embed;
                    var header = $("<h1></h1>" ,{class:"Match", text:match});
                    var div = $("<div></div>", {class:"matchType", text:competition});
                    var div3 = $( vid, {class:"embed", img:vid});
                    header.appendTo("#results");
                    div.appendTo("#results");
                    div3.appendTo("#results");
                };
            }
        );     
        
    };
gameTime();
                    
                    
function refreshPage(){
window.location.reload();
} 
                    
                    
                    
                    
                    
                    
                    

