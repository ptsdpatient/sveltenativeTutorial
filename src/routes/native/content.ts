interface DataType{
    tag:string;
    markdown:string;
    code:string;

}

export let Data:DataType[]=[
{
    tag:'actionBar',
    markdown:"Represents the apps top bar.",
    code:[
        '<page>\n\t<actionBar title="My App"/>\n</page>'
  
    ].join('\n'),  
     
},{
    tag:'actionItem',
    markdown:"A button in the action bar",
    code:[
        '<page>',
        '\t<actionBar title="My App">',
        '\t\t<actionItem text="Info" />',
        '\t</actionBar>',
        '</page>',
    
    ].join('\n'),  
     
},{
    tag:'activityIndicator',
    markdown:"Shows a spinning loader.",
    code:[
        '<page>',
        '\t<activityIndicator busy={true} />',
        '</page>',
    ].join('\n'),  
     
},{
    tag:'button',
    markdown:"A tappable button.",
    code:[
        '<page>',
        '\t<button text="Click Me" />',
        '</page>',
    ].join('\n'),  
     
},{
    tag:'datePicker',
    markdown:"A date selection component.",
    code:[
        '<page>',
        '\t<datePicker />',
        '</page>',
    ].join('\n'),  
     
},{
    tag:'dockLayout',
    markdown:"Layout where children can be docked to a specific side.",
    code:[
        '<page>',
        '\t<dockLayout>',
        '\t\t<label dock="top" text="Top Dock" />',
        '\t\t<label dock="bottom" text="Bottom Dock" />',
        '\t</dockLayout>',
        '</page>'
    ].join('\n'),  
     
},{
    tag:'flexboxLayout',
    markdown:"A layout based on css flexbox",
    code:[
        '<page>',
        '\t<flexboxLayout>',
        '\t\t<label text="Item 1" />',
        '\t\t<label text="Item 2" />',
        '\t</flexboxLayout>',
        '</page>',

    ].join('\n'),  
     
},{
    tag:'frame',
    markdown:"The main navigation container.",
    code:[
        '<frame>',
        '\t<page>',
        '\t\t<label text="Home Page" />',
        '\t</page>',
        '</frame>',
    ].join('\n'),  
     
},{
    tag:'gridLayout',
    markdown:"Grid-based layout with rows and columns.",
    code:[
        '<page>',
        '\t<gridLayout rows="auto, auto" columns="auto, auto">',
        '\t\t<label row="0" col="0" text="Row 0, Col 0" />',
        '\t\t<label row="0" col="1" text="Row 0, Col 1" />',
        '\t\t<label row="1" col="0" text="Row 1, Col 0" />',
        '\t\t<label row="1" col="1" text="Row 1, Col 1" />',
        '\t</gridLayout>',
        '</page>'
    ].join('\n'),  
     
},{
    tag:'htmlView',
    markdown:"Displays HTML content.",
    code:[
        '<page>',
        '\t<htmlView html="<h1>Hello World</h1><p>This is HTML content.</p>" />',
        '</page>'
    ].join('\n'),  
     
},{
    tag:'image',
    markdown:"Displays an image.",
    code:[
        '<page>',
        '\t<image src="~/images/logo.png" />',
        '</page>',
    ].join('\n'),  
     
},{
    tag:'listPicker',
    markdown:"A dropdown list.",
    code:[
        '<page>',
        "\t<listPicker items={['Item 1', 'Item 2', 'Item 3']} />",
        '</page>'
    ].join('\n'),  
     
},{
    tag:'listView',
    markdown:"A scrollable list of items.",
    code:[
        '<page>',
        "\t<listView items={['Item 1', 'Item 2', 'Item 3']}>",
        '\t\t{#each items as item}',
        '\t\t\t<label text={item} />',
        '\t\t{/each}',
        '\t</listView>',
        '</page>',
    
        
    ].join('\n'),  
     
},{
    tag:'navigationButton',
    markdown:"A button to navigate back.",
    code:[
        '<page>',
        '\t<actionBar title="Page Title">',
        '\t\t<navigationButton text="Back" />',
        '\t</actionBar>',
        '</page>'
    ].join('\n'),  
     
},{
    tag:'label',
    markdown:"a label that represents some text.",
    code:[
        '<page>',
        '\t<label text="Hello, World!" />',
        '</page>',
    ].join('\n'),  
     
},{
    tag:'progress',
    markdown:"A progress bar.",
    code:[
        '<page>',
        '\t<progress value="50" maxValue="100" />',
        '</page>'
    ].join('\n'),  
     
},{
    tag:'proxyViewContainer',
    markdown:"A container that proxies its children.",
    code:[
        '<page>',
        '\t<proxyViewContainer>',
        '\t\t<label text="Proxy View" />',
        '\t</proxyViewContainer>',
        '</page>',
    ].join('\n'),  
     
},{
    tag:'rootLayout',
    markdown:"The root layout of the app.",
    code:[
        '<rootLayout>',
        '\t<label text="Root Layout Content" />',
        '</rootLayout>',
    ].join('\n'),  
     
},{
    tag:'scrollView',
    markdown:"A scrollable container.",
    code:[
        '<page>',
        '\t<scrollView>',
        '\t\t<label text="Scrollable content" />',
        '\t</scrollView>',
        '</page>',
    ].join('\n'),  
     
},{
    tag:'searchBar',
    markdown:"A search input",
    code:[
        '<page>',
        '\t<searchBar hint="Search here..." />',
        '</page>',
    ].join('\n'),  
     
},{
    tag:'segmentedBar',
    markdown:"A segment control and segment item.",
    code:[
        '<page>',
        '\t<segmentedBar>',
        '\t\t<segmentedBarItem title="Tab 1" />',
        '\t\t<segmentedBarItem title="Tab 2" />',
        '\t</segmentedBar>',
        '</page>',
    ].join('\n'),  
     
},{
    tag:'slider',
    markdown:"A control for selecting value from a given range.",
    code:[
        '<page>',
        '\t<slider minValue="0" maxValue="100" value="50" />',
        '</page>',
    ].join('\n'),  
     
},{
    tag:'formattedString',
    markdown:"Enables rich text formatting.",
    code:[
        '<page>',
        '\t<label>',
        '\t\t<formattedString>',
        '\t\t\t<span text="Normal " />',
        '\t\t\t<span text="Bold" fontWeight="bold" />',
        '\t\t</formattedString>',
        '\t</label>',
        '</page>',
    ].join('\n'),  
     
},{
    tag:'stackLayout',
    markdown:"A layout where children are stacked vertically.",
    code:[
        '<page>',
        '\t<stackLayout>',
        '\t\t<label text="Item 1" />',
        '\t\t<label text="Item 2" />',
        '\t</stackLayout>',
        '</page>',
    ].join('\n'),  
     
},{
    tag:'switch',
    markdown:"A toggle switch.",
    code:[
        '<page>',
        '\t<switch checked={true} />',
        '</page>',
    
    ].join('\n'),  
     
},{
    tag:'tabView',
    markdown:"A container with multiple tabs.",
    code:[
        '<page>',
        '\t<tabView>',
        '\t\t<tabViewItem title="Tab 1">',
        '\t\t\t<label text="Content for Tab 1" />',
        '\t\t</tabViewItem>',
        '\t\t<tabViewItem title="Tab 2">',
        '\t\t\t<label text="Content for Tab 2" />',
        '\t\t</tabViewItem>',
        '\t</tabView>',
        '</page>',
    ].join('\n'),  
     
},{
    tag:'tabViewItem',
    markdown:"items for tab view container",
    code:[
        '<page>',
        '\t<tabView>',
        '\t\t<tabViewItem title="Tab 1">',
        '\t\t\t<label text="Content for Tab 1" />',
        '\t\t</tabViewItem>',
        '\t</tabView>',
        '</page>',
    ].join('\n'),  
     
},{
    tag:'textField',
    markdown:" A single-line text input field.",
    code:[
        '<page>',
        '\t<textField hint="Enter text here" />',
        '</page>',
    ].join('\n'),  
     
},{
    tag:'textView',
    markdown:" multi-line text input field.",
    code:[
        '<page>',
        '\t<textView hint="Enter long text here" />',
        '</page>',
    ].join('\n'),  
     
},{
    tag:'timePicker',
    markdown:"A time selection component.",
    code:[
        
        '<page>',
        '\t<timePicker />',
        '</page>'

    
    ].join('\n'),  
     
},{
    tag:'webView',
    markdown:"A component to display web content.",
    code:[
        '<page>',
        '\t<webView src="https://www.example.com" />',
        '</page>',

   
    ].join('\n'),  
     
},{
    tag:'wrapLayout',
    markdown:"A layout that wraps its children in a new row or column when they exceed the available space.",
    code:[
        '<page>',
        '\t<wrapLayout>',
        '\t\t<label text="Item 1" />',
        '\t\t<label text="Item 2" />',
        '\t\t<label text="Item 3" />',
        '\t\t<label text="Item 4" />',
        '\t</wrapLayout>',
        '</page>',
    ].join('\n'),  
     
}
]