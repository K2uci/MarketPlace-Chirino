import React from 'react'
import './ContItem.css'
//TYPE
import itemInfo from '../../interfaces/itemInfo'


const ContItem: React.FC<{item:itemInfo}> = ({item}) => {
    return (
        <div className="item_cont">
            <img className="item_cont_photo" src={item.image} alt="" />
            <p className="title">
                {item.title}
            </p>
            <p className="price">
                {item.price}
            </p>
        </div>
    )
}

export default ContItem