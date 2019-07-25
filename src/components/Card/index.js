import React, {Component} from 'react'
import {CardTitle,Card,Col} from 'react-materialize'
export default class CardWC extends Component {

    render() {
        return (
           
                <Col m={3} s={6}>
                    <Card header={<CardTitle image={this.props.url} title={this.props.title}/>
                
                } title={this.props.title} reveal={< p> {this.props.description} </p>}
                    >
                        <p>
                            <a href="#">
                                {this.props.price}
                            </a>
                        </p>
                    </Card>
                </Col>
          
        );
    }

}