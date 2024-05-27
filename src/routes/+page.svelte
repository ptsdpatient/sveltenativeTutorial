<script>
    import { onMount,onDestroy } from 'svelte';
    import Header from '../lib/Header.svelte';
    import woman from '../lib/images/woman-eye.png'
    import vue from '../lib/images/vue.png'
    import react from '../lib/images/react.png'
    import angular from '../lib/images/angular.png'



 
  
    let isLoading=true;
    let mobileNav=false
    let themeButtonOn=false;
   

    let themeGradient='bg-gradient-to-r from-purple-600 to-pink-500'
    let target=0
    let showDIV = false;
    let scrollPosition = 0;

   
    function handleScroll() {
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


    onMount(()=>{
      window.scrollTo(0,0)
      setTimeout(()=>{
        isLoading=false;
      },2000)

      window.addEventListener('scroll',handleScroll)
      return ()=>{
        window.removeEventListener('scroll',handleScroll)
      }
    })    


  
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

<Header></Header>


  



<!-- line skip -->
<div class:scrollShow={showDIV} class="w-full h-full flex flex-col justify-around md:justify-center md:pt-10 md:gap-20" style="height:100vh">
  <div class="h-1/2 flex flex-col justify-start md:justify-center">
  <p class="md:text-5xl text-4xl font-bold p-5 pt-20 text-center {themeGradient} bg-clip-text text-transparent ">Welcome to the Svelte Native tutorial!</p>
  <p class="md:w-3/4 w-full md:px-0 px-3 mx-auto md:text-3xl text-2xl text-center">
    Are you looking for a tutorial to learn how to build mobile apps with Svelte? 📱✨ Well, look no further because this tutorial covers everything you need to know about mobile app development with Svelte Native! 🚀 📚</p>
  </div>

<div class="md:w-1/2 w-full h-1/4  mx-auto flex flex-col md:flex-row gap-5  text-4xl">
  <a href="setup" class="mx-auto"><button class="{themeGradient} hover:bg-clip-border md:bg-clip-text md:text-transparent px-4 py-2 border-0 rounded-2xl hover:text-white text-white hover:{themeGradient} transition-all duration-300 ease-in-out">Get Started </button> 🚀</a>
  <a  href="svelte" class="mx-auto"><button class="{themeGradient} hover:bg-clip-border md:bg-clip-text md:text-transparent px-4 py-2 border-0  rounded-2xl hover:text-white text-white hover:{themeGradient} transition-all duration-300 ease-in-out">Learn Basics </button> 📖</a>
</div>

</div>


<br>
<p class="md:text-5xl text-4xl hiddenDiv font-bold px-5  md:px-20 text-center md:text-left {themeGradient} bg-clip-text text-transparent  ">So what is Svelte Native? </p>
<br>
<p class=" md:px-20 px-8  hiddenDiv md:text-2xl md:text-left text-xl"><a href="https://svelte-native.technology"   class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">Svelte Native</a> is a framework used for building native mobile application. With Svelte Native we can leverage svelte's reactive features and high performance to create robust mobile apps. Svelte in itself is a web framework which is quite easy to learn and works compile time so the final product is likely to be faster. Native Script is a javascript framework that is used to develop mobile apps for ios and android platform with javascript frameworks like svelte, angular, react, vue or vanilla js.</p>
<div class=" w-3/4 mx-auto flex hiddenDiv text-2xl md:text-6xl font-bold md:flex-row justify-around items-center {themeGradient} bg-clip-text text-transparent ">
  <img class="md:w-1/6 md:p-4 w-1/4 p-1" src="../svelte.png" alt="html">
  +
  <img class="md:w-1/6 md:p-4 w-1/4 p-1" src="../nativescript.png" alt="native">
  =
  <img class="md:w-1/6 md:p-4 w-1/4 p-1" src="../svelte-native.png" alt="android">
</div>

<br>
<br>
<br><br>
<p class="md:text-5xl text-4xl  hiddenDiv font-bold  md:px-20 text-center md:text-right {themeGradient} bg-clip-text text-transparent ">Why pick svelte?</p>
<br>
<p class="md:px-20 hiddenDiv px-5 md:text-2xl md:text-left text-xl">Yes, why pick <a class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline" href="https://svelte.dev/">Svelte</a> over other javascript frameworks which are more popular and in demand in the tech sector? Answer is simple, for yourself. Svelte is as simple as html,css and js and with its reactive and compile time features its fast and robust, thus many developers love it. Along side with svelte kit's navigation features, svelte almost becomes invincible in the javascript framework market</p>

<br>


<div class="hiddenDiv md:w-4/5 md:px-10 w-full mx-auto flex text-2xl md:text-6xl font-bold flex-col md:flex-row justify-between items-center {themeGradient} bg-clip-text text-transparent ">
  <div class="w-full md:w-3/6 md:p-5 flex flex-row justify-around">
    <img class="md:w-1/3 w-1/4 " src={react} alt="react">
    <img class="md:w-1/3 w-1/4 " src={angular} alt="react">
    <img class="md:w-1/3 w-1/4 " src={vue} alt="react">
  </div>
  <div class="w-full md:w-3/6 flex flex-row justify-center">
  <img class="md:w-1/2 w-1/2 md:p-0 p-1" src={woman} alt="woman">
  <img class="md:w-1/4 w-1/4 md:p-0 p-1" src="../svelte.png" alt="svelte">
  </div>
</div>

<br>
<br>
<br>

<p class="md:text-5xl text-3xl px-5 hiddenDiv font-bold md:px-20  md:text-center {themeGradient} bg-clip-text text-transparent  ">Doubting Svelte or this tutorial? </p>
<br>
<p class=" md:px-20 hiddenDiv px-5  md:text-left text-2xl">Svelte is very easy to understand  and if you are new to svelte this tutorial has a page dedicated to explain the basics of svelte here <a href="/basics" class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">Svelte Basics</a> , Svelte also gets a lot of criticism on the internet for being relatively new to the market, its magical abilities because of compile time features and not being in demand in the job market.</p>
<br>
<div class="w-full hiddenDiv" style="height:40vh">
  <iframe class="w-1/3 mx-auto h-full rounded-2xl" src="https://www.youtube.com/embed/gdemDxgHtcs?si=Dnlib2Rl6voUZCbB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
<br>
<br>
<br>
<p class="md:text-4xl hiddenDiv text-4xl text-center px-5 hiddenDiv font-bold md:px-20  {themeGradient} bg-clip-text text-transparent">Looking for support?</p>
<br>


<div class="w-3/4 px-2  md:w-full mx-auto flex flex-col md:flex-row gap-10 justify-around">
  <div class="w-full md:w-1/4 gap-2  rounded-xl flex flex-col justify-around p-2 ">
      <div class="flex flex-row mx-auto gap-4 justify-center w-full">
        <img class="w-2/12 p-1" src="../svelte.png" alt="svelte">
        <p class=" text-3xl my-auto text-right {themeGradient} bg-clip-text text-transparent">Svelte JS</p>
      </div>
      <div class="w-full flex flex-col ">
        <button class="flex flex-row gap-1 justify-center text-2xl py-2 md:text-2xl my-auto items-center rounded-2xl hover:text-white hover:{themeGradient}"> <img class="w-2/12 my-auto p-1" src="../www.png" alt="svelte"> Visit Site</button>
        <button class="flex flex-row gap-1 justify-center text-2xl py-2 md:text-2xl my-auto items-center rounded-2xl hover:text-white hover:{themeGradient}"> <img class="w-2/12 my-auto p-1" src="../discord.png" alt="svelte"> Join Server</button>
        </div>
      </div>
    <div class="w-full md:w-1/4 gap-2 rounded-xl flex flex-col justify-around p-2">
    <div class="flex flex-row mx-auto gap-4 justify-center w-full">
      <img class="w-2/12" src="../svelte-native.png" alt="svelte">
      <p class=" text-3xl my-auto text-right {themeGradient} bg-clip-text text-transparent" style="white-space:nowrap;">Svelte Native</p>
    </div>
    <div class="w-full flex flex-col ">
      <button class="flex flex-row gap-1 justify-center text-2xl py-2 md:text-2xl my-auto items-center rounded-2xl hover:text-white hover:{themeGradient}"> <img class="w-2/12 my-auto p-1" src="../www.png" alt="svelte"> Visit Site</button>
      <button class="flex flex-row gap-1 justify-center text-2xl py-2 md:text-2xl my-auto items-center rounded-2xl hover:text-white hover:{themeGradient}"> <img class="w-2/12 my-auto p-1" src="../discord.png" alt="svelte"> Join Server</button>
      </div>
      
</div>  
<div class="w-full md:w-1/4 gap-4 rounded-xl flex flex-col justify-around md:p-2 ">
  <div class="flex flex-row gap-4 mx-auto justify-center w-full">
    <img class="w-2/12 rounded-3xl" src="./tanishq.png" alt="svelte">
    <p class=" text-3xl my-auto text-right {themeGradient} bg-clip-text text-transparent" style="white-space:nowrap">Tanishq Dhote</p>
  </div>
  <div class="w-full flex flex-col ">
    <button class="flex flex-row gap-1 justify-center text-2xl py-2 md:text-2xl my-auto items-center rounded-2xl hover:text-white hover:{themeGradient}"> <img class="w-2/12 my-auto p-1" src="../www.png" alt="svelte"> Visit Site</button>
    <button class="flex flex-row gap-1 justify-center text-2xl py-2 md:text-2xl my-auto items-center rounded-2xl hover:text-white hover:{themeGradient}"> <img class="w-2/12 my-auto p-1" src="../discord.png" alt="svelte"> Join Server</button>
    </div>
</div>
</div>

<br>




<br>
<div class="w-full justify-between bg-gray-800 text-white text-2xl md:text-xl text-center py-2">A tutorial made by Tanishq</div>

</div>


<style>
  
    ::selection{
      color:rgb(255, 49, 176);
    }

    .pattern{
      /* background-color: blue; */
      background-color: rgba(255, 128, 206, 0.158);
      background-image:url('../leave.png');
      background-repeat: repeat;
    }

    .hiddenDiv{
      opacity:0;
      transform:translateY(50%);
    }
    .scrollShow{
      animation: fade-out;
    } 

    @keyframes fade-out{
      0%{opacity:0;transform:translateY(100%)}
      25%{opacity:0.25;transform:translateY(75%)}
      50%{opacity:0.5;transform:translateY(50%)}
      75%{opacity:1;transform:translateY(0%)}
    }

  /* fonts */
    
</style>