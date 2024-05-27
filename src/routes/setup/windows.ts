interface DataType{
    terminal:Boolean;
    markdown:string;
    code:string[];
    output:string;
}

export let Data:DataType[]=[
{
    markdown:'hello',
    terminal:false,
    code:[
        'const tanishq = "Hello"',
        'sudo apt install fuck you'
    ],
    output:'niga \n tanishq'    
},

]