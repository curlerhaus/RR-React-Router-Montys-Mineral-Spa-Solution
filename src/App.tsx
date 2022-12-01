import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Packages from "./components/Packages";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function App() {
  const packages = [
    "Activate your Crystals",
    "Monkey Meditation",
    "Soak in the Hotsprings",
    "Hypnotherapy",
    "Mineral Bath",
  ];

  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to Monty's Mineral SPA</h1>

          <Container>
            <Nav defaultActiveKey="/" variant="tabs" fill>
              <Nav.Item>
                <Nav.Link href="/">
                  <Link to="/">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={"aboutPage"}>
                  <Link to="/about">About Us</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={"packagesPage"}>
                  <Link to="/packages">Our Packages</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </header>

        <div className="display">
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/packages"
            render={() => <Packages packages={packages} />}
          />
        </div>
      </Router>
    </div>
  );
}

export default App;

// Modal Code from Tom
// export default function Home () {
//   const [showModal, setShowModal] = useState(false)

//   if(showModal === true) {
//       return(
//           <div>
//           <Modal.Dialog style={{backgroundColor: 'red'}}>
//               <Modal.Header closeButton>
//               <Modal.Title>Modal title</Modal.Title>
//               </Modal.Header>

//               <Modal.Body>
//               <p>Modal body text goes here.</p>
//               </Modal.Body>

//               <Modal.Footer>
//               <Button onClick={() => {setShowModal(false)}} variant="secondary">Close</Button>
//               <Button variant="primary">Save changes</Button>
//               </Modal.Footer>
//         </Modal.Dialog>
//         </div>
//       )
//   } else {
//       return (<button onClick={() => {setShowModal(true)}}>Open Modal</button>)
//   }
