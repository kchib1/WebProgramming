function initializeGame() {
    player = {
        health: 100,
        hydration: 100,
        hunger: 0,
        day: 0,
        food: 5,
        water: 5,
        ammo: 10,
        reputation: 0,
        score: 0,
        x: 1,
        y: 0,
        action: " ",
        torch: 0
    };
    desc = "";
    campfire = {
        x: 1,
        y: 0,
        desc: "You wake up by your campfire. You're surrounded by wilderness on all sides. To your NORTH there is a decrepit trail that winds its way through the forest. Or you could always REST here to increase your resolve."
    };
    forest = {
        x: 1,
        y: 1,
        desc: "You find yourself in the forest, surrounded by thick trees and foilage. To your EAST the trail winds towards what looks to be a clearing. To your WEST you hear gunshots and hollering, but you're unsure what the commotion is about."
    };
    banditHideout = {
        x: 0,
        y: 1,
        desc: "You arrive at a bandit hindeout. There are men drinking, yelling, and even some fighting in the street. To your NORTH is the town of Agua Fria. To your EAST is the forest."
    };
    tradepost = {
        x: 2,
        y: 1,
        desc: "You stumble upon a trading outpost in what appears to be in the middle of nowhere. There is a nice looking lady selling her wares out of a wooden wagon. She shoots you a sweet smile. To your NORTH you can see a huge river run violently accross the landscape. To your WEST is the forest."
    };
    river = {
        x: 2,
        y: 2,
        desc: "You ride over to the large river. It looks deep and trecherous but you think you can cross it on the back of your trusty stead. To your NORTH is a quaint looking homestead. To your EAST there looks to be some sort of cave. To your SOUTH is the tradepost."
    };
    homestead = {
        x: 2,
        y: 3,
        desc: "You arrive at the quiet homestead. You can see ranch hands out working. A man who looks to be in charge sees you and seems to be riding over towards you. He gives you a look that you ought to leave. To your SOUTH is the river."
    };
    cave = {
        x: 3,
        y: 2,
        desc: "You find yourself at the mouth of a large looking cave. You peer in but the cave is pitch black. Without any torches you think it's best to come back once you have the right tools. To your WEST is the river."
    };
    town = {
        x: 0,
        y: 2,
        desc: "You ride up to the town of Agua Fria. The town is lively and full of people going about their day. On the main street you can see a saloon, a general store, and an inn. To your NORTH there's an old road that leads up to an old abandoned church. To the EAST there's a huge cliff that might give you a better view of what's below. To the SOUTH is the bandit hideout."
    };
    cliff = {
        x: 1,
        y: 2,
        desc: "You peer off the cliff and you see a beautiful view of the raging river carving its way through the earth. The view is gorgeous but that is about all there is up here. To your WEST is the town."
    };
    church = {
        x: 0,
        y: 3,
        desc: "As you make your way up the road you come upon the abandoned church. The wooden building is falling apart and has a very eerie feel. Behind the church is a graveyard that give you a chill down your spine. You decide you want to get out of here. To your SOUTH is the town."
    };
    
    xs = [1,1,0,0,0,1,2,2,2,3];
    ys = [0,1,1,2,3,2,1,2,3,2];
    desc = [
        "You wake up by your campfire. You're surrounded by wilderness on all sides. To your NORTH there is a decrepit trail that winds its way through the forest. Or you could always REST here to increase your resolve.",
        "You find yourself in the forest, surrounded by thick trees and foilage. To your EAST the trail winds towards what looks to be a clearing. To your WEST you hear gunshots and hollering, but you're unsure what the commotion is about.",
        "You arrive at a bandit hindeout. There are men drinking, yelling, and even some fighting in the street. To your NORTH is the town of Agua Fria. To your EAST is the forest.",
        "You ride up to the town of Agua Fria. The town is lively and full of people going about their day. On the main street you can see a saloon, a general store, and an inn. To your NORTH there's an old road that leads up to an old abandoned church. To the EAST there's a huge cliff that might give you a better view of what's below. To the SOUTH is the bandit hideout.",
        "As you make your way up the road you come upon the abandoned church. The wooden building is falling apart and has a very eerie feel. Behind the church is a graveyard that give you a chill down your spine. You decide you want to get out of here. To your SOUTH is the town.",
        "You peer off the cliff and you see a beautiful view of the raging river carving its way through the earth. The view is gorgeous but that is about all there is up here. To your WEST is the town.",
        "You stumble upon a trading outpost in what appears to be in the middle of nowhere. There is a nice looking lady selling her wares out of a wooden wagon. She shoots you a sweet smile. To your NORTH you can see a huge river run violently accross the landscape. To your WEST is the forest.",
        "You ride over to the large river. It looks deep and trecherous but you think you can cross it on the back of your trusty stead. To your NORTH is a quaint looking homestead. To your EAST there looks to be some sort of cave. To your SOUTH is the tradepost.",
        "You arrive at the quiet homestead. You can see ranch hands out working. A man who looks to be in charge sees you and seems to be riding over towards you. He gives you a look that you ought to leave. To your SOUTH is the river.",
        "You find yourself at the mouth of a large looking cave. You peer in but the cave is pitch black. Without any torches you think it's best to come back once you have the right tools. To your WEST is the river."
        ];
};

