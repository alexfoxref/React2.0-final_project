import React from 'react';
import CoffeeServiceContext from '../coffee-service-context';

const WithCoffeeService = () => (Wrapped) => {
    return (props) => {
        return (
            <CoffeeServiceContext.Consumer>
                {
                    (CoffeeService) => {
                        return <Wrapped {...props} RestoService={CoffeeService}/>
                    }
                }
            </CoffeeServiceContext.Consumer>
        )
    };
};

export default WithCoffeeService;