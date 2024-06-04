<title>Calculator</title>
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

<button on:click={()=>showOutput=false} class="w-full h-full fixed  bg-black bg-opacity-70 z-30 overflow-x-auto {showOutput?"flex flex-col scaleAnim justify-center":"hidden"} ">
  <img class="h-full w-auto object-contain transform md:rotate-0 rotate-90 md:scale-90 scale-150" src={showOutputUrl} alt={showOutputUrl}>
</button>
<div class="w-full h-full pattern">
    <Header></Header>
    
    
    <br><br><br>
    <p class="md:text-4xl text-5xl px-5 font-bold md:px-20  md:text-left {themeGradient} bg-clip-text text-transparent  ">Lets make a calculator app to begin our journey! Remember that practice will eventually makes us more firm on this framework</p>
    <br>
    <div  class="w-11/12  mx-auto px-2 md:w-2/3 flex flex-col p-4 rounded-xl bg-white bg-opacity-40 gap-2" style="box-shadow:2px 2px 4px 1px gray;"> 
      <p class="text-xl md:text-2xl px-5">Creating a starter project is always good! starting with a calculator app would obviously be a great idea! remember that this tutorial was made in rush so many scripts are incomplete, its your choice if you want to have changes on this tutorial make changes on the <a href="#x" class="{themeGradient} bg-clip-text text-transparent rounded-2xl hover:underline">repository</a> and contact me when you want to merge the branches.</p>
    </div>
    <br>
    <br>
        <div class="w-11/12 md:w-1/4  mx-auto ">
          <button on:click={()=>imageDisplay("./calculator-output.png")}><img class="w-full rounded-xl hover:scale-95 transform transition-all duration-300 hover:shadow-2xl" src={"./calculator-output.png"} alt="output"></button>
        </div>
    

    {#each Data as data,index}
    <br><br>
    <div  class="w-11/12  mx-auto px-2 md:w-2/3 flex flex-col p-4 rounded-xl bg-white bg-opacity-40 gap-2" style="box-shadow:2px 2px 4px 1px gray;"> 
      <p class="{themeGradient} px-4 py-1 text-transparent bg-clip-text text-3xl text-left font-bold">{index+1}. {data.title}</p>
      <p class="text-xl md:text-2xl px-5">{data.markdown}</p>
    </div>
    <br>

    <div  class="w-11/12 md:w-1/2 rounded-xl px-5 mx-auto py-5 flex flex-col justify-around relative" style="min-height:3rem;background-color:#282c34;overflow:auto" >
      <button on:click={()=>navigator.clipboard.writeText(data.code)} class="hidden md:flex flex-row p-2 px-3 border-0 mx-2 absolute text-gray-400 hover:text-white my-2  hover:bg-gray-700 transform hover:scale-95 transition-all duration-300 rounded-xl" style="top:0%;right:0%;"><pre>copy 📎</pre></button>
        <pre class="whitespace-nowrap;" style="padding-right:20rem"><code class="language-js text-xl" >{data.code}</code></pre>
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