function updatePlayer() {
    document.getElementById("health").innerHTML = player.health;
    document.getElementById("hydration").innerHTML = player.hydration;
    document.getElementById("hunger").innerHTML = player.hunger;
    document.getElementById("days").innerHTML = player.day;
    document.getElementById("food").innerHTML = player.food;
    document.getElementById("water").innerHTML = player.water;
    document.getElementById("ammo").innerHTML = player.ammo;
    document.getElementById("rep").innerHTML = player.reputation;
    document.getElementById("score").innerHTML = player.score;
    document.getElementById("action").innerHTML = player.action;
    if(player.torch == 1) {
        document.getElementById("torch").innerHTML = "Torch";
    }
};

function consume() {
    player.food -= 1;
    player.water -= 1;
    if(player.hydration > 80) {
        player.hydration = 100;
    } else {
        player.hydration += 20;
    }
    if(player.hunger < 20) {
        player.hunger = 0;
    } else {
        player.hunger -= 20;
    }
    updatePlayer();
};

function updateStatus() {
    player.hydration -= 5;
    player.hunger += 5;
    player.day += 1;
    if(player.hydration <= 0 || player.hunger >= 100) {
        gameOver();
    }
}

function gameOver() {
    alert("Game Over!\nYou scored: " + player.score);
    initializeGame();
    updatePlayer();
}

function updateAction() {
    if(player.x == 1 && player.y == 0) {
        player.action = "Rest";
    }
    if(player.x == 1 && player.y == 1) {
        player.action = "Hunt";
    }
    if(player.x == 0 && player.y == 1) {
        player.action = "Duel";
    }
    if(player.x == 0 && player.y == 2) {
        player.action = "Buy Torch";
    }
    if(player.x == 2 && player.y == 1) {
        player.action = "Trade";
    }
    if(player.x == 2 && player.y == 2) {
        player.action = "Fill Canteen";
    }
    if(player.x == 3 && player.y == 2) {
        player.action = "Enter Cave";
    }
}

function action() {
    if(player.action === "Rest") {
        alert("You rest at your campsite and regain your health.");
        player.health = 100;
        updatePlayer();
    }
    if(player.action === "Hunt") {
        alert("You spend a day hunting and manage to gain 2 food.");
        player.food += 2;
        player.day++;
        player.score++;
        updatePlayer();
    }
    if(player.action === "Duel") {
        player.health -= 50;
        player.reputation += 20;
        if(player.health <= 0) {
            gameOver();
        } else {
            alert("As you approach the bandits one of them gets up and challenges you to a duel. You prove to be quicker than him, but just barely. You win the duel and gain reputation, however you spend the rest of the day tending to your wounds. You lose 50 health.");
        }
        player.day++;
        player.ammo -= 2;
        player.score += 10;
        updatePlayer();
    }
    if(player.action === "Buy Torch") {
        alert("You spend some lose change to buy a torch from the general store.");
        player.torch = 1;
        updatePlayer();
    }
    if(player.action === "Trade") {
        if(player.food > 0) {
            alert("You give the vendor one food and get 5 bullets in return.");
            player.food -= 1;
            player.ammo += 1;
            player.reputation++;
            updatePlayer();
        } else {
            alert("You don't have any food to trade with the vendor.");
        }
    }
    if(player.action === "Fill Canteen") {
        alert("You refill your canteen in the river.");
        player.water += 2;
        updatePlayer();
    }
    if(player.action === "Enter Cave") {
        if(player.torch == 0) {
            alert("You do not have any way to see in the cave so you decide to come back when you obtain a light source.");
        } else {
            alert("You enter the cave and spend the day looking around. You manage to find a locked strong box and manage to pry it open. You find a hidden treasure!");
            player.day++;
            player.score += 250;
            player.reputation += 25;
            updatePlayer();
        }
    }
}

function MoveNorth() {
    var i;
    for (i = 0; i < 10; i++){
        if((player.x == xs[i]) && ((player.y+1) == ys[i])) {
            player.y+=1;
            updateLocation();
            updateStatus();
            updatePlayer();
            break;
        }
    }
}

function MoveEast() {
    var i;
    for (i = 0; i < 10; i++){
        if(((player.x+1) == xs[i]) && (player.y == ys[i])) {
            player.x+=1;
            updateLocation();
            updateStatus();
            updatePlayer();
            break;
        }
    }
}

function MoveWest() {
    var i;
    for (i = 0; i < 10; i++){
        if(((player.x-1) == xs[i]) && (player.y == ys[i])) {
            player.x-=1;
            updateLocation();
            updateStatus();
            updatePlayer();
            break;
        }
    }
}

function MoveSouth() {
    var i;
    for (i = 0; i < 10; i++){
        if((player.x == xs[i]) && ((player.y-1) == ys[i])) {
            player.y-=1;
            updateLocation();
            updateStatus();
            updatePlayer();
            break;
        }
    }
}

function updateLocation() {
    var i;
    for (i = 0; i < 10; i++){
        if((player.x == xs[i]) && (player.y == ys[i])) {
            document.getElementById("text").innerHTML = desc[i];
        }
    }
    player.action = " ";
    updateAction();
}

function save() {
    playerString = JSON.stringify(player);
    localStorage.setItem('player', playerString);
}

function load() {
    playerString = localStorage.getItem('player');
    player = JSON.parse(playerString);
    console.log(player);
    updatePlayer();
    updateLocation();
    updateAction();
}

var countDownDate = new Date("April 27, 2020").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").innerHTML = days + "d ";
} ,1000);

initializeGame();
updatePlayer();
updateLocation();
updateAction();