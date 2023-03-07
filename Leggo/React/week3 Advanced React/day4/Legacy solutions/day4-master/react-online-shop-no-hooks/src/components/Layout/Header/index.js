import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { setModal } from '../../../store/actions/modalActions';
import  UserMenu from '../../UserMenu';

import { useHistory } from 'react-router-dom';

const Header = ({ numItemsInCart, dispatch }) => {

    const history = useHistory();

    const handleOpenCart = (e) => {
        dispatch(setModal('ModalCart', {}, true));
        history.push('/shopping-cart');
    };

    return (
        <header className='main-header'>
            <div className='main-header-wrapper'>
                <h1>Propulsion Shop</h1>
                <button className='main-header-btn-cart' data-amount={numItemsInCart} onClick={handleOpenCart}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span> Cart</span>
                </button>
                <UserMenu />
            </div>
        </header>
    );
};

const mapStateToProps = state => {
    return {
        numItemsInCart: Object.values(state.cart).reduce((total, current) => total + current.amount, 0)
    };
};

export default connect(mapStateToProps)(Header);
