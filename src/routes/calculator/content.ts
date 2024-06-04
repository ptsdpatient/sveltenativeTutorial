interface DataType{
    title:string;
    markdown:string;
    code:string;

}

export let Data:DataType[]=[
    {
        title:'Create an action bar for your app!',
        markdown:"lets make an action bar to tell what you are really making, and we should also put in some inline css to make it look beautiful, for now i am using snow blue theme for the calculator app, you should choose as you wish.",
        code:[
            '',
            '<frame>',
            '\t<page style="background-color:white;">',
            '\t\t<actionBar style="background-color:aliceblue;color:cornflowerblue;font-family:"Times New Roman", Times, serif;font-size:larger;font-size:24px;" title="Calculator App by Tanishq"/>',
            '\t</page>',
            '</frame>'
      
        ].join('\n'),      
    }, {
        title:'create a flexbox for the elements!',
        markdown:"Lets create a flexbox for our elements to hold, we will be using multiple buttons through which we can interact!",
        code:[
            '',
            '<flexboxLayout style="display:flex;flex-flow:column;justify-content:center;column-gap:10%;">'
            ,'</flexboxLayout>'
        ].join('\n'),      
    },{
        title:"Coding the scripting part!",
        markdown:"Lets add the javascript part to our project! We will be adding some number buttons, operator buttons and delete buttons with some functionality, the script is incomplete! i will leave it to you to decide how to make the calculator work!",
        code:[
                '',
                "<script>"
                ,"\tlet result=0;"
                ,"\tlet numbers=[7,8,9,4,5,6,1,2,3,'C',0,'.']"
                ,"\tlet operators=['/','x','-','+','=']"
                ,"\tlet equation=''"
                ,"</script>"
        ].join('\n'),      
    },{
        title:"Lets create a text display element to show our results!",
        markdown:"we will create flexbox layouts and stack them over one another where a one will have a label that represents the result and the bottom one represents a delete button, make sure to create a delete function later ;)",
        code:[
            '',
            '<flexboxLayout style="display:flex;flex-flow:row-reverse;width:90%;padding:5px;margin:20px;">'
            ,'\t<label style="color:cornflowerblue;font-size:24px;" text={equation}/>'
            ,'</flexboxLayout>'    
            ,'<flexboxLayout style="width:100%;display:flex;flex-flow:row-reverse;">'
            ,'\t<button on:tap={deleteLast} style="margin:12px;background-color:aliceblue;color:cornflowerblue;">⌫</button>'
            ,'</flexboxLayout>'
        ].join("\n")
    },{
        title:"Lets create the buttons!",
        markdown:"here we shall create two horizontal flexbox layouts one box having number buttons and next to it having the operators, we shall give them some padding so as to make it look cozy.",
        code:[
            '',
            '<flexboxLayout style="width:100%;display:flex;flex-direction:row;">'
            ,'\t<flexboxLayout class="spaceAround" style="padding:0;margin:0;width:75%;flex-direction:row;flex-wrap:wrap;">'
            ,'\t\t{#each numbers as num}'
            ,'\t\t\t<button on:tap={()=>addItem(num)} style="padding:0;margin:0;color:cornflowerblue;background-color:aliceblue;">{num}</button>'
            ,'\t\t{/each}'
            ,'\t</flexboxLayout>'
            ,'\t<flexboxLayout style="width:25%;padding:0;margin:0;display:flex;flex-direction:column;">'
            ,'\t\t{#each operators as op}'
            ,'\t\t\t<button on:tap={()=>addOperator(op)} style="margin-top:1px;padding-top:1px;margin-bottom:1px;padding-bottom:1px;color:cornflowerblue;background-color:aliceblue;">{op}</button>'
            ,'\t\t{/each}'
            ,'\t</flexboxLayout>'
            ,'</flexboxLayout>'
        ].join("\n")
    },{
        title:"In the end our project should look like this!",
        markdown:"",
        code:[
            '',
            '<script>',
            '\tlet result=0;',
            '\tlet numbers=[7,8,9,4,5,6,1,2,3,\'C\',0,\'.\']',
            '\tlet operators=[\'/\',\'x\',\'-\',\'+\',\'=\']',
            '\tlet equation=\'\'',
            '\tlet operation=[]',
            '\tlet params=[]',
            '</script>',
            '',
            '<frame>',
            '\t<page style="background-color:white;">',
            '\t\t<actionBar style="background-color:aliceblue;color:cornflowerblue;font-family:\'Times New Roman\', Times, serif;font-size:larger;font-size:24px;" title="Calculator App by Tanishq"/>',
            '\t\t\t<flexboxLayout style="display:flex;flex-flow:column;justify-content:center;column-gap:10%;">',
            '\t\t\t\t<flexboxLayout style="display:flex;flex-flow:row-reverse;width:90%;padding:5px;margin:20px;">',
            '\t\t\t\t\t<label style="color:cornflowerblue;font-size:24px;" text={equation+\' : \'+params.join(",")+ \' : \'+operation.join("")}/>',
            '\t\t\t\t</flexboxLayout>',    
            '\t\t\t\t<flexboxLayout style="width:100%;display:flex;flex-flow:row-reverse;">',
            '\t\t\t\t\t<button on:tap={deleteLast} style="margin:12px;background-color:aliceblue;color:cornflowerblue;">⌫</button>',
            '\t\t\t\t</flexboxLayout>',
            '\t\t\t\t<flexboxLayout style="width:100%;display:flex;flex-direction:row;">',
            '\t\t\t\t\t<flexboxLayout class="spaceAround" style="padding:0;margin:0;width:75%;flex-direction:row;flex-wrap:wrap;">',
            '\t\t\t\t\t\t{#each numbers as num}',
            '\t\t\t\t\t\t\t<button on:tap={()=>addItem(num)} style="padding:0;margin:0;color:cornflowerblue;background-color:aliceblue;">{num}</button>',
            '\t\t\t\t\t\t{/each}',
            '\t\t\t\t\t</flexboxLayout>',
            '\t\t\t\t\t<flexboxLayout style="width:25%;padding:0;margin:0;display:flex;flex-direction:column;">',
            '\t\t\t\t\t\t{#each operators as op}',
            '\t\t\t\t\t\t\t<button on:tap={()=>addOperator(op)} style="margin-top:1px;padding-top:1px;margin-bottom:1px;padding-bottom:1px;color:cornflowerblue;background-color:aliceblue;">{op}</button>',
            '\t\t\t\t\t\t{/each}',
            '\t\t\t\t\t</flexboxLayout>',
            '\t\t\t\t</flexboxLayout>',
            '\t\t\t</flexboxLayout>',
            '\t\t</page>',
            '</frame>'
        ].join("\n")
    }
    
]