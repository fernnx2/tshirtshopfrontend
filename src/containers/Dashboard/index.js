import React, {Component} from 'react'
import {connect} from 'react-redux'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import {showProducts} from '../../actions/products'
import {Row, Col} from 'react-materialize'
import Pagination from 'react-js-pagination'
class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            limit: 4,
            description_length:200,
        }
       
    }

    componentWillMount() {
        this.props.showProducts(this.state.activePage,this.state.limit,this.state.description_length);
    }

    handlePageChange(pageNumber) {
        this.setState({activePage:pageNumber});
        this.props.showProducts(this.state.activePage,this.state.limit,this.state.description_length);
    }

    renderProductList() {
        return this.props.products.map((product) => {
                return (
                    <Card
                        key={product.id}
                        title={product.name + product.product_id}
                        url={"http://localhost:8080/product_images/" + product.thumbnail}
                        price={product.price}
                        description={product.description}></Card>
                );
            });
    }

    render() {

        return (
            <div>
                <Navbar></Navbar>
                <div>
                    <Row>
                        {this.renderProductList()}

                    </Row>
                    <Row>
                        <Col m={12} s={12}>
                            <Pagination
                                activePage={this.state.activePage}
                                itemsCountPerPage={4}
                                activeLinkClass="blue"
                                totalItemsCount={450}
                                pageRangeDisplayed={5}
                                onChange={this.handlePageChange.bind(this)} />
                        </Col>
                    </Row>

                </div>

            </div>
        );
    }

}
function mapStateToProps(state) {
    return {products: state.product.list}
}
export default connect(mapStateToProps, {showProducts})(Dashboard)