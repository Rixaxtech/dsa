// Create an array called contacts. The contacts array should contain three objects, one for each contact stored in our book. 

let contacts = [
    {
    firstName: "John",
    lastName: "Doe",
    phone: "(512) 355-0453",
    email: "johndoe@email.com"
}, {
    firstName: "Jane",
    lastName: "Doe",
    phone: "(312) 641-2203",
    email: "janedoe@email.com"
},{
    firstName: "Suzie",
    lastName: "Smith",
    phone: "(415) 604-4219",
    email: "suziesmith@email.com"
}
];

// Let’s create a listContacts function to list our contacts. This function should loop through the contacts array and log the first and last name for each contact to the console, e.g. "John Doe". Then call the listContacts function.

let listContacts = function() {
    for (let i = 0; i < contacts.length; i++){
        console.log(contacts[i].firstName + ' ' + contacts[i].lastName);
    }
}

listContacts(contacts);
