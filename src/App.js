import innPhoto from './assets/innocent-thomas.png';

function App() {
  return (
    <div className='App '>
       <div className='flex flex-col content-center items-center m-2'>
         <img className='App__innPhoto w-20 h-20 rounded-full m-2' src={innPhoto} alt="innPhoto" />
         <h1 className='text-2xl font-bold m-2'>Innocent Thomas</h1>
       </div>
    </div>
  );
}

export default App;
