<script>
    import { onMount } from 'svelte';
    import Header from '../lib/Header.svelte';

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
      const element = document.querySelector('.hiddenDiv');
      if(!element.classList.contains("scrollShow")){
      const rect = element.getBoundingClientRect();
      target = rect.bottom+scrollPosition-window.innerHeight-rect.height/2;
      if(target<scrollPosition){
        element.classList.add("scrollShow")
        element.classList.remove("hiddenDiv")
        showDIV=true
      }
    }
    }

    onMount(() => {
      setTimeout(()=>{
        isLoading=false;
      },2000)

      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  
</script>

<!-- loading -->
<div class="{isLoading?"fixed":"hidden"}   " style=";height:100vh;width:100vw">
  <div class="{themeGradient} flex flex-col justify-center w-full h-full">
    <p style="place-items:center;" class="w-full text-center text-5xl px-4 py-2 rounded-xl font-bold text-gray-300">The Svelte Native Tutorial</p>
    <div class="w-1/2 mx-auto"><p class="text-xl text-right text-gray-300">by Tanishq Dhote</p></div>
  </div>
</div>

<title>Home</title>


<!-- header -->
<Header></Header>


<!-- line skip -->

<br><br>
<p class="text-3xl text-bold p-5 text-center ">Welcome to the Svelte Native tutorial, android app develpment made easier than ever</p>

<p class:scrollShow={showDIV}  class="hiddenDiv text-4xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis in laudantium maxime, quasi exercitationem! In praesentium excepturi, ea, earum eum, doloribus expedita obcaecati laudantium et ullam reiciendis voluptatum veritatis.</p>
<p class="hiddenDiv text-4xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis in laudantium maxime, quasi exercitationem! In praesentium excepturi, ea, earum eum, doloribus expedita obcaecati laudantium et ullam reiciendis voluptatum veritatis.</p>
<p  class="hiddenDiv text-4xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis in laudantium maxime, quasi exercitationem! In praesentium excepturi, ea, earum eum, doloribus expedita obcaecati laudantium et ullam reiciendis voluptatum veritatis.</p>
<p class="hiddenDiv text-4xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis in laudantium maxime, quasi exercitationem! In praesentium excepturi, ea, earum eum, doloribus expedita obcaecati laudantium et ullam reiciendis voluptatum veritatis.</p>



<style>

    .hiddenDiv{
      opacity:0;
      transition:all 1s;
    }
    .scrollShow{
      opacity:1;
      transition:all 1s;
    } 

  

     
	

</style>