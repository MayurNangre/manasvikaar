import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs';
import { heroimages } from '../images';

const Header = () => {
  return (
    <div className=''>
      <header className="navbar-header">
         <div className="navbar-section">
            <div className="navbar-content row">
               <div className="col-2 logo-image">
                  <img src={heroimages.logo}/>
               </div>
               <div className="col-6 navbar-mainmenu">
                  <ul className="">

            
                     <div className="dropdown">
                        <div className="dropbtn">
                          <li>Home</li>
                        </div>
                        <div className="dropdown-content">
                          <a href="#">Link 1</a>
                          <a href="#">Link 2</a>
                          <a href="#">Link 3</a>
                        </div>
                     </div>

                     <div className="dropdown">
                        <div className="dropbtn">
                          <li>Pages</li>
                        </div>
                        <div className="dropdown-content">
                          <a href="#">Link 1</a>
                          <a href="#">Link 2</a>
                          <a href="#">Link 3</a>
                        </div>
                     </div>

                     <div className="dropdown">
                        <div className="dropbtn">
                          <li>Services</li>
                        </div>
                        <div className="dropdown-content">
                          <a href="#">Link 1</a>
                          <a href="#">Link 2</a>
                          <a href="#">Link 3</a>
                        </div>
                     </div>

                     <div className="dropdown">
                        <div className="dropbtn">
                          <li>Cases</li>
                        </div>
                        <div className="dropdown-content">
                          <a href="#">Link 1</a>
                          <a href="#">Link 2</a>
                          <a href="#">Link 3</a>
                        </div>
                     </div>

                     <div className="dropdown">
                        <div className="dropbtn">
                          <li>Shop</li>
                        </div>
                        <div className="dropdown-content">
                          <a href="#">Link 1</a>
                          <a href="#">Link 2</a>
                          <a href="#">Link 3</a>
                        </div>
                     </div>

                     <div className="dropdown">
                        <div className="dropbtn">
                          <li>Blog</li>
                        </div>
                        <div className="dropdown-content">
                          <a href="#">Link 1</a>
                          <a href="#">Link 2</a>
                          <a href="#">Link 3</a>
                        </div>
                     </div>

                     <div className="dropdown">
                        <div className="dropbtn">
                          <li>Contact</li>
                        </div>
                        <div className="dropdown-content">
                          <a href="#">Link 1</a>
                          <a href="#">Link 2</a>
                          <a href="#">Link 3</a>
                        </div>
                     </div>

                   
                     {/* <li>Cases</li>
                     <li>Shop</li>
                     <li>Blog</li>
                     <li>Contact</li> */}
                  </ul>
               </div>
   
               <div className="col-4 navbar-contact">
                  <div className="navbar-contactnumber">
                     <div className="navbar-contacticon">
                        <p>
                           <i className="fa-solid fa-phone-volume"></i>
                        </p>
                     </div>
                     <div className="navbar-contactdetails"> 
                        <div>
                           <p>Have Questions ?</p>
                           <p>+92 (8800) - 9850</p>
                        </div>
                     </div>
                  </div>
                  <div>
   
                  </div>
               </div>
   
            </div>
         </div>
      </header>
    </div>
  )
}

export default Header;