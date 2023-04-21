import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Front from '../components/Front';


const Home = () => {
  return (
    <div className="App">
      
        <Header name={'JaCk'}/>
        <div className="App-header">
          <Front/>
        </div>
        <Footer/>      
    </div>
  );
}

export default Home;
