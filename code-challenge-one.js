var temp = 85;
var event = "casual";

var tempSuggest, eventSuggest;

if(event==="casual"){
  eventSuggest = "something comfy";
} else if (event==="semi-formal"){
  eventSuggest = "a polo or dress";
} else {
  eventSuggest = "a suit";
}

if(temp<54){
  tempSuggest = "a coat";
} else if (temp>70){
  tempSuggest = "no jacket";
} else {
  tempSuggest = "a jacket";
}

console.log("Since it is "+ temp+ " degrees and you are going to a " + event+ " event, you should wear "+ eventSuggest + " and " + tempSuggest+ ".");
