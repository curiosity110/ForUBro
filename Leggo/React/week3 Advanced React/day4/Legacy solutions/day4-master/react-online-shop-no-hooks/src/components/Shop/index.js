import React from 'react';
import { connect } from 'react-redux';
import ItemList from '../ItemList';

const Shop = ({ items }) => {
    return <ItemList items={items} />;
};

const mapStateToProps = state => ({
    items: Object.values(state.items)
});

export default connect(mapStateToProps)(Shop);
