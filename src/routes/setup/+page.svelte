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
        
        <div class="w-1/2 flex flex-row justify-center items-center mx-auto">
        <p class="{themeGradient} px-5 bg-clip-text text-right text-transparent text-3xl">Platform : </p>
        <div class="w-1/3 relative rounded-xl  transition-all duration-300 ease-in-out">
        <button on:click={()=>showPlatformOptions=!showPlatformOptions} class="flex flex-row justify-between bg-white rounded-xl items-center border-1 border-gray-300"><div class="w-full flex flex-row items-center"><img class="w-1/3 px-2" src={currentPlatformImageURL} alt=""><p class="text-2xl {themeGradient} bg-clip-text text-transparent transition-all duration-300 ease-in-out">{currentPlatformName}</p></div><p class="text-2xl p-2 px-4 text-white {themeGradient} bg-clip-text text-transparent" >{showPlatformOptions?"⋏":"⋎"}</p></button>
        <div class:showPlatformClass={showPlatformOptions} class="w-full {showPlatformOptions?"absolute my-1 ":"hidden"} z-10 mx-auto overflow-y-auto rounded-xl" >
          {#each platforms as platform}
          <button on:click={()=>{currentPlatformImageURL=platform.icon;currentPlatformName=platform.platform;showPlatformOptions=false;}} class="flex flex-row items-center text-2xl bg-white  rounded-xl p-2 border-1 border-gray-300" style="transform:scale(0.85)"><img class="w-1/4 px-2" src={platform.icon} alt=""><p class=" t {themeGradient} bg-clip-text text-transparent">{platform.platform}</p></button>
          {/each}
        </div>
        </div>
      </div>
       

        <br><br>

        {#each Data as data,dataIndex}


        <div class="w-2/3 mx-auto py-5">
          <p class="{themeGradient} text-transparent bg-clip-text text-4xl text-left ">{dataIndex+1}. {data.title}</p>
        </div>
        <!-- markdown -->

        <div class="w-2/3 mx-auto flex flex-row p-3 rounded-xl bg-white bg-opacity-70" style="box-shadow:2px 2px 4px 1px gray"> 
          <p class="text-2xl px-4">{data.markdown}</p>
        </div>

        <!-- code -->

        <br>

         {#if data.terminal}
         <div class="w-1/2 rounded-xl  bg-opacity-80 mx-auto flex flex-col" style="background-color:#282c34;">
            
              <div class="w-full px-5 text-xl pt-1 flex bg-gray-900 rounded-xl text-gray-500 flex-row justify-between items-center py-auto my-auto">
                <p class="text-3xl hover:text-green-500 transition-all duration-300" style="cursor:pointer">⊡</p>
                <p class="text-center text-gray-300">Terminal</p>
                <div class="flex flex-row gap-3">
                  <p class="text-3xl hover:text-yellow-300 transition-all duration-300" style="cursor:pointer">⊟</p>
                  <p class="text-3xl hover:text-red-600 transition-all duration-300" style="cursor:pointer">⊠</p>
                </div>
              </div>

            <div class="w-full flex flex-row">
                <div class="flex flex-col py-3 px-3">
                  {#each data.code as line }
                  <pre><code class="language-" style="user-select:none;padding-right:0;margin-right:0">$</code></pre>
                  {/each}
                </div>

                <div class="relative w-full h-full py-3">
                <button class="flex flex-row p-2 border-0 absolute text-gray-400 hover:text-white my-1 text-base" style="top:0%;right:0%"><p>copy 📎</p></button>
                {#each data.code as line}
                <pre><code class="language-bash text-2xl">{line}</code></pre>
                {/each}
                  
                </div>
            </div>
          </div>
          {:else}

          <div class="w-1/2 rounded-xl bg-black px-5 bg-opacity-80 mx-auto py-3 flex flex-col justify-around relative " style="min-height:3rem" >
            <button class="flex flex-row p-2 border-0 absolute text-gray-400 hover:text-white my-1 transition-all duration-300" style="top:0%;right:0%"><p>copy 📋</p></button>
           {#each data.code as line,index}
            <div>
              <pre><code class="language-js text-xl ">{line}</code></pre>
            </div>
            {/each}
          </div>
          {/if}
       
          <br>
        <!-- output -->
          
        <div class="w-2/3 mx-auto py-5">
          <p class="{themeGradient} text-transparent bg-clip-text text-2xl text-left ">Result : </p>
        </div>
      
        <div class="w-1/2 mx-auto">
          <img class="w-full rounded-xl" src={"./output-"+(dataIndex+1)+".png"} alt="output">
        </div>

        <br>

        <div class="w-2/3 mx-auto flex flex-row p-3 rounded-xl bg-white bg-opacity-70" style="box-shadow:2px 2px 4px 1px gray"> 
          <p class="text-2xl px-4">{data.output
          
          }</p>
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
    .showPlatformClass{
      transform:scale(2.2);
      transition:all 2s;
    }
    @keyframes scaleUp{
      0%{opacity:0;transform:scaleY(0.0)}
      25%{opacity:0.25;transform:scaleY(0.25)}
      50%{opacity:0.5;transform:scaleY(0.5)}
      75%{opacity:1;transform:scaleY(1)}
     
    }
    @keyframes fade-out{
      0%{opacity:0;transform:translateY(100%)}
      25%{opacity:0.25;transform:translateY(75%)}
      50%{opacity:0.5;transform:translateY(50%)}
      75%{opacity:1;transform:translateY(0%)}
     
    }
  /* fonts */
    
</style>