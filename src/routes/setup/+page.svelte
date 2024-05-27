<script>
    import Header from "../../lib/Header.svelte";
    import {Data} from './windows'
    import {onMount} from 'svelte'
    import Prism from 'prismjs';
    import 'prismjs/themes/prism.css';
    import '../../../src/custom-prism.css';

    let themeGradient='bg-gradient-to-r from-purple-600 to-pink-500'
    let platforms=[
      {platform:'Windows',icon:"./windows.png",code:'w'},
      {platform:'Linux',icon:"./linux.png",code:'l'},
    ]

    let currentPlatformName='Windows'
    let currentPlatformImageURL='./windows.png'
    let isLoading=true,showPlatformOptions=false;
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
      Prism.highlightAll();
      setTimeout(()=>{
        isLoading=false;
      },2000)

      window.addEventListener('scroll',handleScroll)
      return ()=>{
        window.removeEventListener('scroll',handleScroll)
      }
    })    


</script>

<title>Setup</title>


<div class="w-full h-full pattern">
    <Header></Header>
    <div class="">
        <br><br>
        <div class="w-full scrollShow pt-5 flex flex-row justify-center md:text-5xl text-3xl px-5 gap-3 md:px-20"><p class="  font-bold {themeGradient} bg-clip-text text-transparent">Welcome to the Svelte Native Setup Tutorial</p>🚀</div>
        <br>

        <p class=" md:px-20 scrollShow px-5  md:text-left text-2xl">Lets start with seting up the necessary tools and utilities we need to get started with native script development, it typically includes a text editor like <a href="https://code.visualstudio.com/" class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">visual studio code</a>, a <a href="https://ubuntu.com/desktop/wsl" class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">terminal</a> to run tasks along with <a href="https://nodejs.org/" class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">nodejs</a> and <a href="https://www.python.org/" class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">python</a> for runtime and installation. In case if you find video tutorials better I recommend you watch these videos.</p>        
        
        <br>

        <div class="w-full scrollShow flex pt-5 flex-row justify-center gap-20 " style="height:40vh">
          <iframe class="w-1/4  h-full rounded-2xl" src="https://www.youtube.com/embed/hTWGWPG3aWQ?si=3R_-fjlMC2T-MZ2L" title="Svelte Native installation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe class="w-1/4  h-full rounded-2xl" src="https://www.youtube.com/embed/jyDdEI1Vvd4?si=raxObGO8IsPsEhua" title="Svelte Native installation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <br><br>

        <p class="hiddenDiv md:text-4xl text-3xl px-5 font-bold md:px-20  md:text-left {themeGradient} bg-clip-text text-transparent  ">Mobile setup : </p>
        
        <br>
        <p class=" md:px-20 px-5 hiddenDiv md:text-left text-2xl">Since you are starting with android app development by using a desktop you need to download <a href="https://preview.nativescript.org" class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">Native Preview</a> app developed by the native script team to run the native script app on android/ ios in development environment</p>        
        <br>
        <div class="w-2/3 px-10 hiddenDiv mx-auto flex flex-row justify-around">
            <a href="https://play.google.com/store/apps/details?id=org.nativescript.preview.android" class="w-1/3 h-full"><img class="w-full h-full" src="./playstore.png" alt="playstore"></a>
            <a href="https://apps.apple.com/us/app/nativescript-preview/id1264484702" class="w-1/3 h-full"><img class="w-full h-full"  src="./applestore.png" alt="playstore"></a>
        </div>
        <br>
        <br>
        <div class="w-2/3 gap-2 mx-auto hiddenDiv flex flex-row justify-around text-8xl items-center">
          <img class="w-4/12 hiddenDiv" src="./shellQR.png" alt="">
          <p class=" md:text-left hiddenDiv {themeGradient} bg-clip-text text-transparent  ">+</p>
          <img class="w-3/12 hiddenDiv" src="./scanQR.png" alt="">
          <p class=" md:text-left hiddenDiv {themeGradient} bg-clip-text text-transparent  ">=</p>
          <img  class="w-3/12 hiddenDiv" src="./android.png" alt="">
          <p class="hiddenDiv">😻</p>
        </div>
         <br>
         <br>
         <br>


        
        <p class="hiddenDiv md:text-5xl text-3xl px-5 font-bold md:px-20  md:text-center {themeGradient} bg-clip-text text-transparent  ">Lets get started!</p>
        <br><br>

        <div class="w-1/5 relative mx-auto rounded-xl bg-white transition-all duration-300 ease-in-out">
        <button on:click={()=>showPlatformOptions=!showPlatformOptions} class="flex flex-row justify-between items-center  border-1 border-gray-300"><div class="w-full flex flex-row items-center"><img class="w-1/3 px-2" src={currentPlatformImageURL} alt=""><p class="text-2xl {themeGradient} bg-clip-text text-transparent transition-all duration-300 ease-in-out">{currentPlatformName}</p></div><p class="text-2xl p-2 px-4 text-white {themeGradient} bg-clip-text text-transparent" >{showPlatformOptions?"⋏":"⋎"}</p></button>
        <div class="w-full {showPlatformOptions?"absolute my-1":"hidden"} z-10 mx-auto overflow-y-auto rounded-xl" >
          {#each platforms as platform}
          <button on:click={()=>{currentPlatformImageURL=platform.icon;currentPlatformName=platform.platform;showPlatformOptions=false;}} class="flex flex-row items-center text-2xl bg-white rounded-xl p-2 border-1 border-gray-300" style="transform:scale(0.85)"><img class="w-1/4 px-2" src={platform.icon} alt=""><p class=" t {themeGradient} bg-clip-text text-transparent">{platform.platform}</p></button>
          {/each}
        </div>
        </div>

       

        {#each Data as data}
        <div class="w-1/2 mx-auto flex flex-row">
          <pre class="text-2xl p-3">{data.markdown}</pre>
        </div>


         {#if data.terminal}
         <div class="w-1/2 rounded-xl  bg-opacity-80 mx-auto flex flex-col" style="background-color:#282c34;">
            
              <div class="w-full px-5 text-xl pt-1 flex bg-gray-900 rounded-xl text-gray-300 flex-row justify-between items-center py-auto my-auto">
                <pre class="text-3xl" style="cursor:pointer">⊡</pre>
                <p class="text-center">Terminal</p>
                <pre class="text-3xl" style="cursor:pointer">⊟ ⊠</pre>
              </div>

            <div class="w-full flex flex-row">
                <div class="flex flex-col py-2">
                  {#each data.code as line }
                  <pre><code class="language-" style="user-select:none;padding-right:0;margin-right:0">$</code></pre>
                  {/each}
                </div>

                <div class="relative w-full h-full py-2">
                <button class="flex flex-row p-2 border-0 absolute text-gray-400 hover:text-white my-1" style="top:0%;right:0%"><pre>copy 📎</pre></button>
                {#each data.code as line}
                <pre><code class="language- text-2xl">{line}</code></pre>
                {/each}
                  
                </div>
            </div>
          </div>
          {:else}

          <div class="w-1/2 rounded-xl bg-black px-5 bg-opacity-80 mx-auto py-3 flex flex-col justify-around relative " style="min-height:3rem" >
            <button class="flex flex-row p-2 border-0 absolute text-gray-400 hover:text-white my-1 " style="top:0%;right:0%"><pre>copy 📎</pre></button>
           {#each data.code as line,index}
            <div>
              <pre><code class="language-js text-xl ">{line}</code></pre>
            </div>
            {/each}
          </div>
          {/if}
       

        
        <div class="w-1/2 mx-auto flex flex-row">
          <pre class="text-2xl p-3" style="whitespace:nowrap">{data.output}</pre>
        </div>
        
        {/each}
        

    </div>
</div>

<style>
    ::selection{
      color:rgb(255, 49, 176);
    }
    .pattern{
      /* background-color: blue; */
      background-color: rgba(255, 128, 206, 0.158);
      background-image:url('../../leave.png');
      background-repeat: repeat;
    }

    .hiddenDiv{
      opacity:0;
      transform:translateY(50%);
    }
    .scrollShow{
      animation: fade-out ;
    } 

    @keyframes fade-out{
      0%{opacity:0;transform:translateY(100%)}
      25%{opacity:0.25;transform:translateY(75%)}
      50%{opacity:0.5;transform:translateY(50%)}
      75%{opacity:1;transform:translateY(0%)}
     
    }
  /* fonts */
    
</style>