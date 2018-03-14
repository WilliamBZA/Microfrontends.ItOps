import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { SearchInput } from 'microfrontends.search';

export class Home extends React.Component<RouteComponentProps<{}>, any> {
    constructor() {
        super();
    }

    public render() {

        return <span><SearchInput /></span>;

        //if (this.state.loading) {
        //    return <div>Loading...</div>;
        //}

        //let movies = this.state.movies;
        //let tripleMovies = [];
        //for (let i = 0; i < movies.length; i += 3) {
        //    tripleMovies.push(movies.slice(i, i + 3));
        //}

        //<span>{tripleMovies.map((row, index) => {
        //    return <div key={"row" + index} className="row">
        //        {row.map((movie: any) => {
        //            return <div key={movie.title} className="col-lg-4">
        //                <Thumbnail movieSummary={movie} />
        //            </div>
        //        })}
        //    </div>
        //})}</span>;

        //return <SearchInput></SearchInput>;
    }
}