import './App.css';
import Header from './Header'
import Banner from './Banner';
import SermonInfo from './SermonInfo';

function App() {
//To Dos:
//1. Make conditional for home page
//2. Add handle outside click react
//3. Hash Links (Scroll straight to bottom then top)
//4. Set up Routers
//5. Hamburger Menu
//6. Google Map API
//7. On Click of the exiting announcement reposition the Nav Bar and Logo header. Basically Reposoitioning annoucement and header
//8. A Lighter Page for contrast especially in the pages with people in it
//9. A way to manage content for website
//10. Add photos remove photos using Django Admin
//11. Social Media Handles for EM: Discord, YouTube, Instagram ETC

  return (
    <div>
      <Header></Header> 
      <Banner></Banner>
      <SermonInfo></SermonInfo>
    </div>
  );
}

export default App;
