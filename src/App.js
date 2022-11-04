import {innPhoto} from './assets';
import github from './assets/github.svg';
import slackIcon from './assets/slack.svg';
import Footer from './components/Footer';
import {Link} from "react-router-dom";
import './App.css';


function App() {
  return (
    
    <div className='mb-2 mx-4'>
    <div className='App flex flex-col content-center items-center min-h-screen w-screen'>
       <header className='flex flex-col content-center items-center m-2'>
         <img id='profile__img' className='App__innPhoto w-20 h-20 rounded-full m-2' src={innPhoto} alt="innPhoto" />
         
         <h1 className='text-2xl font-bold m-2'>Innocent Thomas
         </h1>
       </header>
       <div id='twitter' className='
       text-center h-14 pt-2 w-[80%] cursor-pointer 
       '
       >
         <a  className='mx-2' href="http://">Twitter Link</a>
       </div>
       <div className='my-4 text-center h-14 pt-2 border-2 rounded-lg w-[80%] bg-gray-200 hover:bg-gray-400 cursor-pointer'>
         <a href="https://training.zuri.team/">Zuri Team</a>
       </div>
       <div className='my-4 text-center h-14 pt-2 border-2 rounded-lg w-[80%] bg-gray-200 hover:bg-gray-400 cursor-pointer'>
         <a id='books' href="https://books.zuri.team/">Zuri Books</a>
       </div>
       <div className='text-center h-14 pt-2 border-2 rounded-lg w-[80%] bg-gray-200 hover:bg-gray-400 my-4 cursor-pointer'>
         <a id='book__python' href="https://books.zuri.team/python-for-beginners?ref_id=innocentthomas">Python Books</a>
       </div>
       <div className='text-center h-14 pt-2 border-2 rounded-lg w-[80%] bg-gray-200 hover:bg-gray-400 my-4 cursor-pointer'>
         <a  id='pitch' href="http://background.zuri.team">Background Check for Coders
         
         </a>
       </div>
       <div className='text-center h-14 pt-2 border-2 rounded-lg w-[80%] bg-gray-200 hover:bg-gray-400 my-4 cursor-pointer'>
         <a id='‘book__design’' href="https://books.zuri.team/design-rules">Design Books</a>
       </div>
       {/* contact me */}
       <div className='text-center h-14 pt-2 border-2 rounded-lg w-[80%] bg-gray-200 hover:bg-gray-400 my-4 cursor-pointer'>
         <Link id='‘book__design’' to='contact'>Contact Me</Link>
       </div>
       <div className='flex text-center justify-center mt-10'>
       
       <a id='slack' href="http://slack.com/innocentthomas">
       <img className='w-8 m-2 cursor-pointer' src={slackIcon} alt="slackIcon" />
       </a>
        <a href="http://github.com/innthomas"><img className='w-8 m-2 cursor-pointer' src={github} alt="githubIcon" /></a> 
       </div>
       
    </div>
      <Footer/>
    </div>
   
  );
}

export default App;


