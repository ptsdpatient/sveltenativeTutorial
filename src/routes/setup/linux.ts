interface DataType{
    terminal:Boolean;
    title:string;
    markdown:string;
    code:string[];
    output:string;
    conclusion:string;
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
    output:'the template will install nativescript and display status of the nativescript after installation',
    conclusion:'with this the installation of native script is completed, there are a few occuring errors where the installation gives error while installing for IOS'
},

]