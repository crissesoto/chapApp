import { React }                            from 'react';
import {BrowserRouter as Router, Route}     from 'react-router-dom';

import SingIn                               from './components/SingIn/SignIn';
import ChatRoom                             from './components/ChatRoom/ChatRoom';
  
const App = () => {
    return(
        <Router>
            <Route path="/" exact component={SingIn} />
            <Route path="/chatRoom" exact component={ChatRoom} />
        </Router>
    )
}

export default App;