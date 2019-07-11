import React from 'react';
import { Col } from 'reactstrap';
import {filterSelect} from '../../actions';
import {connect} from 'react-redux';

const FilterPanel = ({filterSelect, filterCountry}) => {
    const buttons = [
        {name: 'All', label: 'All'},
        {name: 'Brazil', label: 'Brazil'},
        {name: 'Kenya', label: 'Kenya'},
        {name: 'Columbia', label: 'Columbia'}
    ];
    // const activeClass = active ? 'shop__filter-btn-active' : '';

    const filterButtons = buttons.map(item => {
        const {name, label} = item;
        const active = filterCountry === name;
        const activeClass = active ? 'shop__filter-btn-active' : '';

        return (
            <button 
                className={`shop__filter-btn ${activeClass}`} 
                key={name}
                onClick={() => filterSelect(name)}>
                    {label}
            </button>
        )
    });

    return (
        <Col lg='4'>
            <div className="shop__filter">
                <div className="shop__filter-label">
                    Or filter
                </div>
                <div className="shop__filter-group">
                    {filterButtons}
                </div>
            </div>
        </Col>
    )
}

const mapStateToProps = ({filterCountry}) => {
    return {
        filterCountry
    };
}

const mapDispatchToProps = {
    filterSelect
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);
