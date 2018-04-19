import uuidv4 from 'uuid/v4';
 export const tasks = {
    todos: [
        {
            id: uuidv4(),
            text: "Learn JS"
        },
        {
            id: uuidv4(),
            text: "Learn React.JS"
        },
        {
            id: uuidv4(),
            text: "Learn Agular"
        },
        {
            id: uuidv4(),
            text: "Learn Node.JS"
        }
    ],
    nextId : uuidv4()
}