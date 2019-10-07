import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Message from './pages/Message/message';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Message}/>
            </Switch>
        </BrowserRouter>
    )
}
