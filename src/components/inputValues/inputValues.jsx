import './inputValues.css';

import { Component } from 'react';


export default class InputValues extends Component {

    constructor(props) {
        super(props);

        this.state = {
            securityPercentage: null,
            securityPercentage2: null,
            classNames: {
                red: ''
            }
        }

        this.percentageUpdate = this.percentageUpdate.bind(this);
        this.createGraphics = this.createGraphics.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.generatePoints = this.generatePoints.bind(this);
    }

    percentageUpdate(event, inputNumber) {
        if (inputNumber === 1) {
            this.setState({
                securityPercentage: parseInt(event.target.value)
            });
        } else if (inputNumber === 2) {
            this.setState({
                securityPercentage2: parseInt(event.target.value)
            });
        }
    }

    generatePoints(securityPercentage, securityPercentage2) {
        let arr = [];
        let k = 0;
        let z = 0;
        for (let i = 1; i < 100; i++) {
            if (Math.floor(Math.random() * 100) > securityPercentage &&
                Math.floor(Math.random() * 100) > securityPercentage2) {
                arr.push({
                    numberOfAttaks: i,
                    numberOfSucsessfulAttaks: ++k,
                    numberOfSucsessfulAttaks1: ++z
                });
            } else if (Math.floor(Math.random() * 100) > securityPercentage) {
                arr.push({
                    numberOfAttaks: i,
                    numberOfSucsessfulAttaks: ++k,
                    numberOfSucsessfulAttaks1: z
                });
            } else if (Math.floor(Math.random() * 100) > securityPercentage2) {
                arr.push({
                    numberOfAttaks: i,
                    numberOfSucsessfulAttaks: k,
                    numberOfSucsessfulAttaks1: ++z
                });
            }     
        }
        return arr;
    }

        createGraphics() {
            this.props.onUpdateGraphicValues(
                this.generatePoints(this.state.securityPercentage, this.state.securityPercentage2),
                this.state.securityPercentage,
                this.state.securityPercentage2
            );
        }

        onSubmit() {
            if (this.state.securityPercentage === null ||
                this.state.securityPercentage === 0 ||
                this.state.securityPercentage >= 100 ||
                isNaN(this.state.securityPercentage) ||
                this.state.securityPercentage2 === null ||
                this.state.securityPercentage2 === 0 ||
                this.state.securityPercentage2 >= 100 ||
                isNaN(this.state.securityPercentage2)){
                this.setState({
                    classNames: {
                        ...this.state.classNames,
                        red: 'red'
                    }
                });
                return null;
            } else {
                this.setState({
                    classNames: {
                        ...this.state.classNames,
                        red: ''
                    }
                });
                this.createGraphics();
            }


        }


        render() {
            return (
                <div className='box'>
                    <h1>Процент защищённости:</h1>
                    <input onChange={(event) => this.percentageUpdate(event, 1)}
                        type='text' placeholder='Значение в %'
                        className={`valueInput ${this.state.classNames.red}`}>
                    </input>
                    <input onChange={(event) => this.percentageUpdate(event, 2)}
                        type='text' placeholder='Значение в %'
                        className={`valueInput ${this.state.classNames.red}`}>
                    </input>
                    <button className="btn-create" onClick={this.onSubmit}>Submit</button>
                </div>
            );
        }
    }