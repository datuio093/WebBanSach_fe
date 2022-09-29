import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route, Switch} from "react-router-dom";
import HomeTemplate from './container/HomeTemplate';
import { routesUser } from './routes';
function App() {
  const showLayoutUser=(routes)=>{
    
    if(routes&& routes.length>0){
      return routes.map((item,index)=>{
        return(
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.Component}
          />
           
        )

      });
    }

  }
  return (


  <BrowserRouter>
    <Switch>
    {showLayoutUser(routesUser)}
    </Switch>
  </BrowserRouter>

  );
}

export default App;
