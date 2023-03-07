import React, { useState, useEffect } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { addToCart } from '../../../store/actions/cartActions';
import DISCOUNT_TYPES from '../../../constants/discounts';

const ItemCard = ({ item, dispatch }) => {
    const { id, name, description, price, image } = item;
    const [discountType, setDiscountType] = useState(null);
    const [discountPrice, setDiscountPrice] = useState(null); // only ever set for percentage discounts

    useEffect(() => {
        // check if the item has any kind of discount
        if (item && item.discount) {
            setDiscountType(DISCOUNT_TYPES[item.discount]);
        }
    }, [item]);

    useEffect(() => {
        // if it's a percentage discount we also display the new price
        if (discountType && item && item.discount.includes('PERCENT')) {
            const discountedPrice = item.price - discountType.getDiscount(item.id);
            setDiscountPrice(discountedPrice.toFixed(2));
        }
    }, [discountType, item]);

    const handleAddToCart = () => {
        dispatch(addToCart(id, 1));
    };

    const renderDiscountIndicator = () => {
        if (discountType) {
            const { name, description } = discountType;
            return <span className='item-card-discount' data-discount-name={name} title={description} />;
        }
        return '';
    };

    return (
        <article className='item-card'>
            {renderDiscountIndicator()}
            <div className='item-card-image'>
                <img src={image} alt='item' />
            </div>
            <footer className='item-card-footer'>
                <h3 className='item-card-footer-title'>{name}</h3>
                <div className='item-card-footer-subtitle'>{description}</div>
                <div className='item-card-footer-price-wrap'>
                    {/* conditionally rendering reduced price, if percentage discount */}
                    {discountPrice && <div className='item-card-footer-price discount'>{`${discountPrice} CHF`}</div>}
                    <div className={`item-card-footer-price ${discountPrice ? 'strike' : ''}`}>{`${price} CHF`}</div>
                </div>
                <button className='btn-add-cart' onClick={handleAddToCart}>
                    Add To Cart
                </button>
            </footer>
        </article>
    );
};

export default connect()(ItemCard);
