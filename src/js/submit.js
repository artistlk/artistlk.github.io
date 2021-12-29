//Submit, Forms JS

//URL Vars

const queryString = window.location.search;
const URLParams = new URLSearchParams(queryString);
const redir_from = URLParams.get('rfrom');
const gift = URLParams.get('gift');

//URL Vars

if(redir_from == "test" && gift == "1234test") {
    alert("URLParams are correctly setup!");
}else {
    alert("URLParams Unexistant!")
}