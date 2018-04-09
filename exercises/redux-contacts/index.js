const redux = require("redux");

const initialState = {
    contacts: []
}

const reducer = (state = initialState , action) => {
    switch (action.type) {
        case "ADD_CONTACT": 
            return {
                contacts: [...state.contacts, action.contact]
            }
        case "REMOVE_CONTACT":
            return {
                contacts: state.contacts.filter(contact => contact.name !== action.name)
            }
        case "EDIT_CONTACT":
            return{
                contacts: state.contacts.map(contact =>{

                if(contact.name === action.contact.name) {
                    if (action.contact.age){
                        contact.age = action.contact.age;
                    }
                
                    
                }
               }
        default:
            return state
    }
}

const store = redux.createStore(reducer);
store.subscribe(() => console.log(store.getState()));

const addContact = (contact) => {
    store.dispatch({
        type: "ADD_CONTACT",
        contact
    })
}

const removeContact = name => {
    store.dispatch({
        type: "REMOVE_CONTACT",
        name
    })
}
const editContact = (contact) => {
    store.dispatch({
        type: "EDIT_CONTACT",
        name, age
    })
}

addContact({
    name: "fsdks",
    age: 341
});
removeContact({
    name: "fsdks"
})