import * as React from 'react';
import { NavMenu } from './NavMenu';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className='container'>
            <div className="row">
                <img src="/images/blockbusterslogo.png" />
            </div>
            <hr/>
            <div className='row'>
                <div className='col-sm-12'>
                    { this.props.children }
                </div>
            </div>
        </div>;
    }
}