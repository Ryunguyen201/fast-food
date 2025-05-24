import { memo, useState } from 'react'
import './style.scss';
import { Link } from 'react-router';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';


const Footer = () => {
    return <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="footer-about">
                        <h1 className='footer-about__logo'>PHU SHOP</h1>
                        <ul>
                            <li>Địa chỉ: 345/35 Nguyễn Văn Công, quận Gò Vấp, tp HCM</li>
                            <li>Phone: 0395591212</li>
                            <li>mail: nguyendinhphu151@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className='footer-widget'>
                        <h6>Cửa hàng</h6>
                        <ul>
                            <li>
                                <Link to="#">Liên hệ</Link>
                            </li>
                            <li>
                                <Link to="#">Thông tin về chúng tôi</Link>
                            </li>
                            <li>
                                <Link to="#">Sản phẩm kinh doanh</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="#">Thông tin tài khoản</Link>
                            </li>
                            <li>
                                <Link to="#">Giỏ hàng</Link>
                            </li>
                            <li>
                                <Link to="#">Danh sách ưa thích</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <div className="footer-widget">
                        <h6>Khuyến mãi</h6>
                        <p>Đăng kí nhận thông tin tại đây</p>
                        <form action="#">
                            <div className='input-group'>
                                <input type="text" placeholder="Nhập email"/>
                                <button type="submit" className='button-submit'>Đăng ký</button>
                            </div>
                            <div className='footer-widget-social'>
                                <div>
                                    <AiOutlineFacebook />
                                </div>
                                <div>
                                    <AiOutlineInstagram />
                                </div>
                                <div>
                                    <AiOutlineLinkedin />
                                </div>                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}

export default memo(Footer)