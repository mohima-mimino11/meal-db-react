import './Banner.css'
// import banner from '../../assets/images/banner_1.png' 
import { FaSearch } from "react-icons/fa";
const Banner = () => {
 
  return (
    <div className=' bg-image'>
      <div className='flex-col items-center justify-center  text-center space-y-8'>
        <h1 className="text-6xl font-bold  text-white pt-[155px]">Taste Our Delicious <br /> Best Foods</h1>
        <p className="text-lg text-white">There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered alteration in some form, by injected humou.</p>
        <div className='flex mx-[690px]'>
          <input type="text" placeholder="Search Any Food Here" className="input input-bordered w-full max-w-xs"/>
          <button className="btn btn-warning">Search</button>
        </div>
      </div>
      

      
    </div>
     
      
    
  );
};

export default Banner;