<script>
    import { onMount,onDestroy } from 'svelte';
    import woman from '../lib/images/woman-eye.png'
    import vue from '../lib/images/vue.png'
    import react from '../lib/images/react.png'
    import angular from '../lib/images/angular.png'


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
    window.scrollTo(0,0)
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
<!-- <div class="{isLoading?"fixed":"hidden"}" style=";height:100vh;width:100vw;">
  <div class="{themeGradient} flex flex-col justify-center w-full h-full">
    <p style="place-items:center;" class="w-full text-center text-5xl px-4 py-2 rounded-xl font-bold text-gray-300">The Svelte Native Tutorial</p>
    <div class="w-1/2 mx-auto"><p class="text-xl text-right text-gray-300">by Tanishq Dhote</p></div>
  </div>
</div> -->

<title>Home</title>


<!-- header -->
<div class="w-full h-full pattern bg-opacity-50">



<div class="{isLoading?"hidden":""} {directionScrolled=='up'?"fixed z-10":""} w-full">
  <div class="flex flex-row w-full justify-between bg-gray-800">
  
      <button>
        <p class="text-2xl p-2 px-4 font-bold {themeGradient} text-transparent bg-clip-text" style="white-space:nowrap">SN Tutorial</p>
      </button>
  
  
  
      <button on:click={()=>mobileNav=!mobileNav} class="md:hidden text-gray-300 w-1/6 px-4 py-2 rounded-2xl text-3xl hover:  hover:{themeGradient} hover:text-transparent hover:bg-clip-text transition duration-300 ease-in-out">
        ≕
      </button>
  
      <button on:mouseleave={()=>showNavIcon=false} class="hidden md:flex"><div class="tutorialNavigation md:w-full text-center hidden w-1/3  md:flex flex-col md:flex-row justify-around">
      {#each pagination as page}
      <a class="" href="/{page.link}"><button on:mouseenter={()=>{showNavIcon=true;showNavData=page.name;showNavDescription=page.description;showNavImageURL=page.url}} class=" text-gray-300 px-4 py-2 rounded-2xl text-xl hover:  hover:{themeGradient} hover:text-transparent hover:bg-clip-text transition duration-300 ease-in-out">{page.name}</button></a>
      {/each}    
      </div>
      </button>
  

  </div>
  
  <div class="bg-black bg-opacity-80 w-full hidden  flex-col justify-center {showNavIcon?"md:flex":"hidden"}" style="height:100vh;background-image:url('../leave.png');">
      <div class="w-full flex flex-row justify-center"><img class="w-1/6 p-6" src={showNavImageURL} alt={showNavData}></div>
        <div class="w-full flex flex-row justify-center">
        <button class="text-4xl text-white rounded-2xl px-4 py-2 {themeGradient}"> {"<"+showNavData+"/>"}</button>
      </div> 
      <p class="w-full py-6 text-3xl text-white text-center">{showNavDescription}</p>
  </div>
  
  <button class="w-full h-full flex flex-col bg-gray-800 py-10 {!mobileNav?"hidden":""} " style="height:100vh">
    <div class="w-full h-1/2 text-center md:hidden flex flex-col justify-around">
      {#each pagination as page}
      <a class="w-2/3  my-auto mx-auto font-bold" href="/{page.link}"><button on:click={()=>{mobileNav=false}}  class="{themeGradient}  text-2xl hover:bg-clip-border md:bg-clip-text md:text-transparent px-4 py-2 border-0 rounded-2xl hover:text-white text-white hover:{themeGradient} transition-all duration-300 ease-in-out">{"<"+page.name+"/>"}</button></a>
      {/each}    
    </div>
  </button>

  </div>
  



<!-- line skip -->
<div class:scrollShow={showDIV} class="w-full h-full flex flex-col justify-center md:gap-10" style="height:100vh">
  <div class="h-3/4 flex flex-col justify-center md:justify-center">
  <p class="md:text-5xl text-4xl font-bold p-5 pt-20 text-center {themeGradient} bg-clip-text text-transparent ">Welcome to the Svelte Native tutorial!</p>
  <p class="md:w-3/4 w-full md:px-0 px-3 mx-auto md:text-3xl text-2xl text-center">
    Are you looking for a tutorial to learn how to build mobile apps with Svelte? 📱✨ Well, look no further because this tutorial covers everything you need to know about mobile app development with Svelte Native! 🚀 📚</p>
  </div>

<div class="md:w-1/2 w-full h-1/4  mx-auto flex flex-col md:flex-row gap-5  text-4xl">
  <a href="2" class="mx-auto"><button class="{themeGradient} hover:bg-clip-border md:bg-clip-text md:text-transparent px-4 py-2 border-0 rounded-2xl hover:text-white text-white hover:{themeGradient} transition-all duration-300 ease-in-out">Get Started </button> 🖥</a>
  <a  href="2" class="mx-auto"><button class="{themeGradient} hover:bg-clip-border md:bg-clip-text md:text-transparent px-4 py-2 border-0  rounded-2xl hover:text-white text-white hover:{themeGradient} transition-all duration-300 ease-in-out">Learn Basics </button> 📖</a>
</div>

</div>


<br>
<p class="md:text-5xl text-4xl  hiddenDiv font-bold  md:px-20 text-center md:text-left {themeGradient} bg-clip-text text-transparent  ">So what is Svelte Native? </p>
<br>
<p class=" md:px-20 hiddenDiv px-5 md:text-2xl md:text-left text-xl"><a href="https://svelte-native.technology"   class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">Svelte Native</a> is a framework used for building native mobile application. With Svelte Native we can leverage svelte's reactive features and high performance to create robust mobile apps. Svelte in itself is a web framework which is quite easy to learn and works compile time so the final product is likely to be faster. Native Script is a javascript framework that is used to develop mobile apps for ios and android platform with javascript frameworks like svelte, angular, react, vue or vanilla js.</p>
<br>
<div class="hiddenDiv w-3/4 mx-auto flex text-2xl md:text-6xl font-bold md:flex-row justify-around items-center {themeGradient} bg-clip-text text-transparent ">
  <img class="md:w-1/6 md:p-4 w-1/4 p-1" src="../svelte.png" alt="html">
  +
  <img class="md:w-1/6 md:p-4 w-1/4 p-1" src="../nativescript.png" alt="native">
  =
  <img class="md:w-1/6 md:p-4 w-1/4 p-1" src="../svelte-native.png" alt="android">
</div>

<br>
<br>
<br>

<p class="md:text-5xl text-4xl  hiddenDiv font-bold  md:px-20 text-center md:text-right {themeGradient} bg-clip-text text-transparent ">Why pick svelte?</p>
<br>
<p class="md:px-20 hiddenDiv px-5 md:text-2xl md:text-left text-xl">Yes, why pick <a class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline" href="https://svelte.dev/">Svelte</a> over other javascript frameworks which are more popular and in demand in the tech sector? Answer is simple, for yourself. Svelte is as simple as html,css and js and with its reactive and compile time features its fast and robust, thus many developers love it. Along side with svelte kit's navigation features, svelte almost becomes invincible in the javascript framework market</p>

<br>
<br>

<div class="hiddenDiv md:w-4/5 md:px-10 w-full mx-auto flex text-2xl md:text-6xl font-bold flex-col md:flex-row justify-between items-center {themeGradient} bg-clip-text text-transparent ">
  <div class="w-full md:w-3/6 md:p-5 flex flex-row justify-around">
    <img class="md:w-1/3 w-1/4 " src={react} alt="react">
    <img class="md:w-1/3 w-1/4 " src={angular} alt="react">
    <img class="md:w-1/3 w-1/4 " src={vue} alt="react">
  </div>
  /
  <div class="w-full md:w-3/6 flex flex-row justify-center">
  <img class="md:w-1/2 w-1/2 md:p-0 p-1" src={woman} alt="woman">
  <img class="md:w-1/4 w-1/4 md:p-0 p-1" src="../svelte.png" alt="svelte">
  </div>
</div>

<br>
<br>
<br>

<p class="md:text-4xl text-3xl px-5 hiddenDiv font-bold md:px-20  md:text-center {themeGradient} bg-clip-text text-transparent  ">Do you need any prior Svelte experience to get started with Svelte Native?</p>
<br>
<p class=" md:px-20 hiddenDiv px-5  md:text-center text-2xl">Svelte is very easy to understand  and if you are new to svelte this tutorial has a page dedicated to explain the basics of svelte here <a href="/basics" class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">Svelte Basics</a></p>
<br>
<br>
<p class="md:text-4xl text-3xl px-5 hiddenDiv font-bold md:px-20  md:text-center {themeGradient} bg-clip-text text-transparent">Looking for support?</p>
<br>


<div class="w-full mx-auto flex flex-col md:flex-row gap-10 justify-around">
  <div class="w-full md:w-1/4 gap-2  rounded-xl flex flex-col justify-around p-2 ">
      <div class="flex flex-row mx-auto gap-4 justify-center w-full">
        <img class="w-1/4 p-1" src="../svelte.png" alt="svelte">
        <p class=" text-4xl my-auto text-right {themeGradient} bg-clip-text text-transparent">Svelte JS</p>
      </div>
      <div class="w-full flex flex-col ">
        <button class="flex flex-row gap-1 justify-center text-2xl my-auto items-center rounded-2xl hover:text-white hover:{themeGradient}"> <img class="w-2/12 my-auto p-1" src="../www.png" alt="svelte"> Visit Site</button>
        <button class="flex flex-row gap-1 justify-center text-2xl my-auto items-center rounded-2xl hover:text-white hover:{themeGradient}"> <img class="w-2/12 my-auto p-1" src="../discord.png" alt="svelte"> Join Server</button>
        </div>
</div>
  <div class="w-full md:w-1/4 gap-2 rounded-xl flex flex-col justify-around p-2">
    <div class="flex flex-row mx-auto gap-4 justify-center w-full">
      <img class="w-1/4" src="../svelte-native.png" alt="svelte">
      <p class=" text-4xl my-auto text-right {themeGradient} bg-clip-text text-transparent" style="white-space:nowrap;">Svelte Native</p>
    </div>
    <div class="w-full flex flex-col ">
      <button class="flex flex-row gap-1 justify-center text-2xl my-auto items-center rounded-2xl hover:text-white hover:{themeGradient}"> <img class="w-2/12 my-auto p-1" src="../www.png" alt="svelte"> Visit Site</button>
      <button class="flex flex-row gap-1 justify-center text-2xl my-auto items-center rounded-2xl hover:text-white hover:{themeGradient}"> <img class="w-2/12 my-auto p-1" src="../discord.png" alt="svelte"> Join Server</button>
      </div>
</div>  

</div>

<br>
<div class="w-full md:w-1/4 gap-2  mx-auto rounded-xl flex flex-col justify-between p-2">
  <div class="flex flex-row mx-auto gap-4 justify-center w-full">
    <img class="w-1/3 rounded-3xl" src="./tanishq.png" alt="svelte">
    <p class=" text-4xl my-auto text-right {themeGradient} bg-clip-text text-transparent" style="white-space:nowrap">Tanishq Dhote</p>
  </div>
  <div class="w-full flex flex-col ">
    <button class="flex flex-row gap-1 justify-center text-2xl my-auto items-center rounded-2xl hover:text-white hover:{themeGradient}"> <img class="w-2/12 my-auto p-1" src="../www.png" alt="svelte"> Visit Site</button>
    <button class="flex flex-row gap-1 justify-center text-2xl my-auto items-center rounded-2xl hover:text-white hover:{themeGradient}"> <img class="w-2/12 my-auto p-1" src="../discord.png" alt="svelte"> Join Server</button>
  </div>
</div>



<br>



<!-- <p class:scrollShow={showDIV}  class="hiddenDiv text-4xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis in laudantium maxime, quasi exercitationem! In praesentium excepturi, ea, earum eum, doloribus expedita obcaecati laudantium et ullam reiciendis voluptatum veritatis.</p>
<p class="hiddenDiv text-4xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis in laudantium maxime, quasi exercitationem! In praesentium excepturi, ea, earum eum, doloribus expedita obcaecati laudantium et ullam reiciendis voluptatum veritatis.</p>
<p  class="hiddenDiv text-4xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis in laudantium maxime, quasi exercitationem! In praesentium excepturi, ea, earum eum, doloribus expedita obcaecati laudantium et ullam reiciendis voluptatum veritatis.</p>
<p class="hiddenDiv text-4xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis in laudantium maxime, quasi exercitationem! In praesentium excepturi, ea, earum eum, doloribus expedita obcaecati laudantium et ullam reiciendis voluptatum veritatis.</p>
 -->
</div>

<style>
  ::selection{
    color:rgb(255, 49, 176);
  }
    .pattern{
      /* background-color: blue; */
      background-color: rgba(255, 79, 182, 0.089);
      background-image:url('../leave.png');
      background-repeat: repeat;
    }
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