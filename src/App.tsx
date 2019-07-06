import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import HomePage from "./components/pages/home";
import NotFound from "./components/pages/NotFound";
import Post from "./Post/Post";

import "./App.scss";
import Category from "./Category";
import PostTemplate from "./Post/template";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/wordpress/" component={HomePage} />
          <Route path="/wordpress/blog/category/:uri" component={Category} />
          <Route
            path="/wordpress/blog/:uri"
            render={props => (
              <Post {...props}>
                <PostTemplate />
              </Post>
            )}
          />
          {/* <Route path="/wordpress/:slug" component={Page} /> */}
          <Route render={props => <NotFound {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
