import AddBlog from './AddBlog';
import BlogDetails from './BlogDetails';
import Home from './Home'
import Info from './Info';
import Nav from './Nav'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import Footer from './Footer';


function App() {
  let name = 'Mohayyad';
  return (
    <>
    <Router>
    <div className="App">

        < Nav /> 

        <div className="content">
        <Switch>

        <Route exact path="/">
        <Home />
        </Route>

        <Route path="/add">
        <AddBlog />
        </Route>

        <Route path="/info">
        <Info />
        </Route>

        <Route path="/blogs/:id">
        <BlogDetails />
        </Route>

        <Route path="*">
          <NotFound></NotFound>
        </Route>

        </Switch>
        </div>

      <Footer />

    </div>
    </Router>
    </>
  );
}

export default App
