<script>
    import { onMount } from 'svelte';
    import icon from '../lib/images/favicon.png'

    let pagination =[
    {name:'home',url:'./home.png',link:'/',description:'navigate back to home page'},
    {name:'basic setup',url:'./setup.png',link:'/setup',description:'learn how to setup svelte native in your pc'},
    {name:'svelte basics',url:'./svelte.png',link:'/svelte',description:'learn the basic svelte concept'},
    {name:'svelte native',url:'./svelte-native.png',link:'/native',description:'learn svelte native tags and attribute'},
    {name:'calculator app',url:'./calculator.png',link:'/calculator',description:'create a calculator app in few lines of code'},
    {name:'todo app',url:'./todo.png',link:'/todo',description:'learn to make a todo list app'},
    ]
    let isLoading=true;
    let mobileNav=false
    let themeButtonOn=false;
    let target=0
    let showDIV = false;
    let currentScroll=0;
    let scrollPosition = 0;
    let themes=[
      {name:'pink',value:'bg-gradient-to-r from-purple-600 to-pink-600'},
      {name:'gold',value:'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600'},
      {name:'green',value:'bg-gradient-to-r from-green-400 via-green-500 to-green-600'},
      {name:'red',value:'bg-gradient-to-r from-red-600  to-pink-600'},
      {name:'blue',value:'bg-gradient-to-r from-cyan-500 to-blue-500'}      
    ]
     let themeGradient=themes[0].value
    let showNavIcon=false;
    let showNavData=''
    let showNavDescription=''
    let showNavImageURL=''


    let directionScrolled='up'
    function handleScroll() {
      directionScrolled=((currentScroll-window.scrollY)>0)?'up':'down'  
      currentScroll=window.scrollY;
      scrollPosition = window.scrollY;
    }


    onMount(() => {
    
    });
  
</script>



  