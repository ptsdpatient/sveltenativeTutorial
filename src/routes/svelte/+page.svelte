<title>Svelte</title>
<script>
    import Header from "../../lib/Header.svelte";
    import {Data} from './content'
    import {onMount} from 'svelte'
    import Prism from 'prismjs';
    import Footer from "../../lib/Footer.svelte";

    import 'prismjs/themes/prism.css';
    import '../../../src/custom-prism.css';

    let themeGradient='bg-gradient-to-r from-purple-600 to-pink-500'
   

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



<div class="w-full h-full pattern">
    <Header></Header>
    <br><br><br><br>
    <p class="md:text-5xl text-5xl px-5 font-bold md:px-20  md:text-left {themeGradient} bg-clip-text text-transparent  ">Svelte a framework from Rich Harris, too good to exist?</p>
    <br>
    <div  class="w-11/12  mx-auto px-2 md:w-2/3 flex flex-col p-4 rounded-xl bg-white bg-opacity-40 gap-2" style="box-shadow:2px 2px 4px 1px gray;"> 
      <p class="text-xl md:text-2xl px-5">Svelte is a modern JavaScript framework for building user interfaces. Unlike traditional frameworks, Svelte shifts the work from the browser to the build step, resulting in highly efficient and performant applications. With Svelte, you write components using familiar HTML, CSS, and JavaScript. These components encapsulate your UI logic and can be easily reused across your application.</p>
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
