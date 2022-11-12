import logo from './logo.svg';
import './App.css';
import Cards from './component/card';

function App() {
  return (
     <>
     <div className='container mt-5'>
      <div className='row'>
       <div className='col-lg-4'>
         <Cards 
          title="Laptop"
          text="Laptop is a portable Deskotp"
          btnName="Buy Now Laptop"
         />
       </div>
       <div className='col-lg-4'>
         <Cards 
          title="Mobile"
          text="Mobile is a smartphone"
          btnName="Buy Now Mobile"
         />
       </div>
       <div className='col-lg-4'>
         <Cards 
          title="Deskotp"
          text="Deskotp is a Personal Pc"
          btnName="Buy Now Desktop"
         />
       </div>
      </div>
     </div>
     </>
  );
}

export default App;
