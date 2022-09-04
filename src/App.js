import './App.css';
import Header from './Header'
import Banner from './Banner';
import Nav from './Nav';
import SermonInfo from './SermonInfo';

function App() {
//conditionally render header? figure it out

  return (
    <div>
      <Header></Header> 
      <Banner></Banner>
      <SermonInfo></SermonInfo>
    </div>
  );
}

export default App;
