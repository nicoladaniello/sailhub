import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/Navbar";
import HomePage from "./components/pages/home";
import NotFound from "./components/pages/NotFound";
import PostPage from "./components/Post/widgets/page";
import CategoryPage from "./components/Category/widgets/page";
import TagPage from "./components/Tags/widgets/page";

import "./App.scss";
import UsersPage from "./components/User/widgets/page";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route
            path="/wordpress/blog/categories/:slug"
            component={CategoryPage}
          />
          <Route path="/wordpress/blog/tagged/:slug" component={TagPage} />
          <Route path="/wordpress/blog/:uri" component={PostPage} />
          <Route exact path="/wordpress/" component={HomePage} />
          <Route path="/wordpress/users/" component={UsersPage} />
          <Route render={props => <NotFound {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
