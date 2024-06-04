<script>
    import Header from "../../lib/Header.svelte";
    import {Data} from './windows'
    import {onMount} from 'svelte'
    import Prism from 'prismjs';
    import Footer from "../../lib/Footer.svelte";
  
    import 'prismjs/themes/prism.css';
    import '../../../src/custom-prism.css';

    let themeGradient='bg-gradient-to-r from-purple-600 to-pink-500'
    let platforms=[
      {platform:'Windows',icon:"./windows.png",code:'w'},
      {platform:'Linux',icon:"./linux.png",code:'l'},
    ]

    let currentPlatformName='Windows'
    let currentPlatformImageURL='./windows.png'
    let showPlatformOptions=false;
    let target=0
    let showDIV = false;
    let scrollPosition = 0;
    let showOutput=false
    let showOutputUrl=''

    function imageDisplay(url){
      showOutput=true;
      showOutputUrl=url
    }


    function handleScroll() {
      scrollPosition = window.scrollY;
      const element = document.querySelector('.hiddenDiv');
      if(element){
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
    }


    onMount(()=>{
      window.scrollTo(0,0)
      Prism.highlightAll();
  

      window.addEventListener('scroll',handleScroll)
      return ()=>{
        window.removeEventListener('scroll',handleScroll)
      }
    })    


</script>

<title>Setup</title>

<button on:click={()=>showOutput=false} class="w-full h-full fixed  bg-black bg-opacity-70 z-30 overflow-x-auto {showOutput?"flex flex-col scaleAnim justify-center":"hidden"} ">
  <img class="h-full w-auto object-contain transform md:rotate-0 rotate-90 md:scale-90 scale-150" src={showOutputUrl} alt={showOutputUrl}>
</button>

<div class="w-full h-full pattern">
    <Header></Header>
    <div class="">
        <br><br><br><br>
        <div class="w-full scrollShow py-1 flex flex-row justify-center md:text-5xl text-4xl px-5 md:gap-3 md:px-20"><p class="  font-bold {themeGradient} bg-clip-text text-transparent">Welcome to the Svelte Native Setup Tutorial</p>🚀</div>
        <br>

        <p class=" md:px-20 scrollShow px-5  md:text-left text-2xl">Lets start with seting up the necessary tools and utilities we need to get started with native script development, it typically includes a text editor like <a href="https://code.visualstudio.com/" class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">visual studio code</a>, a <a href="https://ubuntu.com/desktop/wsl" class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">terminal</a> to run tasks along with <a href="https://nodejs.org/" class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">nodejs</a> and <a href="https://www.python.org/" class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">python</a> for runtime and installation. In case if you find video tutorials better I recommend you watch these videos.</p>        
        
        <br>
        <div class="w-full scrollShow flex pt-5 flex-col md:flex-row justify-center gap-10 md:gap-20 px-10 md:h-52 h-auto">
          <iframe class="w-full md:w-1/4 h-44 md:h-full rounded-2xl transform hover:scale-95 transition-all duration-300 hover:shadow-xl" src="https://www.youtube.com/embed/hTWGWPG3aWQ?si=3R_-fjlMC2T-MZ2L" title="Svelte Native installation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe class="w-full md:w-1/4 h-44 md:h-full rounded-2xl transform hover:scale-95 transition-all duration-300 hover:shadow-xl" src="https://www.youtube.com/embed/jyDdEI1Vvd4?si=raxObGO8IsPsEhua" title="Svelte Native installation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <br><br>

        <p class="hiddenDiv md:text-4xl text-4xl px-5 font-bold md:px-20  md:text-left {themeGradient} bg-clip-text text-transparent  ">Mobile setup : </p>
        
        <br>
        <p class=" md:px-20 px-5 hiddenDiv md:text-left text-2xl">Since you are starting with android app development by using a desktop you need to download <a href="https://preview.nativescript.org" class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">Native Preview</a> app developed by the native script team to run the native script app on android/ ios in development environment</p>        
        <br>
        <div class="w-3/4 md:w-2/3 px-7 hiddenDiv mx-auto flex flex-col md:flex-row justify-around gap-5 group items-center">
            <a href="https://play.google.com/store/apps/details?id=org.nativescript.preview.android" class="w-full md:w-1/3 h-full transform hover:scale-95 transition-all duration-300  hover:shadow-xl"><img class="w-full h-full hover:scale-90" src="./playstore.png" alt="playstore"></a>
            <a href="https://apps.apple.com/us/app/nativescript-preview/id1264484702" class="w-full md:w-1/3 h-full hover:scale-80 transform hover:scale-95 transition-all duration-300  hover:shadow-xl" ><img class="w-full h-full"  src="./applestore.png" alt="playstore"></a>
        </div>

        <br>
        <br>
        <div class="w-full px-4 md:w-2/3 gap-1 md:gap-2 mx-auto hiddenDiv flex flex-row justify-around text-4xl md:text-8xl items-center">
          <img class="w-4/12 " src="./shellQR.png" alt="">
          <p class=" md:text-left  {themeGradient} bg-clip-text text-transparent  ">+</p>
          <img class="w-3/12 " src="./scanQR.png" alt="">
          <p class=" md:text-left  {themeGradient} bg-clip-text text-transparent  ">=</p>
          <img  class="w-3/12 " src="./android.png" alt="">
        </div>
         <br>
         <br>
         <br>


        
        <p class="hiddenDiv md:text-5xl text-4xl px-5 font-bold md:px-20  md:text-center {themeGradient} bg-clip-text text-transparent  ">Lets get started!</p>
        <br><br>
        
        
      
    

        <br><br>

        {#each Data as data,dataIndex}


        <!-- markdown -->

        <div class="w-11/12 hiddenDiv mx-auto px-2 md:w-2/3 flex flex-col p-4 rounded-xl bg-white bg-opacity-40 gap-2" style="box-shadow:2px 2px 4px 1px gray;"> 
          <p class="{themeGradient} px-4 py-1 text-transparent bg-clip-text text-3xl text-left font-bold">{dataIndex+1}. {data.title}</p>
          <p class="text-xl md:text-2xl px-5">{data.markdown}</p>
        </div>

        <!-- code -->

        <br>

         {#if data.terminal}
         <div class="w-11/12 hiddenDiv md:w-1/2 rounded-xl  bg-opacity-80 mx-auto flex flex-col" style="background-color:#282c34;">
            
              <div class="w-full px-5 text-xl pt-1 flex bg-gray-900 rounded-xl text-gray-500 flex-row justify-between items-center py-auto my-auto">
                <p class="text-3xl hover:text-green-500 transform hover:scale-90 transition-all duration-200" style="cursor:pointer">⊡</p>
                <p class="text-center text-gray-300">Terminal</p>
                <div class="flex flex-row gap-3">
                  <p class="text-3xl hover:text-yellow-300 transform hover:scale-90 transition-all duration-200" style="cursor:pointer">⊟</p>
                  <p class="text-3xl hover:text-red-600  transform hover:scale-90 transition-all duration-200" style="cursor:pointer">⊠</p>
                </div>
              </div>
            <div class="w-full flex flex-row overflow-x-auto">
               
                <div class="relative w-full h-full py-3 md:mr-0">
                <button class="hidden md:flex flex-row p-2 border-0 mx-2 absolute text-gray-400 hover:text-white my-1 hover:bg-gray-700 transform hover:scale-95 transition-all duration-300 rounded-xl" style="top:0%;right:0%;"><pre>copy 📎</pre></button>
               
                <pre class="text-gray-300 px-6 " style="overflow-x:hidden;">{data.code}</pre>
                         
                </div>
            </div>
          </div>
          {:else}
          <div class="w-11/12 md:w-1/2 hiddenDiv rounded-xl px-5  mx-auto py-3 flex flex-col justify-around relative  " style="min-height:3rem;background-color:#282c34;overflow-x:auto" >
            <button class="hidden md:flex flex-row p-2 px-3 border-0 mx-2 absolute text-gray-400 hover:text-white my-2 hover:bg-gray-700 transform hover:scale-95 transition-all duration-300 rounded-xl" style="top:0%;right:0%;"><pre>copy 📎</pre></button>
            <pre class="whitespace-nowrap" style=""><code class="language-js text-xl" >{data.code}</code></pre>

          </div>
          {/if}
          <br>
        <!-- output -->
          
        <div class="w-11/12 hiddenDiv md:w-2/3 mx-auto p-3 flex rounded-xl bg-white bg-opacity-40" style="box-shadow:2px 2px 4px 1px gray"> 
          <p class=" text-xl md:text-2xl px-2">  <span class="{themeGradient} text-transparent bg-clip-text text-2xl font-bold p-1">Result :</span> {data.output}</p>
        </div>

        <br>
        <div class="w-11/12 hiddenDiv md:w-1/2  mx-auto ">
          <button on:click={()=>imageDisplay("./setup-output-"+(dataIndex+1)+".png")}><img class="w-full rounded-xl hover:scale-95 transform transition-all duration-300 hover:shadow-2xl" src={"./setup-output-"+(dataIndex+1)+".png"} alt="output"></button>
        </div>
        <br>
        {/each}
        
    </div>


    <Footer></Footer>

    
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
   
    .showPlatformClass{
      transform:scale(2.2);
      transition:all 2s;
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
