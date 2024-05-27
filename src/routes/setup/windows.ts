interface DataType{
    terminal:Boolean;
    title:string;
    markdown:string;
    code:string[];
    output:string;
}

export let Data:DataType[]=[
{
    title:'Installing nativescript',
    markdown:"Lets start by installing nativescript using windows powershell, make sure you have nodejs and python installed and updated in your system properly as an old version of either of the runtimes can cause errors while installing. Its a long processess so it may take some minutes ",
    terminal:true,
    code:[
        '//install nativescript and check status',
        'npm install -g nativescript',
        'ns'
    ],
    output:'with this the installation of native script is completed',
   
},

]