// Write your JS here test here
//hero object declared
let hero = {
    name: 'Reza',
    heroic:true,
    inventory:[],
    //inventory:[{type:'gun',damage:20}], //check 
    health:10,
    weapon:{type:'sword',damage:2},
};
//monster object declared

let monster = {
  name: 'Monster',
  health:20,
  weapon:{type:'fire',damage:2},
};

let dagger = {type:'dagger',damage:2} // this is object of dagger as variable

//console.log('inventory at the start, number of element is:', hero.inventory.length) //starting sts
//console.log("inventory 1st element is:", hero.inventory[0])
//console.log("weapon is:", hero.weapon)

  function rest(obj) {
    obj.health = 10; //reassign health property value to be 10
    //console.log('test rest') //testing if this function being called
    if(obj.health === 10){alert(`Health of ${obj.name} is ${obj.health}`);} //creating popup but there's a bug when the reset button pressed the pop up keep going out, producing time out error in the test
    //console.log(obj.health)
    displayStats();
    return obj //returning the argument back which is an object
  }

  //rest(hero); //calling rest() for test

  let pickUpItem = (obj,weaponObject) => {
      //console.log('test pickupItem')
      obj.inventory.push(weaponObject);
 
      //console.log('test dagger') //checking if the function being called
      //console.log('now inventory first element is:', hero.inventory) //checking what is the first element in inventory array
      //console.log('inventory after click:', obj.inventory.length) //checking if dagger after click adding more array element
      displayStats(); //calling the displaystats to update
  }
  //pickUpItem(hero,dagger); //testing by calling pickUpItem() for test

  let equipWeapon = obj => {
    if(obj.inventory.length >= 1){
      obj.weapon=obj.inventory[0];
    } 
    // if(obj.inventory.length === 0){
    //   return obj.weapon
    //   } else {
    //     obj.weapon=obj.inventory[0]; //changing the weapon properties to the first element ov inventory
    //   }
    //obj.inventory=obj.inventory.push()
    //console.log('after equipWeapon inventory 1st element is:', hero.inventory[0]) //checking what is the first element in inventory array
    //console.log('weapon property now is:', obj.inventory.length) //checking if dagger after click adding more array element
    //console.log('weapon property now is:', obj.inventory) //checking if dagger after click adding more array element
    displayStats(); //calling the displaystats to update
    }
  //equipWeapon(hero) //testing by calling equipWeapon() for test
  
    function displayStats() {
      document.getElementById("nameText").innerHTML = hero.name;
      document.getElementById("healthText").innerHTML = hero.health;
      document.getElementById("weaponText").innerHTML = hero.weapon.type;
      document.getElementById("damageText").innerHTML = hero.weapon.damage;
      document.getElementById("monsterHealthText").innerHTML = monster.health;

      }

//rest(hero);
//this is a function to change the hero name
function submitName() {
  const inputField = document.getElementById('name')
  const nameInput = inputField.value
  document.getElementById("nameText").innerHTML = nameInput;
}

//this is a function to remove enemy
function hideEnemy(){
    const element = document.getElementById("monster");
    element.classList.add("hide");
};
//this is a function to remove weapon but still don't work
function hide(){
  const element = document.getElementsById("dagger");
  element.classList.add("hide");
};

// the function of fighting while the hero attack can reduce monster health, but he can rest
function attackMonster(){

  monster.health=monster.health - hero.weapon.damage
  hero.health=hero.health - monster.weapon.damage

 //console.log(monster.health)
 //console.log(hero.weapon.damage)
 //return monster.health
 if (monster.health<=0){hideEnemy()};
 if (hero.health<=0){

  const element = document.getElementById("game");
  element.classList.add("hide");

}
 displayStats();
}








//calling display stats for the first time to get the initial status
displayStats();

 