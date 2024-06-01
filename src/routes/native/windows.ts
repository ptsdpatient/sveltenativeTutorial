interface DataType{
    tag:string;
    markdown:string;
    code:string[];
    output:string;
   
}

export let Data:DataType[]=[
{
    tag:'ActionBar',
    markdown:"Represents the apps top bar.",
    code:[
        '<Page>',
        '\t<ActionBar title="My App"/>',
        '</Page>'
  
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'ActionItem',
    markdown:"A button in the action bar",
    code:[
        '<Page>',
        '\t<ActionBar title="My App">',
        '\t\t<ActionItem text="Info" />',
        '\t</ActionBar>',
        '</Page>',
    
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'ActivityIndicator',
    markdown:"Shows a spinning loader.",
    code:[
        '<Page>',
        '\t<ActivityIndicator busy={true} />',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'Border',
    markdown:"A container with a border.",
    code:[
        '<Page>',
        '\t<Border borderColor="red" borderWidth="2">',
        '\t\t<Label text="Content inside a border"/>',
        '\t</Border>',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'BottomNavigation',
    markdown:"A bottom navigation bar with tabs.",
    code:[
        '<Page>',
        '\t<BottomNavigation>',
        '\t\t<TabStrip>',
        '\t\t\t<TabStripItem title="Tab 1" />',
        '\t\t\t<TabStripItem title="Tab 2" />',
        '\t\t</TabStrip>',
        '\t\t<TabContentItem>',
        '\t\t\t<Label text="Content for Tab 1"/>',
        '\t\t</TabContentItem>',
        '\t\t<TabContentItem>',
        '\t\t\t<Label text="Content for Tab 2"/>',
        '\t\t</TabContentItem>',
        '\t</BottomNavigation>',
        '</Page>'
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'Button',
    markdown:"A tappable button.",
    code:[
        '<Page>',
        '\t<Button text="Click Me" />',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'DatePicker',
    markdown:"A date selection component.",
    code:[
        '<Page>',
        '\t<DatePicker />',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'DockLayout',
    markdown:"Layout where children can be docked to a specific side.",
    code:[
        '<Page>',
        '\t<DockLayout>',
        '\t\t<Label dock="top" text="Top Dock" />',
        '\t\t<Label dock="bottom" text="Bottom Dock" />',
        '\t</DockLayout>',
        '</Page>'
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'EditableTextBase',
    markdown:"Base class for editable text components.",
    code:[
        '<Page>',
        '\t<EditableTextBase text="Editable text" />',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'FlexboxLayout',
    markdown:"A layout based on css flexbox",
    code:[
        '<Page>',
        '\t<FlexboxLayout>',
        '\t\t<Label text="Item 1" />',
        '\t\t<Label text="Item 2" />',
        '\t</FlexboxLayout>',
        '</Page>',

    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'FormattedString',
    markdown:"Enables rich text formatting.",
    code:[
        '<Page>',
        '\t<Label>',
        '\t\t<FormattedString>',
        '\t\t\t<Span text="Bold" fontWeight="bold"/>',
        '\t\t\t<Span text="Italic" fontStyle="italic"/>',
        '\t\t</FormattedString>',
        '\t</Label>',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'Frame',
    markdown:"The main navigation container.",
    code:[
        '<Frame>',
        '\t<Page>',
        '\t\t<Label text="Home Page" />',
        '\t</Page>',
        '</Frame>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'GridLayout',
    markdown:"Grid-based layout with rows and columns.",
    code:[
        '<Page>',
        '\t<GridLayout rows="auto, auto" columns="auto, auto">',
        '\t\t<Label row="0" col="0" text="Row 0, Col 0" />',
        '\t\t<Label row="0" col="1" text="Row 0, Col 1" />',
        '\t\t<Label row="1" col="0" text="Row 1, Col 0" />',
        '\t\t<Label row="1" col="1" text="Row 1, Col 1" />',
        '\t</GridLayout>',
        '</Page>'
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'HtmlView',
    markdown:"Displays HTML content.",
    code:[
        '<Page>',
        '\t<HtmlView html="<h1>Hello World</h1><p>This is HTML content.</p>" />',
        '</Page>'
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'Image',
    markdown:"Displays an Image.",
    code:[
        '<Page>',
        '\t<Image src="~/images/logo.png" />',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'LayoutBase',
    markdown:"Base class for layout container",
    code:[
        '<Page>',
        '\t<LayoutBase>',
        '\t\t<Label text="Inside a layout base" />',
        '\t</LayoutBase>',
        '</Page>'
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'ListPicker',
    markdown:"A dropdown list.",
    code:[
        '<Page>',
        "\t<ListPicker items={['Item 1', 'Item 2', 'Item 3']} />",
        '</Page>'
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'ListView',
    markdown:"A scrollable list of items.",
    code:[
        '<Page>',
        "\t<ListView items={['Item 1', 'Item 2', 'Item 3']}>",
        '\t\t{#each items as item}',
        '\t\t\t<Label text={item} />',
        '\t\t{/each}',
        '\t</ListView>',
        '</Page>',
    
        
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'NavigationButton',
    markdown:"A button to navigate back.",
    code:[
        '<Page>',
        '\t<ActionBar title="Page Title">',
        '\t\t<NavigationButton text="Back" />',
        '\t</ActionBar>',
        '</Page>'
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'Label',
    markdown:"a label that represents some text.",
    code:[
        '<Page>',
        '\t<Label text="Hello, World!" />',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'Placeholder',
    markdown:"A placeholder for a custom native view.",
    code:[
        '<Page>',
        '\t<Placeholder creatingView={() => new android.widget.TextView(androidContext)} />',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'Progress',
    markdown:"A progress bar.",
    code:[
        '<Page>',
        '\t<Progress value="50" maxValue="100" />',
        '</Page>'
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'ProxyViewContainer',
    markdown:"A container that proxies its children.",
    code:[
        '<Page>',
        '\t<ProxyViewContainer>',
        '\t\t<Label text="Proxy View" />',
        '\t</ProxyViewContainer>',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'RootLayout',
    markdown:"The root layout of the app.",
    code:[
        '<RootLayout>',
        '\t<Label text="Root Layout Content" />',
        '</RootLayout>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'ScrollView',
    markdown:"A scrollable container.",
    code:[
        '<Page>',
        '\t<ScrollView>',
        '\t\t<Label text="Scrollable content" />',
        '\t</ScrollView>',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'Searchbar',
    markdown:"A search input",
    code:[
        '<Page>',
        '\t<SearchBar hint="Search here..." />',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'Segmented Bar',
    markdown:"A segment control and segment item.",
    code:[
        '<Page>',
        '\t<SegmentedBar>',
        '\t\t<SegmentedBarItem title="Tab 1" />',
        '\t\t<SegmentedBarItem title="Tab 2" />',
        '\t</SegmentedBar>',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'Slider',
    markdown:"A control for selecting value from a given range.",
    code:[
        '<Page>',
        '\t<Slider minValue="0" maxValue="100" value="50" />',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'FormattedString',
    markdown:".",
    code:[
        '<Page>',
        '\t<Label>',
        '\t\t<FormattedString>',
        '\t\t\t<Span text="Normal " />',
        '\t\t\t<Span text="Bold" fontWeight="bold" />',
        '\t\t</FormattedString>',
        '\t</Label>',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'StackLayout',
    markdown:"A layout where children are stacked vertically.",
    code:[
        '<Page>',
        '\t<StackLayout>',
        '\t\t<Label text="Item 1" />',
        '\t\t<Label text="Item 2" />',
        '\t</StackLayout>',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'Switch',
    markdown:"A toggle switch.",
    code:[
        '<Page>',
        '\t<Switch checked={true} />',
        '</Page>',
    
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'TabView',
    markdown:"A container with multiple tabs.",
    code:[
        '<Page>',
        '\t<TabView>',
        '\t\t<TabViewItem title="Tab 1">',
        '\t\t\t<Label text="Content for Tab 1" />',
        '\t\t</TabViewItem>',
        '\t\t<TabViewItem title="Tab 2">',
        '\t\t\t<Label text="Content for Tab 2" />',
        '\t\t</TabViewItem>',
        '\t</TabView>',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'TabViewItem',
    markdown:"items for tab view container",
    code:[
        '<Page>',
        '\t<TabView>',
        '\t\t<TabViewItem title="Tab 1">',
        '\t\t\t<Label text="Content for Tab 1" />',
        '\t\t</TabViewItem>',
        '\t</TabView>',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'TextBase',
    markdown:"Base class for text components.",
    code:[
        '<Page>',
        '\t<TextBase text="Base text component" />',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'TextField',
    markdown:" A single-line text input field.",
    code:[
        '<Page>',
        '\t<TextField hint="Enter text here" />',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'TextView',
    markdown:" multi-line text input field.",
    code:[
        '<Page>',
        '\t<TextView hint="Enter long text here" />',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'ThemePicker',
    markdown:"A time selection component.",
    code:[
        
        '<Page>',
        '\t<TimePicker />',
        '</Page>'

    
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'WebView',
    markdown:"A component to display web content.",
    code:[
        '<Page>',
        '\t<WebView src="https://www.example.com" />',
        '</Page>',

   
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
},{
    tag:'WrapLayout',
    markdown:"A layout that wraps its children in a new row or column when they exceed the available space.",
    code:[
        '<Page>',
        '\t<WrapLayout>',
        '\t\t<Label text="Item 1" />',
        '\t\t<Label text="Item 2" />',
        '\t\t<Label text="Item 3" />',
        '\t\t<Label text="Item 4" />',
        '\t</WrapLayout>',
        '</Page>',
    ],  
    output:'the template will install nativescript and display status of the nativescript after installation',
}
]