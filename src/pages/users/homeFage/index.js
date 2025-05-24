import { memo, useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.scss'
import { responsive, sliderItems, featProduct } from './manager'
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import { AiOutlineEye, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router'
import { fomaster } from '../../../ultis/fomaster';
import banner1 from 'D:/Phu/fast-food/src/assets/users/img/hero/banner/banner-1.jpg';
import banner2 from 'D:/Phu/fast-food/src/assets/users/img/hero/banner/banner-2.jpg';

const HomePage = () => {

    const renderFeaturedProducts = (featProduct) => {
        const tabList = [];
        const tabPanels = [];

        // Lấy toàn bộ key
        Object.keys(featProduct).forEach((index, key) => {
            // Lấy title tương ứng với key
            tabList.push(<Tab key={key}>{featProduct[index].title}</Tab>)

            // Lấy name tương ứng với key
            const tabPanel = []
            featProduct[index].products.forEach((item, j) => {
                tabPanel.push(<div className='col-lg-3 col-md-4 col-sm-6 col-xs-12' key={j}>
                    <div className='featured-item pl-pr-10'>
                        <div className='featured-item__img' 
                        style={{
                            backgroundImage: `url(${item.img})`,
                        }}>
                            <ul className='featured-item__hover'>
                                <li>
                                    <AiOutlineEye />
                                </li>
                                <li>
                                    <AiOutlineShoppingCart />
                                </li>
                            </ul>
                        </div>
                        <div className='featured-item__text'>
                            <h6>
                                <Link to="">{item.name}</Link>
                            </h6>
                            <h5>
                                {fomaster(item.price)}
                            </h5>
                        </div>
                    </div>
                </div>)
            })
            tabPanels.push(tabPanel)
        })


        return (
            <Tabs>
                <TabList>{tabList}</TabList>
                {tabPanels.map((item, key) => (
                        <TabPanel key={key}>
                            <div className='row'>
                                {item}
                            </div>
                        </TabPanel>
                    ))}
            </Tabs>
        )
    }
    return (
        <>
            {/* Category Begin */}
            <div className='container container__categories_slider'>
                <Carousel responsive={responsive} className='ctrg__slider'>
                    {sliderItems.map((item, keyItem) => (
                        <div
                            className='ctrg-slider__item'
                            style={{ backgroundImage: `url(${item.img})` }}
                            key={keyItem}
                        >
                            <p>{item.name}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
            {/* Category End */}

            {/* Featured Begin */}
            <div className='container'>
                <div className='featured'>
                    <div className='section-title'>
                        <h2>Sản phẩm nổi bật</h2>
                    </div>
                    {renderFeaturedProducts(featProduct)}
                </div>
            </div>
            {/* Featured End */}

            {/* Banner Begin */}
            <div className='container'>
                <div className='banner'>
                    <div className='banner-picture'>
                        <img src={banner1} alt='banner'/>
                    </div>
                    <div className='banner-picture'>
                        <img src={banner2} alt='banner'/>
                    </div>
                </div>

            </div>
            {/* Banner End */}
        </>
    );
}

export default memo(HomePage)