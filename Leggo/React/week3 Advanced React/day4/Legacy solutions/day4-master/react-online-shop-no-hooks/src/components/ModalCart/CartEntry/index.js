import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../../store/actions/cartActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import DISCOUNT_TYPES from '../../../constants/discounts';

const CartEntry = ({ entry, item, entryDiscount, dispatch }) => {
    const handleIncrement = () => dispatch(addToCart(entry.id, 1));
    const handleDecrement = () => dispatch(removeFromCart(entry.id, 1));
    const handleRemove = () => dispatch(removeFromCart(entry.id, entry.amount));

    const getRegularPrice = () => (item.price * entry.amount).toFixed(2);
    const getDiscountedPrice = () => (getRegularPrice() - entryDiscount).toFixed(2);

    const renderDiscountPrice = () => {
        if (entryDiscount) {
            return <div className='cart-entry-price discount'>{`${getDiscountedPrice()} CHF`}</div>;
        }
        return '';
    };

    const renderRegularPrice = () => {
        const classNames = `cart-entry-price ${entryDiscount ? 'strike' : ''}`;
        return <div className={classNames}>{`${getRegularPrice()} CHF`}</div>;
    };

    return (
        <>
            <div className='cart-entry'>
                <div className='cart-entry-image'>
                    <img src={item.image} alt='cart item' />
                </div>
                <div className='cart-entry-flexwrap'>
                    <div className='cart-entry-name'>{item.name}</div>
                    <div className='cart-entry-actions'>
                        <button className='btn btn-decrement' onClick={handleDecrement}>
                            <FontAwesomeIcon icon={faMinusCircle} />
                        </button>
                        <div className='cart-entry-amount'>{entry.amount}</div>
                        <button className='btn btn-increment' onClick={handleIncrement}>
                            <FontAwesomeIcon icon={faPlusCircle} />
                        </button>
                    </div>
                </div>
                <div className='cart-entry-price-wrap'>
                    {renderDiscountPrice()}
                    {renderRegularPrice()}
                </div>
                <button className='btn btn-delete' title='remove from cart' onClick={handleRemove}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>
        </>
    );
};

const mapStateToProps = (state, ownProps) => {
    const { entry } = ownProps;

    const getEntryDiscount = (itemId, amount) => {
        const item = state.items[itemId];
        const discountType = DISCOUNT_TYPES[item.discount];
        const discount = discountType ? discountType.getDiscount(itemId, amount) : 0;
        return discount;
    };

    return {
        item: state.items[entry.id],
        entryDiscount: getEntryDiscount(entry.id, entry.amount)
    };
};

export default connect(mapStateToProps)(CartEntry);
