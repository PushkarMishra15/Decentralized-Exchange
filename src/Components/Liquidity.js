import React from 'react';
import "./Liquidity.css";

function Liquidity({state}) {

      const getLiquidity = async()=>{
   
        const { contract } = state;
        const Dai_address = document.querySelector("#Daddress").value;
        const Tether_address = document.querySelector("#Taddress").value;
        const Dai_amount = document.querySelector("#Damount").value;
        const Tether_amount = document.querySelector("#Tamount").value;
        console.log(Dai_address,Tether_address,Dai_amount,Tether_amount);
        console.log("Pushakr");
        await contract.deposit(Dai_address,Dai_amount,Tether_address,Tether_amount);
        console.log("Liquidity Added");
       }
 
    return (
      <div className="Liquidity">

       <div>

        <h3>Dai/Ether Swap</h3>
       <button onClick={getLiquidity} className='Sbtn'>Add Liquidity</button>
       
       <div className='LiquidityDetails'>

       <input type="text" id='Daddress' placeholder='Enter Dai address'/>
       <input type="text" id='Taddress'  placeholder='Enter Tether address'/>
       <input type="text" id='Damount' placeholder='Amount of Dai token'/>
       <input type="text" id='Tamount' placeholder='Amount of Tether token'/>

       </div>
       </div>

      </div>
    );
  }
  
  
  export default Liquidity;
  