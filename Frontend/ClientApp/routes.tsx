import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { MovieDetailScreen } from './components/MovieDetailScreen';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/moviedetails/:id' component={ MovieDetailScreen } />
    <Route path='/fetchdata' component={ FetchData } />
</Layout>;
