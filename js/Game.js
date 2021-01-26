class Game {
  constructor() { }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  start() {
    if (gameState === 0) {
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play() {
    form.hide()
    text("Game Start!", 110, 100)
    Player.getplayerinfo()
    if (allplayers !== undefined) {
      var displaypos = 130

      for (var plr in allplayers) {
         if(plr === 'player' + player.index)
           fill('red')
          else
           fill('black')
         
        displaypos += 20
        text(allplayers[plr].name + ": " + allplayers[plr].distance, 110, displaypos)
      }
      
    }
    if(keyIsDown(UP_ARROW) && player.index !==null){
      player.distance += 30
      player.update()
    }
  }
}
