import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const[texts,setTexts]=useState([]);
  const formHandler=(e)=>{
    e.preventDefault();
    let amount=parseInt(count);
  // if(count<=0){
  //   amount=1
  // }
  // if(count>data.length){
  //   amount=data.length;
  // }
  setTexts(data.slice(0,amount))
}
  return (
  <section className='section-center'>
    <h3>Generate dummy text</h3>
    <div className="underline"></div>
    <form action="" className="lorem-form" onSubmit={formHandler}>
      <label htmlFor="amount">
        How Much Paragraphs?:
      </label>
      <input type="number" name="amount" id="amount" min="1" max={data.length} onChange={(e)=>setCount(e.target.value)}/> {/*min and max value will not allow to select less than 1 and  more than 10 */}
      <button className="btn" >Generate</button>
    </form>
    <div className="lorem-text">
      {texts.map((item,index)=>{
        return (
          <p key={index}>{item}</p>
        )
      })}
    </div>
  </section >
    )
}

export default App;
