const stateDefault = {
  burger: {
    salad: 1,
    cheese: 1,
    beef: 1,
  },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
  total: 85,
};

export const BurgerReudcer = (state = stateDefault, action) =>{
  switch(action.type){
    case 'CHANGE_QUANTITY':{
      let {topping, changeNumber} = action;
      if(changeNumber === -1 && state.burger[topping] === 1){
        alert(`Không thể giảm số lượng ''${topping}'' nữa, burger sẽ không ngon đâu!`);
        break;
      }
      let updateBurger = state.burger;
      updateBurger[topping]+=changeNumber;
      state.burger = updateBurger;
      state.total += state.menu[topping]*changeNumber; 
      break;
    }
    default:{
      return state;
    }
  }
  return {...state};
}


