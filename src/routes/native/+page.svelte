<title>Native</title>
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
      window.addEventListener('scroll',handleScroll)
      return ()=>{
        window.removeEventListener('scroll',handleScroll)
      }
    })    


</script>

<div class="w-full h-full pattern" style="scroll-behavior: smooth;">
    <Header></Header>
    <br><br><br>
    <p class="md:text-5xl text-5xl px-5 font-bold md:px-20  md:text-center {themeGradient} bg-clip-text text-transparent  ">Welcome to the svelte native tutorial</p>
        
    <br>
    <p class=" md:px-20 px-5  md:text-left text-2xl">In this tutorial we will cover tags and some useful scripts of svelte native and native script overalll, the <a href="https://preview.nativescript.org" class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">Official tutorial</a> also covers everything about native script. The svelte native has different tags compared to normal html tags and also the text input works differently in it, lets find out</p>        
    <br>
    <br>

    <p class="md:text-4xl text-5xl px-5 font-bold md:px-20  md:text-left {themeGradient} bg-clip-text text-transparent  ">Lets go through tags!</p>
    <br>
    <br>
    

    <div class="w-full px-10  mx-auto flex flex-wrap justify-around h-screen md:h-96 overflow-y-auto" >
    {#each Data as data,index}
      <a href={'#'+data.tag} class="w-full  md:w-1/3 px-10 py-1 group">
        <button class="w-full transform hover:scale-95 transition-all duration-300 hover:shadow-2xl bg-opacity-50 shadow-lg px-2 rounded-xl bg-white group-hover:{themeGradient} group-hover:text-white transition-all duration-300  flex flex-row text-2xl items-center">
        <p class="p-2">{index+1}</p>
        <p class="p-2 text-center group-hover:text-white group-hover:bg-clip-text {themeGradient} text-transparent bg-clip-text hover:bg-clip-padding">{data.tag}</p>
        </button>
      </a>
    {/each}
    </div>
    

    <br><br><br>
    {#each Data as data,index}
    <div class="w-11/12  mx-auto px-2 md:w-2/3 flex flex-col p-4 rounded-xl bg-white bg-opacity-40 gap-2" style="box-shadow:2px 2px 4px 1px gray;"> 
      <p class="{themeGradient} px-4 py-1 text-transparent bg-clip-text text-3xl text-left font-bold">{index+1}. {data.tag}</p>
      <p class="text-xl md:text-2xl px-5">{data.markdown}</p>
    </div>
    <br>
    <div id={data.tag} class="w-11/12 md:w-1/2 rounded-xl px-5  mx-auto py-3 flex flex-col justify-around relative  " style="min-height:3rem;background-color:#282c34;overflow-x:auto" >
      <button class="hidden md:flex flex-row p-2 px-3 border-0 mx-2 absolute text-gray-400 hover:text-white my-2 hover:bg-gray-700 transform hover:scale-95 transition-all duration-300 rounded-xl" style="top:0%;right:0%;"><pre>copy 📎</pre></button>
      {#each data.code as line,index}           
        <pre class="" style="overflow-x:hidden"><code class="language-js text-xl whitespace-pre-wrap overflow-hidden" style="overflow-x:hidden">{line}</code></pre>
      {/each}
    </div>

    <br>
    <div class="w-11/12 md:w-2/3 mx-auto p-3 flex rounded-xl bg-white bg-opacity-40" style="box-shadow:2px 2px 4px 1px gray"> 
      <p class=" text-xl md:text-2xl px-2">  <span class="{themeGradient} text-transparent bg-clip-text text-2xl font-bold p-1">Result :</span> {data.output}</p>
    </div>
    <br><br>

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
