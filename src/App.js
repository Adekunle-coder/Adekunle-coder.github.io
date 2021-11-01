import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ProductProvider } from "./EventContext";
import AboutPage from "./About/AboutPage";
import HHomepage from "./Homepage/HHomepage";
import WalletPage from "./Wallet/WalletPage";
import CustomersPage from "./Customers/CustomersPage";
import NewsPage from "./News/NewsPage";
import DownloadPage from "./Download/DownloadPage";
import SearchPage from "./Search/SearchPage";
import PageNotFound from "./Unknown/PageNotFound";

function App() {
  return (
    <ProductProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <HHomepage />
          </Route>
          <Route path="/AboutPage" exact>
            <AboutPage />
          </Route>
          <Route path="/WalletPage" exact>
            <WalletPage />
          </Route>
          <Route path="/CustomersPage" exact>
            <CustomersPage />
          </Route>
          <Route path="/NewsPage" exact>
            <NewsPage />
          </Route>
          <Route path="/DownloadPage" exact>
            <DownloadPage />
          </Route>
          <Route path="/SearchPage" exact>
            <SearchPage />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </ProductProvider>
  );
}

export default App;
