const character = {
    name: 'Snortleblat',
    image: 'snortleblat.webp',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    attacked(){
        this.health -= 20;
        if (this.health <= 0) {
            alert("Character Died");    
        }
    },
    levelUp(){
        this.level += 1;    
    }
};        

document.querySelector("#name").textContent = character.name;
document.querySelector("#image").setAttribute("src", character.image);
document.querySelector("#image").setAttribute("alt", character.name);

function renderCharacter() {
    document.querySelector("#class").textContent = character.class;
    document.querySelector("#level").textContent = character.level;
    document.querySelector("#health").textContent = character.health;
}

renderCharacter();

document.querySelector("#attack").addEventListener("click", function() {
   character.attacked();
   renderCharacter();
});

document.querySelector("#levelUp").addEventListener("click", function() {
    character.levelUp();
    renderCharacter();
});