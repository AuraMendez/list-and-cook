import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Weekdays from './components/Weekdays';
import Recipes from './components/Recipes';
import List from './components/List';
import Welcome from './components/Welcome';




const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <h1>List&Cook</h1>
                        <p>easy decisions - easy groceries</p>
                        <nav></nav>
                    </header>
                    <main className="App-main">
                        <aside className="weekdays">
                            <h2>Weekdays</h2>
                            <Weekdays days={days} />
                        </aside>
                        <section className="main-content">
                            <nav>
                                <ul>
                                    <li><Link className="nav-link" to="/">Welcome</Link></li>
                                    <li><Link to="/recipes" className="nav-link">Browse recipes</Link></li>
                                    <li><Link to="/list" className="nav-link">My shopping list</Link></li>
                                </ul>
                            </nav>
                            <Switch>
                                <Route path="/recipes"><Recipes /></Route>
                                <Route path="/list"><List /></Route>
                                <Route path="/"><Welcome /></Route>
                            </Switch>
                        </section>
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
