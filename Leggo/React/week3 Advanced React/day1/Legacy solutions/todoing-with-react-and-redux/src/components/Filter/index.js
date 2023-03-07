import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeFilter } from '../../store/actions'
import './index.css';

class Filter extends Component {

    handleFilterChange = (e) => {
        console.log(e.currentTarget.id);

        const action = changeFilter(e.currentTarget.id);
        this.props.dispatch(action);
    }

    isChecked = (filter) => filter === this.props.selectedFilter

    render() {
        return (
            <div className="Filter">
                <input
                    type="radio"
                    name="filter"
                    // all the todos 
                    id="all"
                    checked={this.isChecked('all')}
                    onChange={this.handleFilterChange}
                />
                <label htmlFor="all">All</label>
                <input
                    type="radio"
                    name="filter"
                    // only completed todos
                    id="completed"
                    checked={this.isChecked('completed')}
                    onChange={this.handleFilterChange}
                />
                <label htmlFor="completed">Completed</label>
                <input
                    type="radio"
                    name="filter"
                    // uncompleted todos
                    id="uncompleted"
                    checked={this.isChecked('uncompleted')}
                    onChange={this.handleFilterChange}
                />
                <label htmlFor="uncompleted">Uncompleted</label>
            </div>
        )
    }
}

Filter.propTypes = {
    selectedFilter: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
    return {
        selectedFilter: state.filter,
    }
};

export default connect(mapStateToProps)(Filter);
