import * as actionTypes from '../actions';
const initialState = {
    persons: []
}

const reducer = (state= initialState,action) => {
   
    switch(action.type){       
        case actionTypes.ADD_PERSON:
        console.log("enter add Person");
            const newPerson = {
                id: Math.random(), 
                name: 'Praveen',
                age: Math.floor( Math.random() * 40 )
            }
            return Object.assign({},state,{persons: state.persons.concat(newPerson)})
        case actionTypes.REMOVE_PERSON:
            return Object.assign({},state,{persons: state.persons.filter((person) => {
                    return person.id !== action.id
            })})
    }
    return state;
}

export default reducer; 