import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,IndexLink,IndexRoute,hashHistory} from 'react-router';

document.addEventListener('DOMContentLoaded', function(){
    class Template extends React.Component {
        render() {
            const style = {
                fontWeight : 'bold',
            };
            return <div>
                <div>
                    <IndexLink activeStyle={style} to="/">Główna</IndexLink> |
                    <IndexLink activeStyle={style} to="/checkage/15">Niepełn.</IndexLink> |
                    <IndexLink activeStyle={style} to="/checkage/50">Pełnole.</IndexLink> |
                    <IndexLink activeStyle={style} to="/hello/Jan">Powitanie Jana</IndexLink>
                </div>
                {this.props.children}
            </div>;
        }
    }

    class HelloYou extends React.Component {
        render() {
            return <h1>Witaj, {this.props.params.name}</h1>;
        }
    }

    class CheckAge extends React.Component {
        render() {
            // return <h1>{ this.props.params.age < 18 ? 'Niepełnoletni' : 'Pełnoletni' }</h1>;
            if ( this.props.params.age < 18 ){
                return <h1>Niepełnoletni</h1>;
            } else {
                return <h1>Pełnoletni</h1>;
            }
        }
    }

    class Main extends React.Component {
        render() {
            return <h1>Cześć na stronie!</h1>;
        }
    }

    class App extends React.Component {
        render () {
            return <Router history={hashHistory}>
                <Route path="/" component={Template}>
                    <IndexRoute component={Main}/>
                    <Route path="hello/:name" component={HelloYou} />
                    <Route path="checkage/:age" component={CheckAge} />
                </Route>
            </Router>
        }
    }
    ReactDOM.render(
        <App/>,
        document.getElementById('app') 
    );
});
