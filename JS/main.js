window.onload = function(){
	 Array.prototype.random = function (length) {
       return this[Math.floor((Math.random()*length))];
 }
 let teams = ['Luke, Im your computer.', 'Hello world!','Make your computer great again.'];
  let chosen_team = teams.random(teams.length);
   let a = document.getElementsByTagName('h1')[0];
   a.innerHTML = a.innerHTML.replace(/hello/,chosen_team);
};

