import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Movie } from './components/Movie';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/movie/:id' component={ Movie } />
    <Route path='/fetchdata' component={ FetchData } />
</Layout>;
