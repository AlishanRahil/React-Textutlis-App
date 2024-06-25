
import './App.css';
import Textform from './components/Text2';
import Navbar from './components/Navbar';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './components/About';
import Alert from './components/Alert';

function App() {



  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode(       'dark');
      document.body.style.backgroundColor = '#042743'
      aleert("Dark Mood Has Been Enabled","sucess")
      
    } else {
      setMode('light');
          document.body.style.backgroundColor = 'white'
          aleert("Light Mood Has Been Enabled","sucess")
    }
  }

  // making function and state for alert //

  const [messagealert, Showalert] = useState(null)


  // making function to accept the vaklues and stored as well //

  const aleert = (message , type) => {  // makin settimeout function for alert message //
    Showalert({
      msg:message,
      type:type
    });setTimeout(() => {
      Showalert(null)

    },1500)
  }
  return (
    <>
       <Router>
      <Navbar mode={mode} toggleMode={toggleMode} title="TextUtils" />
      <Alert alert={messagealert}/>
      <div className="container">
        <Routes>
          <Route exact  path="/about" element={<About />} />
          <Route exact path="/" element={<Textform alert={aleert} heading="Enter The Text To Analyze Below" mode={mode} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;




// import './App.css';
// import Textform from './components/Text2';
// import Navbar from './components/Navbar';
// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import statement
// import About from './components/About';
// import Alert from './components/Alert';

// function App() {
//   const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = '#042743';
//       alert("Dark Mode Has Been Enabled", "success");
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       alert("Light Mode Has Been Enabled", "success");
//     }
//   }

//   const [messagealert, Showalert] = useState(null);

//   const alert = (message, type) => {
//     Showalert({
//       msg: message,
//       type: type
//     });
//     setTimeout(() => {
//       Showalert(null);
//     }, 1500);
//   }

//   return (
//     <Router>
//       <Navbar mode={mode} toggleMode={toggleMode} title="TextUtils" />
//       <Alert alert={messagealert}/>
//       <div className="container">
//         <Routes>
//           <Route path="/about" element={<About />} />
//           <Route path="/" element={<Textform alert={alert} heading="Enter The Text To Analyze Below" mode={mode} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


