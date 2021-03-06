import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { MovieDetails } from 'microfrontends.details';
import { TrailerView } from 'microfrontends.trailers';
import { Ratings } from 'microfrontends.ratings';
import { PriceDisplay } from 'microfrontends.pricing';

export class MovieDetailScreen extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        let id = props.match.params.id;

        this.state = {
            loading: true
        };

        fetch('api/Data/?moviedetails=' + id)
            .then(response => response.json())
            .then(data => {
                let state = this.state;
                state.loading = false;

                state.movieDetails = {
                    title: data.MovieDetails.title,
                    summary: data.MovieDetails.summary,
                    posterUrl: data.MovieDetails.posterUrl
                };

                state.trailer = {
                    trailerId: data.trailerUrl
                };

                state.pricing = {
                    totalPrice: data.totalPrice
                };

                state.rating = {
                    imdbRating: data.imdbRating,
                    userRating: data.userRating
                };

                console.log(state.rating);

                this.setState(state);
            });
    }

    private getRating () {
        if (this.state.rating && this.state.rating.imdbRating && this.state.rating.userRating) {
            return <Ratings rating={this.state.rating} />;
        }

        return null;
    }

    public render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }

        return <span>
            <div className="row">
                <div className="col-sm-5">
                    <MovieDetails movieDetails={this.state.movieDetails} />
                </div>
                <div className="col-sm-7">
                    <div className="row action-row">
                        <div className="col-sm-4">
                            {this.getRating()}
                        </div>
                        <div className="col-sm-4"><PriceDisplay pricing={this.state.pricing} /></div>
                        <div className="col-sm-2">In Stock</div>
                        <div className="col-sm-2">
                            <button className="btn btn-success">Order now!</button>
                        </div>
                    </div>
                    <div className="row">
                        <TrailerView trailer={this.state.trailer} />
                    </div>
                </div>
            </div>
        </span>;
    }
}