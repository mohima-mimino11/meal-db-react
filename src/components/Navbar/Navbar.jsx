import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/Tasty_HUT.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center mx-[150px] mt-12'>
      <img src={logo} alt="" />
      <div className='flex items-center gap-8'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/foods" >Foods</NavLink>
        <button className="btn btn-warning">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;