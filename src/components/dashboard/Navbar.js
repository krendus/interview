import React, { useRef, useState } from 'react'
import logo from '../../assets/logo2.svg'
import bag from '../../assets/bag.svg'
import dot from '../../assets/dot.svg'
import chevR from '../../assets/chevR.svg'
import search from '../../assets/search.svg'
import style from '../../styles/Dashboard.module.css'
import dropDownIcon from '../../assets/hamburger-menu.svg'
const Navbar = ({setSearched, searched}) => {
    const dropdownRef = useRef(null)
    const [searchInput, setSearchInput] = useState('')
    return (
        <nav className={style.navContainer}>
            <div className={style.topNav}>
                <div className={style.topFrame}>
                    <img src={logo} alt="" className={style.logo} aria-label="logo"/>
                    <div className={style.topFrameRight}>
                        <div className={style.searchContainer}>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                setSearched(searchInput)
                            }}>
                            <input type="text" value={searchInput} placeholder='Search for products, categories ...' onChange={(e) => setSearchInput(e.target.value)}/>
                            </form>
                            <img src={search} style={{cursor: 'pointer'}} alt="" tabIndex="0" role="button" aria-label="search button" onClick={() => {
                                setSearched(searchInput)}
                            }/>
                        </div>
                        <div className={style.navLink} ref={dropdownRef}>
                            <button>Get measured</button>
                            <button>Categories</button>
                            <button>Sell on twine</button>
                            <button>Login <img src={dot} alt="" style={{margin: '0 3px'}} /> Signup</button>
                        </div>
                        
                        <div className={style.cartCont}>
                            <button>
                                <img src={bag} alt="" />
                                <span style={{display: 'inline-flex'}}>My Cart</span>
                                <span className={style.cartCount}>0</span>
                            </button>
                        </div>
                        <button className={style.hamButton} onClick={() => {
                            if(dropdownRef.current.style.display === 'flex'){
                                dropdownRef.current.style.display = 'none'
                            } else {
                                dropdownRef.current.style.display = 'flex'
                            }
                        }}>
                            <img src={dropDownIcon} alt='' />
                        </button>
                    </div>  
                </div>
                
            </div>
            <div style={{background: 'white',borderBottom: '1px solid #D7DBDE'}}>
                <div className={style.bottomFrame}>
                    <span className={style.bottomFrameH}>Home</span>
                    <img src={chevR} alt="" />
                    <span className={style.bottomFrameR}>Search results for {searched}</span>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar
