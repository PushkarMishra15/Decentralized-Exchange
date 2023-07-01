import React from 'react'
import  "./Swap.css"

function Swap({state}) {
  
  const swap = async()=>{
  
    const {contract} = state;
  
    const amount = document.querySelector("#amount").value;
    var x = document.getElementById("token").selectedIndex;
    console.log(x);
    let token;
    if (x===0){
       token ="0x6B175474E89094C44Da98b954EedeAC495271d0F";
    }else{
       token = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
    }
     console.log(token,amount);
     await contract.trade(token,amount);
     console.log("Token Swapped"); 
  }
   
   const DBalance = async()=>{
     const { contract } = state;
     const d_balance = await contract.DaiToken_Supply();
     const dai_balance = d_balance.toNumber();
     console.log(dai_balance);
   }
   
   const TBalance = async()=>{ 
    const { contract } = state;
    const t_balance = await contract.Tether_Supply();                  
    const tether_balance = t_balance.toNumber();
    console.log(tether_balance);
   }
   
    return (
      <div className="Swap">
     {/* <h1>DAI-TEther Swap</h1> */}
    <div>     
     <select id="token">
     <option value="dai">Dai</option>
     <option value="tether">TEther</option>
     </select>

     <input type="number" id='amount' placeholder='Amount'/>
     <button onClick={swap} className='Sbtn'>Swap</button>
     </div>
     <div>
        
        <button onClick={DBalance} className='Dbtn'>Dai</button>
        <button onClick={TBalance} className='Tbtn'>TEther</button>
       
     </div> 
     </div>
    );
  }
  
  
  export default Swap;
  