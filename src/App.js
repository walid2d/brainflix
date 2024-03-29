import UploadPage from "./Pages/UploadPage/Upload";
import Header from "./Components/Header/Header";
import NotFound from "./Pages/NotFound/NotFound";
import { Component } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import "./App.scss";
import MainPage from "./Components/MainPage/MainPage";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact component={MainPage} />
            <Route path="/upload" exact component={UploadPage} />
            <Route path="/home/:videoId" exact component={MainPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
