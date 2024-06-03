<title>Native</title>
<script>
    import Header from "../../lib/Header.svelte";
    import {Data} from './content'
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
    let showScrollTop=false
    let showDIV = false;
    let scrollPosition = 0;
    let showOutput=false
    let showOutputUrl=''

    function imageDisplay(url){
      showOutput=true;
      showOutputUrl=url
    }

    function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

    function handleScroll() {
      scrollPosition = window.scrollY;
      const element = document.querySelector('.hiddenDiv');
      showScrollTop=(window.scrollY>window.innerHeight);
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


    function scrollToTop(){
      window.scrollTo(0,0)
    }

    onMount(()=>{
      scrollToTop
      Prism.highlightAll();
      window.addEventListener('scroll',handleScroll)
      return ()=>{
        window.removeEventListener('scroll',handleScroll)
      }
    })    


</script>

<div class="fixed bottom-0 right-0 flex flex-col justify-end {showScrollTop?"scrollShow z-30":"hidden"}">
    <div class="flex flex-row justify-end text-3xl m-5">
      <button on:click={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} class="rounded-3xl bg-white group transform hover:cursor-pointer transition-all duration-300 hover:scale-110 hover:{themeGradient} shadow-xl hover:shadow-2xl">
        <p class="py-2 px-3 transform -rotate-45 text-4xl font-bold  group-hover:text-white {themeGradient} bg-clip-text text-transparent transition-all duration-300 ">➚</p>
      </button>
    </div>
</div>

<div class="w-full h-full pattern" style="scroll-behavior: smooth;">
    <Header></Header>
    <br><br><br>
    <p class="md:text-5xl text-5xl px-5 font-bold md:px-20  md:text-center {themeGradient} bg-clip-text text-transparent  ">Welcome to the svelte native tutorial</p>
        
    <br>
    <p class=" md:px-20 px-5  md:text-left text-2xl">In this tutorial we will cover tags and some useful scripts of svelte native and native script overalll, the <a href="https://svelte-native.technology/tutorial" class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">Official tutorial</a> also covers everything about native script. The svelte native has different tags compared to normal html tags and also the text input works differently in it, lets find out</p>        
    <br>
    <br>

    <p class="md:text-4xl text-5xl px-5 font-bold md:px-20  md:text-left {themeGradient} bg-clip-text text-transparent  ">Lets go through the tags!</p>
    <br>
    <p class=" md:px-20 px-5 md:text-left text-2xl">Svelte Native has variety of tags that serve different purposes and have different functionality.</p>        

    <br>
    

    <div class="w-full px-10  mx-auto flex flex-wrap justify-around h-screen md:h-96 overflow-y-auto" >
    {#each Data as data,index}
      <button on:click={()=>scrollToSection(data.tag)} class="w-full  md:w-1/3 px-10 py-1 group">
        <button class="w-full transform hover:scale-95 transition-all duration-300 hover:shadow-2xl bg-opacity-50 shadow-lg px-2 rounded-xl bg-white group-hover:{themeGradient} group-hover:text-white transition-all duration-300  flex flex-row text-2xl items-center">
        <p class="p-2">{index+1}</p>
        <p class="p-2 text-center group-hover:text-white group-hover:bg-clip-text {themeGradient} text-transparent bg-clip-text hover:bg-clip-padding">{data.tag}</p>
        </button>
      </button>
    {/each}
    </div>
 

    <br><br>
    <p class="md:text-4xl text-5xl px-5 font-bold md:px-20  md:text-left {themeGradient} bg-clip-text text-transparent  ">Please read this before continuing!</p>
    <br>
    <div  class="w-11/12  mx-auto px-2 md:w-2/3 flex flex-col p-4 rounded-xl bg-white bg-opacity-40 gap-2" style="box-shadow:2px 2px 4px 1px gray;"> 
      <p class="text-xl md:text-2xl px-5">When running the app in preview you can press R key to restart the development process as sometimes the changes are stuck and can't be seen in the mobile, also the following templates that are provided should be nested in <a href="#x" class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">{"<frame><page> {Your code/tags here!} </page></frame>"}</a>, remember not to nest two {"<page></page>"} as it may result in error lets see and example :</p>
    </div>
    <br><br>
    <div id="x" class="w-11/12 md:w-1/2 rounded-xl px-5 mx-auto py-5 flex flex-col justify-around relative" style="min-height:3rem;background-color:#282c34;overflow:auto" >
      <pre class="whitespace-nowrap" style=""><code class="language-js text-xl" >{"<frame>\n\t<page>\n\t\t<Your rest of the tags>\n\t</page>\n</frame>"}</code></pre>
   </div>
    
   

    {#each Data as data,index}
    <br id={data.tag}><br>
    <div  class="w-11/12  mx-auto px-2 md:w-2/3 flex flex-col p-4 rounded-xl bg-white bg-opacity-40 gap-2" style="box-shadow:2px 2px 4px 1px gray;"> 
      <p class="{themeGradient} px-4 py-1 text-transparent bg-clip-text text-3xl text-left font-bold">{index+1}. {data.tag}</p>
      <p class="text-xl md:text-2xl px-5">{data.markdown}</p>
    </div>
    <br>

    <div  class="w-11/12 md:w-1/2 rounded-xl px-5 mx-auto py-5 flex flex-col justify-around relative" style="min-height:3rem;background-color:#282c34;overflow:auto" >
      <button on:click={()=>navigator.clipboard.writeText(data.code)} class="hidden md:flex flex-row p-2 px-3 border-0 mx-2 absolute text-gray-400 hover:text-white my-2  hover:bg-gray-700 transform hover:scale-95 transition-all duration-300 rounded-xl" style="top:0%;right:0%;"><pre>copy 📎</pre></button>
        <pre class="whitespace-nowrap" style=""><code class="language-js text-xl" >{data.code}</code></pre>
    </div>

    <br>
     

    {/each}
   

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
      animation: fade-out forwards;
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
