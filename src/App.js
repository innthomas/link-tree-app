import {innPhoto} from './assets';
import github from './assets/github.svg';
import slackIcon from './assets/slack.svg';
import iconShare from './assets/icon-share.png';
import elipsisIcon from './assets/menu.png';
import './App.css';


function App() {
  return (
    <div className='App flex flex-col content-center items-center min-h-screen w-screen'>
       <header className='flex flex-col content-center items-center m-2'>
         <img className='App__innPhoto w-20 h-20 rounded-full m-2' src={innPhoto} alt="innPhoto" />
         <div className='tooltip'>
         <img className=' opacity-50 p-2 border-2 rounded-full cursor-pointer ' src={iconShare} alt="iconShare" />
         <span class="tooltiptext ">Share link</span>

         </div>
         <img className=' hidden' src={elipsisIcon} alt="iconElipse" />
         <h1 className='text-2xl font-bold m-2'>Innocent Thomas</h1>
       </header>
       <div className='
       text-center h-14 pt-2 w-[80%] cursor-pointer 
       '
       >
         <a className='mx-2' href="http://">Twitter Link</a>
       </div>
       <div className='my-4 text-center h-14 pt-2 border-2 rounded-lg w-[80%] bg-gray-200 hover:bg-gray-400 cursor-pointer'>
         <a href="http://">Zuri Team</a>
       </div>
       <div className='my-4 text-center h-14 pt-2 border-2 rounded-lg w-[80%] bg-gray-200 hover:bg-gray-400 cursor-pointer'>
         <a href="http://">Zuri Books</a>
       </div>
       <div className='text-center h-14 pt-2 border-2 rounded-lg w-[80%] bg-gray-200 hover:bg-gray-400 my-4 cursor-pointer'>
         <a href="http://">Python Books</a>
       </div>
       <div className='text-center h-14 pt-2 border-2 rounded-lg w-[80%] bg-gray-200 hover:bg-gray-400 my-4 cursor-pointer'>
         <a href="http://">Background Check for Coders</a>
       </div>
       <div className='text-center h-14 pt-2 border-2 rounded-lg w-[80%] bg-gray-200 hover:bg-gray-400 my-4 cursor-pointer'>
         <a href="http://">Design Books</a>
       </div>
       <footer className='flex text-center justify-center mt-10'>
       
       <a href="http://">
       <img className='w-10 m-2 cursor-pointer' src={slackIcon} alt="slackIcon" />
       </a>
        <a href="http://"><img className='w-10 m-2 cursor-pointer' src={github} alt="githubIcon" /></a> 
       </footer>
    </div>
  );
}

export default App;
