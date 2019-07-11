import React from 'react';
import { Col, Form, Label, Input } from 'reactstrap';
import {connect} from 'react-redux';
import {searchCard} from '../../actions';

const SearchPanel = ({searchCard}) => {

    return (
        <Col lg={{ size: 4, offset: 2 }}>
            <Form action="search" className="shop__search">
                <Label 
                    className="shop__search-label" 
                    for="filter">Looking for
                </Label>
                <Input 
                    style={{display:'inline-block'}}
                    id="filter" 
                    type="text" 
                    placeholder="start typing here..." 
                    className="shop__search-input"
                    onChange={event => searchCard(event.target.value)}>
                </Input>
            </Form>
        </Col>
    )
    
}

const mapStateToProps = ({cards, search}) => {
    return {
        cards,
        search
    }
};

const mapDispatchToProps = {
    searchCard
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);