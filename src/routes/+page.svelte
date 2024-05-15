<script>
    import { onMount } from 'svelte';
    let pagination =[
    {name:'home',url:'./home.png',link:'/',description:'navigate back to home page'},
    {name:'basic setup',url:'./setup.png',link:'/setup',description:'learn how to setup svelte native in your pc'},
    {name:'svelte basics',url:'./svelte.png',link:'/svelte',description:'learn the basic svelte concept'},
    {name:'svelte native',url:'./svelte-native.png',link:'/native',description:'learn svelte native tags and attribute'},
    {name:'calculator app',url:'./calculator.png',link:'/calculator',description:'create a calculator app in few lines of code'},
    {name:'todo app',url:'./todo.png',link:'/todo',description:'learn to make a todo list app'},

    ]
    
    // 'home','basic setup','svelte basics','svelte native','calculator app','todo app']
    let mobileNav=false
    let themeButtonOn=false;
    let target=0
    let showDIV = false;
    let currentScroll=0;
    let scrollPosition = 0;
    let themes=[
      {name:'pink',value:'bg-gradient-to-r from-purple-600 to-pink-600'},
      {name:'cyan',value:'bg-gradient-to-r from-teal-400 to-blue-600'},
      {name:'gold',value:'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600'},
      {name:'green',value:'bg-gradient-to-r from-green-400 via-green-500 to-green-600'},
      {name:'red',value:'bg-gradient-to-r from-red-600  to-pink-600'},
      {name:'blue',value:'bg-gradient-to-r from-cyan-500 to-blue-500'}      
    ]
  let themeGradient=themes[Math.floor(Math.random() * 6)].value
    let showNavIcon=false;
    let showNavData=''
    let showNavDescription=''
    let showNavImageURL=''


    let directionScrolled='down'
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
        // window.alert(element.classList)
        showDIV=true
      }
    }
    }


    onMount(() => {
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });





  
</script>


<!-- <div class="fixed text-2xl top-0 left-0"  on:scroll={handleScroll}>
  {scrollPosition} , {target} , {directionScrolled}
</div> -->
<div class="{directionScrolled=='up'?"fixed z-10":""} w-full">
<div class="flex flex-row w-full justify-between bg-gray-800">

  <button>
    <p class="text-2xl p-2 px-4 font-bold   {themeGradient} text-transparent bg-clip-text" style="white-space:nowrap">NS Tutorial</p>
  </button>



<div style="" class="tutorialNavigation md:w-full text-center {!mobileNav?"hidden":""} absolute md:relative right-0 w-1/3  md:flex flex-col md:flex-row  justify-around">
{#each pagination as page}
<a href="/{page.link}"><button on:mouseenter={()=>{showNavIcon=true;showNavData=page.name;showNavDescription=page.description;showNavImageURL=page.url}} on:mouseleave={()=>{showNavIcon=false;}} class=" text-gray-300  px-4 py-2 rounded-2xl text-xl hover:  hover:{themeGradient} hover:text-transparent hover:bg-clip-text transition duration-300 ease-in-out">{page.name}</button></a>
  {/each}    
</div>

<select class="text-xl bg-gray-800 text-gray-300 outline-none {themeGradient}">
  {#each themes as theme}
    <option on:click={()=>themeGradient=theme.value}>{theme.name}</option>
  {/each}
</select>

</div>
<div class="bg-black bg-opacity-80 w-full flex flex-col justify-center {showNavIcon?" transition duration-600 ease-in-out":"hidden"}" style="height:100vh;">
 <div class="w-full flex flex-row justify-center"><img class="w-1/6 p-6" src={showNavImageURL} alt={showNavData}></div>
  <div class="w-full flex flex-row justify-center">
  <button class="text-4xl text-white rounded-2xl px-4 py-2 {themeGradient}"> {"<"+showNavData+"/>"}</button>
 </div> 
 <p class="w-full py-6 text-3xl text-white text-center">{showNavDescription}</p>
 
</div>
</div>



<div style="height:100vh"></div>

<p class="text-3xl text-bold p-5 text-center ">Welcome to the Svelte Native tutorial, android app develpment made easier than ever</p>

<p class:scrollShow={showDIV}  class="hiddenDiv text-4xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis in laudantium maxime, quasi exercitationem! In praesentium excepturi, ea, earum eum, doloribus expedita obcaecati laudantium et ullam reiciendis voluptatum veritatis.</p>
<p class="hiddenDiv text-4xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis in laudantium maxime, quasi exercitationem! In praesentium excepturi, ea, earum eum, doloribus expedita obcaecati laudantium et ullam reiciendis voluptatum veritatis.</p>
<p  class="hiddenDiv text-4xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis in laudantium maxime, quasi exercitationem! In praesentium excepturi, ea, earum eum, doloribus expedita obcaecati laudantium et ullam reiciendis voluptatum veritatis.</p>
<p class="hiddenDiv text-4xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis in laudantium maxime, quasi exercitationem! In praesentium excepturi, ea, earum eum, doloribus expedita obcaecati laudantium et ullam reiciendis voluptatum veritatis.</p>





<style>
 

 *:focus {
    outline: none !important;
}

    .hiddenDiv{
      opacity:0;
      transform:translateY(50%);
      transition:all 1s;
    }
    .scrollShow{
      opacity:1;
      transform:translateY(0);
      transition:all 1s;
} 
   




    .tutorialNavigation>button{
        transition:0.3s all ease-in-out;
    }
    .tutorialNavigation>button:hover,.tutorialNavigation>button:focus{
        transform:scale(0.9);
        transition:0.3s all ease-in-out;
    }
</style>