// Write your JS here test here
let hero = {
    name: 'Reza',
    heroic:true,
    inventory:[],
    health:2,
    weapon:{type:'sword',damage:2},
};

// let rest = obj1 => {
//     obj1.health = 10;
//     console.log('test rest')
//     //alert(`Health of hero is 10`);
//     //console.log(obj1.health)
//     return obj1
//   }
  function rest(obj) {
    obj.health = 10;
    console.log('test rest')
    //alert(`Heath of ${obj1.name} is ${obj1.health}`); //this is producing error.strange behaviour
    return obj
  }

  

//alert(`Health of hero is 10`);

   let rest2 = () => {
//     console.log('test button')
//     alert(`Heath of ${hero.name} is ${hero.health}`);
        console.log('test')
   }

  rest(hero); 
  console.log(hero.health)
  alert(`Heath of ${hero.name} is ${hero.health}`); //this is producing error.strange behaviour


  let pickUpItem = (obj,weaponObject) => {
      //console.log('test pickupItem')
      obj.inventory.push(weaponObject)
      //console.log(obj.inventory[1])
      console.log('test dagger')
      
  //return obj
  }

  //fruits.push("Kiwi")
  //pickUpItem(hero,"dagger");
  console.log(hero.inventory)

  let equipWeapon = obj => {
    //return obj
  
    }

    function displayStats() {
   
      }

//rest(hero);

//- Call `displayStats` when some data of the hero has changed to update the page.
//- Implement fighting an enemy. (how you do it is up to you!)
displayStats();
