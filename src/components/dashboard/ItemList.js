import React from 'react'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import minilogo from '../../assets/minilogo.svg'
import style from '../../styles/Dashboard.module.css'
const ItemList = () => {
    return (
        <div className={style.itemWrapper}>
            <p style={{textAlign: 'center', color:'rgb(201,201,201)', fontSize: '14px'}}>4 products found</p>
            <div className={style.listWrapper}>
                <Card image={img1} name="Male Dior Kaftan Lorem" price="₦12,600.00" type="Darangi"/>
                <Card image={img2} name="Male Dior Kaftan Lorem" price="₦12,600.00" type="Darangi"/>
                <Card image={img3} name="Male Dior Kaftan Lorem" price="₦12,600.00" type="Darangi"/>
                <Card image={img4} name="Male Dior Kaftan Lorem" price="₦12,600.00" type="Darangi"/>
            </div>
        </div>
    )
}

export default ItemList
const Card = ({image, name, price, type}) => {
    return(
    <div className={style.card} tabIndex="0">
        <img src={image} alt="" style={{height: '400px' }}/>
        <p style={{color: '#3D4853', fontSize: '14px'}}>{name}</p>
        <p style={{color: '#3D4853', fontSize: '14px', fontWeight: '600'}}>{price}</p>
        <p style={{color: '#3D4853', fontSize: '14px', paddingTop: '5px'}}><img src={minilogo} alt="" />{type}</p>
    </div>
    )
}