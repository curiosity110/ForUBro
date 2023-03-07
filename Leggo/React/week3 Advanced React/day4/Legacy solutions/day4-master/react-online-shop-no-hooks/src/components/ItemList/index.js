import React from 'react';
import './index.scss';
import ItemCard from './ItemCard';
import LazyLoad from 'react-lazyload'; // can improve performance

const ItemList = ({ items }) => {
    return (
        <div className='item-list'>
            {items &&
                items.map(item => (
                    <LazyLoad height={450} key={item.id}>
                        <ItemCard item={item} />
                    </LazyLoad>
                ))}
        </div>
    );
};

export default ItemList;
