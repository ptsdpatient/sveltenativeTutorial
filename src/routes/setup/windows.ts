interface DataType{
    terminal:Boolean;
    title:string;
    markdown:string;
    code:string;
    output:string;
}

export let Data:DataType[]=[
    {
    title:'Installing nativescript',
    markdown:"Lets start by installing nativescript using windows powershell and node package manager (npm), make sure you have nodejs and python installed and updated in your system properly as an old version of either of the runtimes can cause errors while installing. Its a long processess so it may take some minutes ",
    terminal:true,
    code:[
        '//install nativescript and check status',
        'npm install -g nativescript',
        'ns'
    ].join('\n'),
    output:'the template will install nativescript and display status of the nativescript after installation',
}, {
    title:'Creating a svelte native project',
    markdown:"Creating a svelte native project is easy, we will use native script command ns to create a native script project specifically configured for svelte",
    terminal:true,
    code:[
        '//create project called mobileApp and open it',
        'ns create mobileApp --svelte',
        'cd mobileApp',
        'ns preview'
    ].join('\n'),
    output:'The prompt will perform the setup of the project withing a minute and run the project for android, use ios in place of android for ios development,scan the qr using native script app scanner and the project will start running on your mobile device',
}, {
    title:'Creating your first "Hello World" App',
    markdown:"Lets clear the  App.svelte file in the mobileApp folder and create a label called Hello World that will display in the mobiel app",
    terminal:false,
    code:[
        '//install nativescript and check status',
        'const tanishq="idiot"',
        'async function gay(sex){  love=69; }',
        '<page>',
        '\t<stacklayout>',
        '\t\t<label text="Hello World! my name is Tanishq Dhote"/>',
        '\t</stacklayout>',
        '</page>'
    ].join('\n'),
    output:'the template will install nativescript and display status of the nativescript after installation',
}, 
    
    

]