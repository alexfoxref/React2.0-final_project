import React from 'react';
import {Route, Switch} from 'react-router-dom';

import CoffeePage from './coffee-page';
import ItemPage from './item-page';
import MainPage from './main-page';
import PleasurePage from './pleasure-page';
import ContactPage from './contact-page';
import NoMatchPage from './no-match-page';


export {
    CoffeePage,
    ItemPage,
    MainPage,
    PleasurePage,
    ContactPage,
    NoMatchPage
}



const coffeeItem = (id) => {
    return (
        <ItemPage
            selectedItem={id}/>
    )
};

const dynamicItem = (match) => {
    const {id} = match.params;

    return coffeeItem(id)
};

const routerConfig = [
    {
        path: '/',
        component: MainPage,
        exact: true
    },
    {
        path: '/coffee/',
        component: CoffeePage,
        exact: true
    },
    {
        path: '/pleasure/',
        component: PleasurePage,
        exact: true
    },
    {
        path: '/contact/',
        component: ContactPage,
        exact: true
    },
    {
        path: '/:id',
        component: ({match}) => dynamicItem(match),
        exect: true
    }
];

const routerItems = routerConfig.map(item => {
    const {path, component, exact} = item;

    return (
        <Route exact={exact} path={path} component={component} key={path}/>
    )
});

const matchPath = routerConfig.filter((item) => {
    const {path} = item;
    const location = window.location.pathname;
    const browserPath = (location[location.length - 1] === '/') ? location : `${location}/`;
    return (path === browserPath)
}).map(item => item.path);

const noMatchPage = (matchPath.length !== 0) ? null : NoMatchPage;

const Pages = () => {
    return (
        <Switch>
            {routerItems}
            <Route component={noMatchPage}/>
        </Switch>
    )
};

export default Pages;