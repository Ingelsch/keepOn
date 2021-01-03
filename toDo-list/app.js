let input = prompt("What would you like to do?")
const todos = ['Eggs', 'Milk'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log("****************");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("****************");
    } else if (input === 'new') {
        const newTodo = prompt('Enter new todo');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (input === 'delete' && input === 'd') {
        const indeks = parseInt(prompt('Ok, enter the index to delete'));
        if (!Number.isNaN(indeks)) {
            const deleted = todos.splice(indeks, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index');
        }

    }
    input = prompt("What would you like to do?")
}
console.log('Ok, you quit');