<script>
    import { onMount,onDestroy } from 'svelte';

    import icon from '../lib/images/favicon.png'
    let visitorCount = 0;
    const updateVisitorCount = () => {
    visitorCount = parseInt(localStorage.getItem('visitorCount')) || 0;
  };
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



    onDestroy(() => {
      if (typeof localStorage !== 'undefined') localStorage.setItem('visitorCount', visitorCount.toString());
    });

    onMount(() => {
      updateVisitorCount();
    visitorCount++;
    if (typeof localStorage !== 'undefined') localStorage.setItem('visitorCount', visitorCount.toString());

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
<div class="{isLoading?"fixed":"hidden"}" style=";height:100vh;width:100vw">
  <div class="{themeGradient} flex flex-col justify-center w-full h-full">
    <p style="place-items:center;" class="w-full text-center text-5xl px-4 py-2 rounded-xl font-bold text-gray-300">The Svelte Native Tutorial</p>
    <div class="w-1/2 mx-auto"><p class="text-xl text-right text-gray-300">by Tanishq Dhote</p></div>
  </div>
</div>

<title>Home</title>


<!-- header -->
<div class="{isLoading?"hidden":""} {directionScrolled=='up'?"fixed z-10":""} w-full">
  <div class="flex flex-row w-full justify-between bg-gray-800">
  
      <button>
        <p class="text-2xl p-2 px-4 font-bold {themeGradient} text-transparent bg-clip-text" style="white-space:nowrap">SN Tutorial</p>
      </button>
  
  
  
      <button on:click={()=>mobileNav=!mobileNav} class="md:hidden text-gray-300 w-1/3 px-4 py-2 rounded-2xl text-3xl hover:  hover:{themeGradient} hover:text-transparent hover:bg-clip-text transition duration-300 ease-in-out">
        ≕
      </button>
  
      <button on:mouseleave={()=>showNavIcon=false} class=""><div style=""  class="tutorialNavigation md:w-full text-center hidden w-1/3  md:flex flex-col md:flex-row justify-around">
      {#each pagination as page}
      <a class="" href="/{page.link}"><button on:mouseenter={()=>{showNavIcon=true;showNavData=page.name;showNavDescription=page.description;showNavImageURL=page.url}} class=" text-gray-300 px-4 py-2 rounded-2xl text-xl hover:  hover:{themeGradient} hover:text-transparent hover:bg-clip-text transition duration-300 ease-in-out">{page.name}</button></a>
      {/each}    
      </div>
      </button>
  
  
  
      <select class="text-xl w-auto bg-gray-800 border-0 focus:outline-none text-gray-300 outline-none {themeGradient}">
        {#each themes as theme}
          <option class="w-full" on:click={()=>themeGradient=theme.value}>{theme.name}</option>
        {/each}
      </select>
  
  </div>
  
  <div class="bg-black bg-opacity-90 w-full hidden  flex-col justify-center {showNavIcon?"md:flex":"hidden"}" style="height:100vh;">
      <div class="w-full flex flex-row justify-center"><img class="w-1/6 p-6" src={showNavImageURL} alt={showNavData}></div>
        <div class="w-full flex flex-row justify-center">
        <button class="text-4xl text-white rounded-2xl px-4 py-2 {themeGradient}"> {"<"+showNavData+"/>"}</button>
      </div> 
      <p class="w-full py-6 text-3xl text-white text-center">{showNavDescription}</p>
  </div>
  
  <button class="w-full h-full flex flex-col bg-black bg-opacity-80 py-10 {!mobileNav?"hidden":""} " style="height:100vh">
    <div style=""  class=" px-5 tutorialNavigation h-1/2 md:w-full text-center md:hidden flex flex-col justify-center">
    {#each pagination as page}
    <a class="w-full font-bold" href="/{page.link}"><button on:mouseenter={()=>{showNavIcon=true;showNavData=page.name;showNavDescription=page.description;showNavImageURL=page.url}} class=" text-gray-300 w-full text-center px-4 py-2 rounded-2xl text-xl hover:  hover:{themeGradient} hover:text-transparent hover:bg-clip-text transition duration-300 ease-in-out">{page.name}</button></a>
      {/each}    
    </div>
  </button>
  </div>
  



<!-- line skip -->
<br>
<div class:scrollShow={showDIV} class="w-full h-full flex flex-col justify-center gap-20 py-20 md:py-10" style="height:100vh">
  <div>
  <p class="md:text-5xl text-4xl font-bold p-5 text-center {themeGradient} bg-clip-text text-transparent ">Welcome to the Svelte Native tutorial!</p>
  <p class="md:w-3/4 w-full md:px-0 px-3 mx-auto md:text-2xl text-xl ">Are you looking for a web framework that works seamlessly with vanilla js and able to make mobile app? look no further because this tutorial covers Mobile App Development with Svelte Native. </p>
  </div>

<div class="md:w-1/2 w-full h-1/4 md:h-auto mx-auto flex flex-col md:flex-row justify-around text-4xl">
  <a href="2"><button class="{themeGradient} hover:bg-clip-border bg-clip-text text-transparent px-4 py-2 border-0 rounded-2xl hover:text-white hover:{themeGradient} transition-all duration-300 ease-in-out">Get Started </button>🖥</a>
  <a  href="2"><button class="{themeGradient} hover:bg-clip-border bg-clip-text text-transparent px-4 py-2 border-0  rounded-2xl hover:text-white hover:{themeGradient} transition-all duration-300 ease-in-out">Learn Basics </button>📖</a>
</div>

</div>


<br>
<p class="md:text-5xl text-4xl  hiddenDiv font-bold  md:px-20 text-center md:text-left {themeGradient} bg-clip-text text-transparent  ">So what is Svelte Native? </p>
<br>
<p class=" md:px-20 hiddenDiv px-5  md:text-left text-xl">Svelte Native is a framework used for building native mobile application. With Svelte Native we can leverage svelte's reactive features and high performance to create robust mobile apps. Svelte in itself is a web framework which is quite easy to learn and works compile time so the final product is likely to be faster. Native Script is a javascript framework that is used to develop mobile apps for ios and android platform with javascript frameworks like svelte, angular, react,vue or vanilla js.</p>
<br>
<div class="w-full hiddenDiv flex text-2xl md:text-6xl font-bold md:flex-row justify-around items-center {themeGradient} bg-clip-text text-transparent ">
  <img class="md:w-1/6 md:p-4 w-1/4 p-1" src="../svelte.png" alt="html">
  +
  <img class="md:w-1/6 md:p-4 w-1/4 p-1" src="../nativescript.png" alt="native">
  =
  <img class="md:w-1/6 md:p-4 w-1/4 p-1" src="../svelte-native.png" alt="android">
</div>
<br><br>
<p class="md:text-5xl text-4xl  hiddenDiv font-bold  md:px-20 text-center md:text-right {themeGradient} bg-clip-text text-transparent ">Why pick svelte?</p>
<br>
<p class="md:px-20 hiddenDiv px-5  md:text-left text-xl">Yes, why pick svelte over the rest of the javascript framework which are more popular and in demand in the tech sector? Answer is simple, for yourself. Svelte is as simple as vanilla js, with its reactive features its simple and robust, thus many developers love it. Along side the svelte kit with navigation features svelte almost becomes invincible in the javascript market</p>
<br>

<p class="md:text-5xl text-4xl  hiddenDiv font-bold  md:px-20 text-center md:text-right {themeGradient} bg-clip-text text-transparent  ">Do you need any prior Svelte experience to get started with Svelte Native?</p>
<br>
<p class=" md:px-20 hiddenDiv px-5  md:text-left text-xl">Svelte is very easy to understand and if you are new to svelte this tutorial has a page dedicated to explain the basics of svelte here <a  href="/basics"><button class="{themeGradient} bg-clip-text hover:bg-clip-content text-transparent rounded-2xl hover:text-white hover:{themeGradient}">{" <svelte basics/> "} </button></a></p>
  <br>


<!-- <p class:scrollShow={showDIV}  class="hiddenDiv text-4xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis in laudantium maxime, quasi exercitationem! In praesentium excepturi, ea, earum eum, doloribus expedita obcaecati laudantium et ullam reiciendis voluptatum veritatis.</p>
<p class="hiddenDiv text-4xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis in laudantium maxime, quasi exercitationem! In praesentium excepturi, ea, earum eum, doloribus expedita obcaecati laudantium et ullam reiciendis voluptatum veritatis.</p>
<p  class="hiddenDiv text-4xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis in laudantium maxime, quasi exercitationem! In praesentium excepturi, ea, earum eum, doloribus expedita obcaecati laudantium et ullam reiciendis voluptatum veritatis.</p>
<p class="hiddenDiv text-4xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis in laudantium maxime, quasi exercitationem! In praesentium excepturi, ea, earum eum, doloribus expedita obcaecati laudantium et ullam reiciendis voluptatum veritatis.</p>
 -->


<style>

    .hiddenDiv{
      opacity:0;
      transition:all 2s;
    }
    .scrollShow{
      opacity:1;
      transition:all 2s;
    } 
    p{
      font-family:Arial, Helvetica, sans-serif;
    }
</style>