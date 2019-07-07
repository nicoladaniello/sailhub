import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/Navbar";
import HomePage from "./components/pages/home";
import NotFound from "./components/pages/NotFound";
import PostPage from "./components/Post/widgets/page";

import "./App.scss";
import CategoryPage from "./components/Category/widgets/page";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/wordpress/" component={HomePage} />
          <Route
            path="/wordpress/blog/categories/:slug"
            component={CategoryPage}
          />
          <Route path="/wordpress/blog/:uri" component={PostPage} />
          <Route render={props => <NotFound {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
