<script>
    import { onMount } from 'svelte';
    import icon from '../lib/images/favicon.png'

    let pagination =[
    {name:'home',icon:' 🏠 ',url:'./home.png',link:'',description:'navigate back to home page'},
    {name:'basic setup',icon:' 🚀 ',url:'./setup.png',link:'setup',description:'learn how to setup svelte native in your pc'},
    {name:'svelte basics',icon:' 💻 ',url:'./svelte.png',link:'svelte',description:'learn the basic svelte concept'},
    {name:'svelte native',icon:' 📚 ',url:'./svelte-native.png',link:'native',description:'learn svelte native tags and attribute'},
    {name:'calculator app',icon:' 🖩 ',url:'./calculator.png',link:'calculator',description:'create a calculator app in few lines of code'},
    {name:'todo app',icon:'📋 ',url:'./todo.png',link:'todo',description:'learn to make a todo list app'},
    ]
    let mobileNav=false
    let themeButtonOn=false;
    let target=0
    let showDIV = false;
    let currentScroll=0;
    let scrollPosition = 0;
    let themeGradient='bg-gradient-to-r from-purple-600 to-pink-500'
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

    onMount(()=>{
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
   
    
  
</script>

<div class:slideHeader={directionScrolled==='up'} class=" {directionScrolled=='up'?"fixed z-10":""} w-full">
  <div class="flex flex-row w-full justify-between bg-gray-800 cursor-default">
  
      <button>
        <p class="text-2xl p-2 px-5 font-bold {themeGradient} text-transparent bg-clip-text" style="white-space:nowrap;">SN Tutorial</p>
      </button>
  
      <button on:click={()=>mobileNav=!mobileNav} class="md:hidden text-gray-300 w-1/6 px-4 py-2 rounded-2xl text-3xl hover:  hover:{themeGradient} hover:text-transparent hover:bg-clip-text transition duration-300 ease-in-out">
        ≕
      </button>
  
      <button on:mouseleave={()=>showNavIcon=false} class="hidden md:flex"><div class="tutorialNavigation md:w-full text-center hidden w-1/3  md:flex flex-col md:flex-row justify-around items-center ">
      {#each pagination as page}
      <a class="" href="/{page.link}"><button on:mouseenter={()=>{showNavIcon=true;showNavData=page.name;showNavDescription=page.description;showNavImageURL=page.url}} class=" text-gray-300 px-4 text-xl hover:{themeGradient}  hover:bg-clip-text hover:text-transparent transition duration-300 ease-in-out">{page.name}</button></a>
      {/each}    
      </div>
      </button>
  

  </div>
  
  <div class="bg-black bg-opacity-80 w-full hidden flex-col justify-center {showNavIcon?"md:flex scaleAnim":"hidden"}" style="height:100vh;">
      <div class="w-full flex flex-row justify-center"><img class="w-1/6 p-6" src={showNavImageURL} alt={showNavData}></div>
        <div class="w-full flex flex-row justify-center">
        <button class="text-4xl text-white rounded-2xl px-4 py-2 {themeGradient}"> {"<"+showNavData+"/>"}</button>
      </div> 
      <p class="w-full py-6 text-3xl text-white text-center">{showNavDescription}</p>
  </div>
  
  <button class="w-full h-full flex flex-col bg-gray-100 bg-opacity-90 py-10 {!mobileNav?"hidden ":"scaleAnim"} " style="height:100svh">
    <div class="w-full h-2/3 text-center md:hidden flex flex-col justify-around">
      {#each pagination as page}
      <a class="w-11/12  my-auto mx-auto font-bold" href="/{page.link}"><button on:click={()=>{mobileNav=false}}  class="{themeGradient}  text-2xl hover:bg-clip-border md:bg-clip-text md:text-transparent px-4 py-2 border-0 rounded-2xl hover:text-white text-white hover:{themeGradient} transition-all duration-300 ease-in-out">{"<"+page.icon+page.name+"/>"}</button></a>
      {/each}    
    </div>
  </button>
  </div>


<style>


   

  
</style>

  

  