interface DataType{
    title:string;
    markdown:string;
    code:string;
}

export let Data:DataType[]=[
    {
        title:"Lets start by initializing the script tag!",
        markdown:"we will create an array of todos and a variable input to bind to create a new todo",
        code:[
            "",
            "<script>",
            "\tlet todos = [];",
            "\tlet newTodo = '';",
            "</script>",
        ].join("\n")
    },{
        title:"Lets create a method addTodo to add some todo",
        markdown:"It will seamlessly add todo to our array!",
        code:[
            "",
            "function addTodo() {",
            "\tif (newTodo.trim() !== '') {",
            "\t\ttodos = [...todos, { id: Date.now(), text: newTodo, completed: false }];",
            "\t\tnewTodo = '';",
            "\t}",
            "}",
            "",
        ].join("\n")
    },{
        title:"Lets create a method to remove a todo and lets call it removeTodo",
        markdown:"It will take the id and ensure that the right todo has been removed from the todo array!",
        code:[
            "",
            "function removeTodo(id) {",
            "\ttodos = todos.filter(todo => todo.id !== id);",
            "}",
            "",
        ].join("\n")
    },{
        title:"Lets make a toggle checkpoint to tell if that particular work or todo has been completed or not!",
        markdown:"we will create a method called toggleCompleted with an id parameter to tell which todo has been completed by us!",
        code:[
            "",
            "function toggleComplete(id) {",
            "\ttodos = todos.map(todo =>",
            "\t\ttodo.id === id ? { ...todo, completed: !todo.completed } : todo",
            "\t);",
            "}",
        ].join("\n")
    },{
        title:"This is our overall script!",
        markdown:"Take a good look at it, I have left some bugs in it for you to work at it",
        code:[
            "",
            "<script>",
            "\tlet todos = [];",
            "\tlet newTodo = '';",
            "",
            "\tfunction addTodo() {",
            "\t\tif (newTodo.trim() !== '') {",
            "\t\t\ttodos = [...todos, { id: Date.now(), text: newTodo, completed: false }];",
            "\t\t\tnewTodo = '';",
            "\t\t}",
            "\t}",
            "",
            "\tfunction removeTodo(id) {",
            "\t\ttodos = todos.filter(todo => todo.id !== id);",
            "\t}",
            "",
            "\tfunction toggleComplete(id) {",
            "\t\ttodos = todos.map(todo =>",
            "\t\t\ttodo.id === id ? { ...todo, completed: !todo.completed } : todo",
            "\t\t);",
            "\t}",
            "</script>",
            "",
        ].join("\n")
    },{
        title:"Creating the frontend",
        markdown:"Lets create a good layout for displaying and adding todos.",
        code:[
            "",
            "<frame>",
            "<page>",
            "\t<actionBar title=\"Svelte Native Todo App\" />",
            "",
            "\t<stackLayout>",
            "\t\t<textField bind:value={newTodo} hint=\"Add a new todo\" />",
            "",
            "\t\t<button text=\"Add Todo\" on:tap={addTodo} />",
            "",
            "\t\t<listView items={todos}>",
            "\t\t\t<ng-template let:todo=\"item\">",
            "\t\t\t\t<gridLayout columns=\"auto, *, auto\" padding=\"10\" margin=\"5\" borderWidth=\"1\" borderColor=\"gray\">",
            "\t\t\t\t\t<checkBox checked={todo.completed} on:tap={() => toggleComplete(todo.id)} />",
            "\t\t\t\t\t<label text={todo.text} textDecoration={todo.completed ? 'line-through' : 'none'} />",
            "\t\t\t\t\t<button text=\"Remove\" on:tap={() => removeTodo(todo.id)} />",
            "\t\t\t\t</gridLayout>",
            "\t\t\t</ng-template>",
            "\t\t</listView>",
            "\t</stackLayout>",
            "</page>",
            "</frame>",
        ].join("\n")
    },
    
]