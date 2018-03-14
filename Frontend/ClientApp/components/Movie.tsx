import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Movie extends React.Component<any, any> {
    details: any;

    constructor(props: any) {
        super(props);

        this.state = { currentCount: 0 };
        let id = props.match.params.id;

        fetch('api/Data/moviedetails/?id=' + id)
            .then(response => response.json())
            .then(data => {
                this.details = data;
                this.setState(data);
            });
    }

    public render() {
        if (this.details) {
            let title = this.details.title;
            let summary = this.details.summary;
            let price = this.details.price;
            let rating = this.details.rating;
            let watched = this.details.watched;
            let inStock = this.details.inStock;

            return <div>
                <h1>{title}</h1>

                <p>{summary}</p>


                <button onClick={() => { this.incrementCounter() }}>Increment</button>
            </div>;
        }

        return <div>Loading...</div>;
    }

    incrementCounter() {
        this.setState({
            //currentCount: this.state.currentCount + 1
        });
    }
}