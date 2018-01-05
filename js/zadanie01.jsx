import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,IndexLink,IndexRoute,hashHistory} from 'react-router';


document.addEventListener('DOMContentLoaded', function(){
  class Template extends React.Component {
      render() {
          return <ul>
            <IndexLink to='/services/www'>dsa</IndexLink>
            {this.props.children}
          </ul>
      }
  }
  class ServiceInfo extends React.Component {
      render () {
        return <h1>Proponujemy usuge {this.props.params.services}</h1>
        }
      }
  class App extends React.Component {
      render () {
          return <Router history={hashHistory}>
              <Route path="/" component={Template}>
                  <IndexRoute component={ServiceInfo}/>
                  <Route path="sevices/:service" component={ServiceInfo} />
              </Route>
          </Router>
      }
  }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
