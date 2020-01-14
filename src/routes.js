import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository/:repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}

/**
 * Switch permite que somente uma pagina seja exibida (BrowserRouter permite que mais de um componente seja exibido)
 *
 * `exact` é usado para quando o usuario estiver naquela rota mesmo
 */
