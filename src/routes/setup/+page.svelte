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
    let isLoading=true,showPlatformOptions=false;
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

<button on:click={()=>showOutput=false} class="w-full h-full fixed  bg-black bg-opacity-70 z-30 overflow-x-auto {showOutput?"flex flex-col justify-center":"hidden"} ">
  <img class="transform md:rotate-0 rotate-90 md:scale-90 scale-150" src={showOutputUrl} alt={showOutputUrl}>
</button>

<div class="w-full h-full pattern">
    <Header></Header>
    <div class="">
        <br><br><br>
        <div class="w-full scrollShow py-1 flex flex-row justify-center md:text-5xl text-4xl px-5 md:gap-3 md:px-20"><p class="  font-bold {themeGradient} bg-clip-text text-transparent">Welcome to the Svelte Native Setup Tutorial</p>🚀</div>
        <br>

        <p class=" md:px-20 scrollShow px-5  md:text-left text-2xl">Lets start with seting up the necessary tools and utilities we need to get started with native script development, it typically includes a text editor like <a href="https://code.visualstudio.com/" class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">visual studio code</a>, a <a href="https://ubuntu.com/desktop/wsl" class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">terminal</a> to run tasks along with <a href="https://nodejs.org/" class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">nodejs</a> and <a href="https://www.python.org/" class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">python</a> for runtime and installation. In case if you find video tutorials better I recommend you watch these videos.</p>        
        

        <div class="w-full scrollShow flex pt-5 flex-col md:flex-row justify-center gap-5 md:h-52 h-96">
          <iframe class="w-full px-10 md:w-1/3 h-1/2 md:h-full rounded-2xl transform hover:scale-95 transition-all duration-300" src="https://www.youtube.com/embed/hTWGWPG3aWQ?si=3R_-fjlMC2T-MZ2L" title="Svelte Native installation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe class="w-full px-10 md:w-1/3 h-1/2 md:h-full rounded-2xl transform hover:scale-95 transition-all duration-300" src="https://www.youtube.com/embed/jyDdEI1Vvd4?si=raxObGO8IsPsEhua" title="Svelte Native installation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <br><br>

        <p class="hiddenDiv md:text-4xl text-4xl px-5 font-bold md:px-20  md:text-left {themeGradient} bg-clip-text text-transparent  ">Mobile setup : </p>
        
        <br>
        <p class=" md:px-20 px-5 hiddenDiv md:text-left text-2xl">Since you are starting with android app development by using a desktop you need to download <a href="https://preview.nativescript.org" class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">Native Preview</a> app developed by the native script team to run the native script app on android/ ios in development environment</p>        
        <br>
        <div class="w-3/4 md:w-2/3 px-7 hiddenDiv mx-auto flex flex-col md:flex-row justify-around gap-5 group items-center">
            <a href="https://play.google.com/store/apps/details?id=org.nativescript.preview.android" class="w-full md:w-1/3 h-full transform hover:scale-95 transition-all duration-300"><img class="w-full h-full hover:scale-90" src="./playstore.png" alt="playstore"></a>
            <a href="https://apps.apple.com/us/app/nativescript-preview/id1264484702" class="w-full md:w-1/3 h-full  hover:scale-80 transform hover:scale-95 transition-all duration-300"><img class="w-full h-full"  src="./applestore.png" alt="playstore"></a>
        </div>

        <br>
        <br>
        <div class="w-full px-4 md:w-2/3 gap-1 md:gap-2 mx-auto hiddenDiv flex flex-row justify-around text-4xl md:text-8xl items-center">
          <img class="w-4/12 hiddenDiv" src="./shellQR.png" alt="">
          <p class=" md:text-left hiddenDiv {themeGradient} bg-clip-text text-transparent  ">+</p>
          <img class="w-3/12 hiddenDiv" src="./scanQR.png" alt="">
          <p class=" md:text-left hiddenDiv {themeGradient} bg-clip-text text-transparent  ">=</p>
          <img  class="w-3/12 hiddenDiv" src="./android.png" alt="">
        </div>
         <br>
         <br>
         <br>


        
        <p class="hiddenDiv md:text-5xl text-4xl px-5 font-bold md:px-20  md:text-center {themeGradient} bg-clip-text text-transparent  ">Lets get started!</p>
        <br><br>
        
        <div class="w-full hiddenDiv md:w-1/2 flex flex-row justify-center gap-4 md:gap-5 md:justify-center items-center mx-auto">
        <p class="{themeGradient} md:px-3 bg-clip-text text-right text-transparent font-semibold text-2xl md:text-3xl">Platform : </p>
        
        <div class="w-1/2 md:w-1/3  relative rounded-xl  transition-all duration-300 ease-in-out">
        <button on:click={()=>showPlatformOptions=!showPlatformOptions} class="flex flex-row justify-between bg-white rounded-xl items-center hover:bg-opacity-50 hover:{themeGradient} group"><div class="w-full flex flex-row items-center"><img class="w-1/3 p-2 md:p-0 md:w-1/3 md:px-2" src={currentPlatformImageURL} alt=""><p class="text-lg md:text-2xl {themeGradient} group-hover:text-white group-hover:{themeGradient} bg-clip-text text-transparent transition-all duration-300 ease-in-out">{currentPlatformName}</p></div><p class="text-lg md:text-2xl p-2 px-4 {themeGradient} group-hover:text-white group-hover:{themeGradient} bg-clip-text text-transparent transition-all duration-300 transform group-hover:-rotate-180" >{showPlatformOptions?"⋏":"⋎"}</p></button>
        <div class="w-full bg-white {showPlatformOptions?"absolute my-1":"hidden"} z-10 divide-y-2 divide-pink-200  group mx-auto overflow-y-auto rounded-xl" >
          {#each platforms as platform}
          <button on:click={()=>{currentPlatformImageURL=platform.icon;currentPlatformName=platform.platform;showPlatformOptions=false;}} class="flex my-1 flex-row items-center text-lg md:text-2xl w-full transform hover:scale-95 transition-all duration-300 bg-white p-1"><img class="w-1/4 md:w-1/4 px-2" src={platform.icon} alt=""><p class=" {themeGradient} bg-clip-text text-transparent ">{platform.platform}</p></button>
          {/each}
        </div>
        </div>
      </div>
      
    

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
                <div class="flex flex-col py-3 px-3">
                  {#each data.code as line }
                  <pre><code class="language-" style="user-select:none;padding-right:0;margin-right:0">$</code></pre>
                  {/each}
                </div>

                <div class="relative w-full h-full py-3 mr-5 md:mr-0">
                <button class="hidden md:flex flex-row p-2 px-3 border-0 mx-2 absolute text-gray-400 hover:text-white my-1 hover:bg-gray-700 transform hover:scale-95 transition-all duration-300 rounded-xl" style="top:0%;right:0%;"><pre>copy 📎</pre></button>
                {#each data.code as line}
                <pre style="overflow-x:hidden"><code class="language-bash" style="overflow-x:hidden">{line}</code></pre>
                {/each}
                  
                </div>
            </div>
          </div>
          {:else}

          <div class="w-11/12 md:w-1/2 hiddenDiv rounded-xl bg-black px-5 bg-opacity-80 mx-auto py-3 flex flex-col justify-around relative " style="min-height:3rem" >
            <button class="flex flex-row p-2 border-0 absolute text-2xl text-gray-400 hover:text-white my-1 transition-all duration-300" style="top:0%;right:0%"><p>copy 📋</p></button>
           {#each data.code as line,index}
            <div>
              <pre><code class="language-js text-xl ">{line}</code></pre>
            </div>
            {/each}
          </div>
          {/if}
       
          <br>
        <!-- output -->
          
  

        <div class="w-11/12 hiddenDiv md:w-2/3 mx-auto p-3 flex rounded-xl bg-white bg-opacity-40" style="box-shadow:2px 2px 4px 1px gray"> 
         
          <p class=" text-xl md:text-2xl px-2">  <span class="{themeGradient} text-transparent bg-clip-text text-2xl font-bold p-1">Result :</span> {data.output}</p>
        </div>

        <br>
        <div class="w-11/12 hiddenDiv md:w-1/2 mx-auto">
          <button on:click={()=>imageDisplay("./output-"+(dataIndex+1)+".png")}><img class="w-full rounded-xl" src={"./output-"+(dataIndex+1)+".png"} alt="output"></button>
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