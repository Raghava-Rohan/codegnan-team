import React from 'react';
import "./team.css"
const Team = () => {
  return (
   <>
   <section className='team'>
   <section>
    <div className='head-section'>
      <h4 className='bold gray'>OUR TEAM</h4>
      <p className='bold note'>Our Top Notch Teams<br/> Involved In Helping <span className='red'>You Learn Programming</span>,<br/>  Not Just Coding.</p>
      <img src='https://codegnan.com/wp-content/uploads/2023/05/heading-separator.png' alt='png'/>
    </div>
    </section>
    <section className='content'>
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-md-4'>
          <ul>
            <li className='list-item'><i class="fa-solid fa-check-double list-style"></i>Embark on a Journey with Elite Mentors - IIT Alumni and Top MNC Experts.</li>
            <li className='list-item'><i class="fa-solid fa-check-double list-style"></i>Experience Doubt-Free Learning from Product Developers.</li>
            <li className='list-item'><i class="fa-solid fa-check-double list-style"></i>Elevate Your Skills with Expert Masterclasses.</li>
          </ul>
        </div>
        <div className='col-12 col-md-4 pics'>
        <img className='founder' src='https://codegnan.com/wp-content/uploads/2024/03/sairam.webp' alt='Mr.sairam'/>
        <img className='founder' src='https://codegnan.com/wp-content/uploads/2024/03/saketh.webp' alt='Mr.saketh'/>
        </div>
        <div className='col-12 col-md-4 founder-name'>
        <p className='bold' style={{textAlign:"center"}}>Mr.SaiRam</p>
        <p className='bold' style={{marginLeft:"65%"}}>Mr.Saketh</p>
        </div>
      </div>
    </div>
    </section>
    </section>
   </>
 );
};

export default Team;