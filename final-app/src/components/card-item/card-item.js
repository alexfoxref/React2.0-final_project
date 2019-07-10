import React from 'react';

const CardItem = ({cardItem, funcName, onItemSelected, id}) => {

    const {name, url, price, country} = cardItem;
    const cardClass = (funcName === 'getBestItems') ? 'best' : 'shop';

    return (
        <div 
            className={`${cardClass}__item`}
            onClick={() => {
                if (funcName !== 'getGoodsItems') {
                    onItemSelected(id)
                }
            }}>
                <img src={url} alt={name}></img>
                <div className={`${cardClass}__item-title`}>
                    {name}
                </div>
                {country ? <div className="shop__item-country">{country}</div> : null}
                <div className={`${cardClass}__item-price`}>{price}</div>
        </div>
    )
};

export default CardItem;