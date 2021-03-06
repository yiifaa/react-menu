import React from 'react';
import ProductTable from './components/product-table';
import SearchBar from './components/search-bar';
import products from './models/products';

class FilterableProductTable extends React.Component {

    constructor() {
        super();

        this.handleUserInput = this.handleUserInput.bind(this);

        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }

    handleUserInput(filterText, inStockOnly) {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onUserInput={this.handleUserInput}
                />
                <ProductTable
                    products={products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        )
    }

}

export default FilterableProductTable;
