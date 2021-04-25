import React, { Component } from 'react';

import Graphic from './graphic/graphic';
import GraphicWithTwoLines from './graphicWithTwoLines/graphicWithTwoLines';
import InputValues from './inputValues/inputValues';

import './graphicWork.css';

export default class GraphicsWork extends Component {

    constructor(props) {
        super(props);

        this.state = {
            points: [],
            securityPercentage: 0,
            securityPercentage2: 0
        }

        this.onUpdateGraphicValues = this.onUpdateGraphicValues.bind(this);
    }

    onUpdateGraphicValues(points, securityPercentage, securityPercentage2) {
        this.setState({
            points,
            securityPercentage,
            securityPercentage2
        })
    }

    render() {

        return (
            <>
                <div className="conteiner">
                    <div>
                        <InputValues onUpdateGraphicValues={this.onUpdateGraphicValues} />
                    </div>
                    <div>
                        <Graphic points={this.state.points}
                            securityPercentage={this.state.securityPercentage}
                            securityPercentage2={this.state.securityPercentage2}
                            version={1} />
                    </div>
                </div>
                <div className="conteiner">
                    <div>
                        <Graphic points={this.state.points}
                            securityPercentage={this.state.securityPercentage}
                            securityPercentage2={this.state.securityPercentage2}
                            version={2} />
                    </div>
                    <div>
                        <GraphicWithTwoLines points={this.state.points}
                            securityPercentage={this.state.securityPercentage}
                            securityPercentage2={this.state.securityPercentage2}/>
                    </div>
                </div>
            </>
        );
    }
}