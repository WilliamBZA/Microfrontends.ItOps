import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { MovieDetails } from 'microfrontends.details';
import { TrailerView } from 'microfrontends.trailers';
import { Ratings } from 'microfrontends.ratings';

export class MovieDetailScreen extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        let id = props.match.params.id;

        this.state = {
            movieDetails: {
                loading: true
            },
            rating: {
                loading: true
            },
            stock: {
                loading: true
            },
            watched: {
                loading: true
            },
            trailer: {
                loading: true
            }
        };

        fetch('api/Data/?moviedetails=' + id)
            .then(response => response.json())
            .then(data => {
                let state = this.state;
                state.movieDetails = {
                    loading: false,
                    title: data.MovieDetails.title,
                    summary: data.MovieDetails.summary,
                    posterUrl: data.MovieDetails.posterUrl
                };

                state.trailer = {
                    loading: false,
                    trailerId: data.trailerUrl
                };

                // Stock

                // watched


                state.rating.loading = false;
                state.rating.imdbRating = data.imdbRating;
                state.rating.userRating = data.userRating;

                console.log(state.rating);


                this.setState(state);
            });
    }

    public render() {
        var stock = {
            quantityInStock: 2
        };

        var watched = {
            dateWatched: ''
        };

        return <span>
            <div className="row">
                <div className="col-sm-12">
                    <MovieDetails movieDetails={this.state.movieDetails} />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-5">
                    <div className="row">
                        <div className="col-sm-1">
                            <Ratings rating={this.state.rating} />
                        </div>
                        <div className="col-sm-1">Price</div>
                        <div className="col-sm-1">In Stock</div>
                        <div className="col-sm-1">Watched</div>
                        <div className="col-sm-1">
                            <button className="btn btn-success">Order now!</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-7">
                    <TrailerView trailer={this.state.trailer} />
                </div>
            </div>
        </span>;
    }
}