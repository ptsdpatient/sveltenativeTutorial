interface DataType{
    terminal:Boolean;
    title:string;
    markdown:string;
    code:string;
}

export let Data:DataType[]=[

{
    title:'Lets create a svelte app first',
    markdown:"This command creates a sveltekit app in your directory, this app will create a svelte app called myapp",
    terminal:true,
    code:["",
        'npm create svelte@latest myapp',
    ].join("\n"),
   
},{
    title:'Running the svelte app in development environment',
    markdown:"lets test the app in our browser ",
    terminal:true,
    code:["",
        'cd myapp',
        'npm install',
        'npm run dev',
        '//bun run dev if you have bun runtime'
    ].join("\n"),
   
},{
    title:'So how does a svelte app work?',
    markdown:"Basically the svelte kit has file system routing, the necessary svelte file is called as +page.svelte which is usually present in routes folder directly ",
    terminal:false,
    code:["",
        "my-sveltekit-app",
        "└── src",
        "    └── routes",
        "        ├── index.svelte        // Represents the homepage route",
        "        ├── about.svelte        // Represents the about page route",
        "        ├── contact.svelte      // Represents the contact page route",
        "        ├── blog",
        "        │   ├── index.svelte    // Represents the blog listing page route",
        "        │   └── [slug].svelte   // Represents the individual blog post route using a dynamic parameter",
        "        └── +page.svelte        // Represents a catch-all route for pages that don't have a specific route"
    ].join("\n"),
   
},{
    title:'What is inside this +page.svelte app?',
    markdown:"a svelte app basically has a <script></script> tag to conatin the javascript or svelte script, <style></style> to contain the classes and styles for tags and animation and rest of the tags are used as display tags like div,p,a,button,input simple as that",
    terminal:true,
    code:["",
        "<script>"
        ,"\tlet name = 'World';"
        ,"</script>"

        ,"<h1>Hello, {name}!</h1>"

        ,"<style>"
        ,"\th1 {"
            ,"\t\tcolor: blue;"
        ,"\t}"
       ,"</style>"
    ].join("\n"),
   
},{
    title:'The Magic',
    markdown:"Svelte has bind elements where we can make tags responsive to changes like variable or state changes",
    terminal:true,
    code:["",
        "<script>"
        ,"\tlet inputValue = '';"
        ,"</script>"
        ,"<input type='text' bind:value={inputValue}/>"
        ,"<p>The value entered is: {inputValue}</p>"

    ].join("\n"),
   
},{
    title:'Making the clicking possible',
    markdown:"So clicking a button does not work exactly how its supposed to be in vanilla html check this out ",
    terminal:true,
    code:["",
            "<script>",
            "\tlet count = 0;",

            "\tfunction increment() {",
                "\t\tcount++;",
            "\t}",
            "</script>",

            "<button on:click={increment}>",
            "\tClick me! ({count})",
            "</button>",

    ].join("\n"),
   
},{
    title:'If else if else if else if else? ',
    markdown:"Lets say control flow in svelte is really smooth",
    terminal:true,
    code:["",
        "<script>",
        "\tlet loggedIn = true;",
        "</script>",

        "{#if loggedIn}",
        "\t<p>Welcome, user!</p>",
        "{:else}",
        "\t<p>Please log in to continue.</p>",
        "{/if}",
    ].join("\n"),
   
},{
    title:'So you find repetitive div tags very annoying.',
    markdown:"With 'each' control flow iterating through arrays and data becomes easy and fun",
    terminal:true,
    code:["",
        "<script>",
        "let numbers = [1, 2, 3, 4, 5];",
        "</script>",

        "<ul>",
        "{#each numbers as number}",
            "<li>{number}</li>",
        "{/each}",
        "</ul>",

    ].join("\n"),
   
},{
    title:'Class directive',
    markdown:"class directive is a feature that adds a particular class to the div when the given condition becomes true",
    terminal:true,
    code:["",
        "<script>",
        "\tlet isActive = true;",
        "</script>",
        "<div class:active={isActive}>",
        "\tThis div is {isActive ? 'active' : 'inactive'}",
        "</div>",
    ].join("\n"),
   
}
]