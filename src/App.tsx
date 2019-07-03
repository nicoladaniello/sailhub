import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SHNavbar from "./components/menus/SHNavbar";
import HomePage from "./components/pages/home/home";
import NotFound from "./components/pages/NotFound/NotFound";
// import Page from "./components/pages/Page/Page";
import Posts from "./components/pages/Posts/Posts";
import Products from "./components/pages/Products/Products";
import BlogPost from "./posts/BlogPost";

import "./App.scss";
import BlogPostCard from "./posts/BlogPost/card";

const App: React.FC = () => {
  return (
    <div className="App">
      <SHNavbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/wordpress/" component={HomePage} />
          <Route path="/wordpress/blog/card/:uri" component={BlogPostCard} />
          <Route path="/wordpress/blog/:uri" component={BlogPost} />
          <Route path="/wordpress/destinations/:slug" component={Posts} />
          <Route exact path="/wordpress/products/" component={Products} />
          <Route path="/wordpress/products/:slug" component={Products} />
          {/* <Route path="/wordpress/:slug" component={Page} /> */}
          <Route render={props => <NotFound {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
