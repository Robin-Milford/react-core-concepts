import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nayoks,setNayoks]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setNayoks(data))
  },[])

  const nam='Dr Mahfuz';
  const fucker=['Asfak','Fucker','Bitch','Hey bra','Libra','Nahid','Jahid','Robin']
  return (
    <div className="App">
      <header className="App-header">
        {
           nayoks.map(nk=><li>{nk.name}</li>)
        }
        {
          fucker.map(nameee=><li>{nameee}</li>)
        }

        <Counter></Counter>
        <Users></Users>
        <p>
          hey bro,what the fuck with this react
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > 
        </a>

        <Name nam='Fucker2'></Name>
        <Name nam='Fucker'></Name>
        <Products name={fucker[0]}></Products>
        <Products name={fucker[1]}></Products>
        <Products name={fucker[2]}></Products>
        <Products></Products>
        <Products></Products>
        <Products></Products>
        <Products></Products>
        <h1>{nam}</h1>
        <p style={{backgroundColor:'black',color:'red'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
 
      </header>
    </div>
  );
}
function Users(){

  return(
    <div>
      <h2>Dynamic Users: </h2>
    </div>
  )
}

function Counter(){
  const btnStyle={
    padding:'10px',
    margin:'10px',
    fontSize:'25px'
  }
  const [count,setCount]=useState(0);
  const  handleIncrease=()=>setCount(count+1);
  const handleDecrease=()=>{
    if (count>0) {
      setCount(count-1);
    }
  }
  return(
    <div>
      <h1>Count:{count} </h1>
      <button style={btnStyle} onClick={handleIncrease}>Increase</button>
      { /* function declare inline button */ }
      <button style={btnStyle} onClick={handleDecrease}>Decrease</button>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count+2}></MovieDisplay>
      <MovieDisplay movies={count+3}></MovieDisplay>
      <MovieDisplay movies={count+4}></MovieDisplay>
      <MovieDisplay movies={count+5}></MovieDisplay>
      <MovieDisplay movies={count+6}></MovieDisplay>

    </div>

  )
}
function MovieDisplay(props){
  return(
    <div>
      <h4>Number of movies i acted: {props.movies} </h4>
    </div>
  )
}

function Products(props){
  const style={
    border:'2px solid black',
    borderRadius:'10px',
    width:'300px',
    height:'400px',
    backgroundColor:'light',
    padding:"30px",
    margin:'10px',
  }
  const style2={
    display:'flex',
  }
  return(
    <div style={style2}>
    <div style={style}>
      <h2>Name:{props.name}</h2>
      <h1>Price:{}</h1>
      <p>Lorem odio quam?</p>
    </div>
    </div>
  )
}
function Name(props){
  const componentStyle={
    border: '2px solid black',
    borderRadius:'50px',
    padding:'20px',
    width:'400px',
    height:'500px',
  }
  return( 
  <div style={componentStyle}>
  <h1>{props.nam}</h1>
  <p>Lorem ipsum dolor sitdeleniti numquam accusamus exceptu</p>
  </div>
  )
}
export default App;
