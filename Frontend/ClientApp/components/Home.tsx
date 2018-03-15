import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { SearchInput } from 'microfrontends.search';

export class Home extends React.Component<RouteComponentProps<{}>, any> {
    constructor() {
        super();
    }

    public render() {
        var detailsUrl = function (movieId: string) {
            return '/moviedetails/' + movieId;
        };

        return <span><SearchInput urlProvider={detailsUrl}/></span>;
    }
}