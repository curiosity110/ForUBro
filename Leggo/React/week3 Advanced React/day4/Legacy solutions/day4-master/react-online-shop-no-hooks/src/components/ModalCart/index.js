import React, { useEffect } from 'react';
import './index.scss';
import GenericModalContainer from '../GenericModal';
import CartEntry from './CartEntry';
import { connect } from 'react-redux';
import { setModal } from '../../store/actions/modalActions';
import DISCOUNT_TYPES from '../../constants/discounts';

import { useHistory } from 'react-router-dom';

const namespace = 'ModalCart'; // the key under which this modals data and visibility will be stored in redux (state.modals[namespace])
const ModalCart = ({ cart, totalPrice, totalDiscount, isVisible, dispatch }) => {
    // You could also use local state (see below) to handle visibility but the benefit of storing it in redux is,
    // that you can can open/close it from wherever you want by dispatching the "setModal" action with the right "namespace"
    // const [isVisible, setIsVisible] = useState(true);
    // const handleClose = () => setIsVisible(false);

    const history = useHistory();

    useEffect(() => {
        // Initialize modal namespace. Called ONCE when component mounts
        dispatch(setModal(namespace, {}, false));
    }, [dispatch]);

    useEffect(() => {
        // preventing the body from scrolling whenever modal is open
        document.body.style.overflow = isVisible ? 'hidden' : 'unset';
    }, [isVisible]);

    const handleClose = () => {
        dispatch(setModal(namespace, {}, false));
        history.push('/');
    } 
    const handleBuy = () => alert(`Checkout: Give me ${totalPrice} CHF`);

    const renderDiscountedTotal = () => {
        if (totalDiscount) {
            const discountedTotal = (totalPrice - totalDiscount).toFixed(2);
            return <div className='cart-total-discount'>{`${discountedTotal} CHF`}</div>;
        }
        return '';
    };

    const renderRegularTotal = () => {
        const classNames = `cart-total-regular ${totalDiscount ? 'strike' : ''}`;
        return <div className={classNames}>{`${totalPrice.toFixed(2)} CHF`}</div>;
    };

    return (
        <>
            {isVisible && cart && (
                <GenericModalContainer close={handleClose}>
                    <div className={`cart ${isVisible ? 'body-override' : ''}`}>
                        <header className='cart-header'>
                            <h2>My Cart</h2>
                            <button className='cart-header-btn-close' onClick={handleClose}></button>
                        </header>
                        <div className='cart-items'>
                            {cart && cart.map(entry => <CartEntry entry={entry} key={'cart' + entry.id} />)}
                        </div>
                        <footer className='cart-footer'>
                            <button className='btn-checkout' onClick={handleBuy}>
                                Checkout
                            </button>
                            <span>total: </span>
                            <div className='cart-total'>
                                {/* <div className='cart-total-wrap'> */}
                                {renderRegularTotal()}
                                {renderDiscountedTotal()}
                                {/* </div> */}
                            </div>
                        </footer>
                    </div>
                </GenericModalContainer>
            )}
        </>
    );
};

const mapStateToProps = state => {
    const items = state.items;
    const cartEntries = Object.values(state.cart);

    // Total price of your cart before discount
    const totalPrice = cartEntries.reduce((total, e) => total + e.amount * items[e.id].price, 0);

    // All discounts of cart entries combined
    const totalDiscount = cartEntries.reduce((total, entry) => {
        const item = state.items[entry.id];
        const discountType = DISCOUNT_TYPES[item.discount];
        const discount = discountType ? discountType.getDiscount(entry.id, entry.amount) : 0;
        return total + discount;
    }, 0);

    return {
        cart: cartEntries,
        isVisible: state.modals[namespace] ? state.modals[namespace].isVisible : false,
        totalPrice,
        totalDiscount
    };
};

export default connect(mapStateToProps)(ModalCart);
