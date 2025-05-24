import { memo, useState } from 'react'
import { Link } from 'react-router';
import './style.scss'
import { CiFacebook } from "react-icons/ci";
import { CgInstagram } from "react-icons/cg";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { fomaster } from '../../../../ultis/fomaster';
import { AiOutlineDownCircle, AiOutlineFacebook, AiOutlineGlobal, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMenu, AiOutlinePhone, AiOutlineShoppingCart, AiOutlineUpCircle, AiOutlineUser } from "react-icons/ai";
import { BiUser } from 'react-icons/bi'
import { ROUTER } from '../../../../ultis/router';

const Header = () => {
    const [showMenuTablet, setShowMenuTablet] = useState(false)
    const [menus, setMenu] = useState([
        {
            name: 'Trang chủ',
            path: ROUTER.USER.HOME,
        },
        {
            name: 'Cửa hàng',
            path: ROUTER.USER.PRODUCTS,
        },
        {
            name: 'Sản phẩm',
            path: '',
            isShowSubMenu: false,
            child: [
                {
                    name: 'Thịt',
                    path: '',
                },
                {
                    name: 'Rau củ',
                    path: '',
                },
                {
                    name: 'Thức ăn nhanh',
                    path: '',
                },

            ]
        },
        {
            name: 'Bài Viết',
            path: '',
        },
        {
            name: 'Liên hệ',
            path: '',
        },
    ])
    const [isShowCategory, setIsShowCategory] = useState(false)
    return (
        <>
            {/* Lớp nền show menu tablet thì nền giao diện đổi màu và nhấn vào ẩn menu đi  */}
            <div className={`table-display ${showMenuTablet ? 'active' : ''}`}
                onClick={() => (setShowMenuTablet(!showMenuTablet))}
            >

            </div>
            {/* Hiển thị menu bên trái trong giao diện tablet */}
            <div className={`menu-tablet ${showMenuTablet ? 'show-menu ' : ''}`}>
                <div className='header-logo'>
                    <h1>PHU SHOP</h1>
                </div>
                <div className='menu-tablet__cart'>
                    <ul>
                        <li>
                            <Link to={''}>
                                <AiOutlineShoppingCart /> <span>1</span>
                            </Link>
                        </li>
                    </ul>
                    <div className='header-price'>
                        Giỏ hàng:<> </>
                        <span>
                            {(fomaster(100000))}
                        </span>
                    </div>
                </div>
                <div className='header-user'>
                    <div className='hearder-user__icon'>
                        <Link to={''}>
                            <BiUser /> Đăng nhập
                        </Link>
                    </div>
                </div>
                <div className='header-nav'>
                    <ul>
                        {menus.map((menu, menuKey) => (
                            <li key={menuKey} to={menu.path}>
                                <Link to={menu.path}
                                    onClick={() => {
                                        const newMenu = [...menus];
                                        newMenu[menuKey].isShowSubMenu = !newMenu[menuKey].isShowSubMenu;
                                        setMenu(newMenu);
                                    }}
                                >
                                    {menu.name}
                                    {menu.child && (menu.isShowSubMenu ? (
                                        <AiOutlineDownCircle />
                                    ) : (<AiOutlineUpCircle />)
                                    )}
                                </Link>
                                {menu.child && (
                                    <ul className={`hidenChildItem ${menu.isShowSubMenu ? 'showChildItem' : ''}`}>
                                        {menu.child.map((childItem, childKey) => (
                                            <li key={`${menuKey}-${childKey}`}>
                                                <Link to={childItem.path}>
                                                    {childItem.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='header-social'>
                    <Link to={''}>
                        <AiOutlineFacebook />
                    </Link>
                    <Link to={''}>
                        <AiOutlineInstagram />
                    </Link>
                    <Link to={''}>
                        <AiOutlineLinkedin />
                    </Link>
                    <Link to={''}>
                        <AiOutlineGlobal />
                    </Link>
                </div>
                <div className='heaer-contact'>
                    <ul>
                        <li>
                            <MdEmail /> phushop421@gmail.com
                        </li>
                        <li>Miễn phí đơn từ {(fomaster(200))}</li>
                    </ul>
                </div>
            </div>

            {/* Memu giao diện window */}
            <div className='header-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='col-6 header-top__left'>
                                <ul>
                                    <li>
                                        <Link to="">
                                            <MdOutlineEmail />
                                        </Link>
                                        hello@gmail.com
                                    </li>
                                    <li>
                                        <Link to="">
                                            <BsCart2 />
                                        </Link>
                                        Miễn phí giao hàng từ {fomaster(200000)}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-6 header-top__right'>
                            <ul>
                                <li>
                                    <Link to="">
                                        <CiFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <CgInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <PiLinkedinLogoLight />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <CiTwitter />
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <CiUser />
                                    </Link>
                                    <span>Login</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div class="header-logo">
                            <h1>SHOP PHU</h1>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <nav className='header-menu'>
                            <ul>
                                {
                                    // tránh trường hợp menu = null
                                    menus?.map((menu, menuKey) => (
                                        // Kiểm tra đang click vào trang nào
                                        <li key={menuKey} className={menuKey === 0 ? 'header-menu__active' : ''}>
                                            <Link to={menu?.path}>{menu?.name}</Link>
                                            {
                                                menu.child && (
                                                    <ul className='header-menu-dropdown'>
                                                        {
                                                            menu.child.map((childItem, childKey) => (
                                                                <li key={`${menuKey}-${childKey}`}>
                                                                    <Link to={childItem.path.name}>{childItem.name}</Link>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                )
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>


                    </div>
                    <div className='col-lg-3'>
                        <div class="header-cart">
                            <div className='header-cart__prise'>
                                <span>{fomaster(1000000000)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to='#'>
                                        <AiOutlineShoppingCart /> <span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* Hiện icon menu trong giao diện Tablet */}
                        <div className='icon-menu-tablet'>
                            <AiOutlineMenu onClick={() => (setShowMenuTablet(!showMenuTablet))} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row container-category'>
                    <div className='col-xl-3 col-sm-12 col-md-12 ctn-ctrg__left col-xs-12'>
                        <div className='ctn-ctrg__title' onClick={() => { setIsShowCategory(!isShowCategory) }}>
                            <AiOutlineMenu />
                            Danh sách sản phẩm
                        </div>
                        {/* Show category */}
                        <ul className={isShowCategory ? "" : 'hidden'}>
                            <li>
                                <Link to='#'>Thịt tươi</Link>
                            </li>
                            <li>
                                <Link to='#'>Rau củ</Link>
                            </li>
                            <li>
                                <Link to='#'>Nước trái cây</Link>
                            </li>
                            <li>
                                <Link to='#'>Hải sản</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-9 col-sm-12 col-md-12 ctn-main col-xs-12'>
                        <div className='main-form'>
                            <div className='main-form__search'>
                                <form>
                                    <input type='text' name='' value='' placeholder='Nhập thông tin sản phẩm' />
                                    <button type='submit'>Tìm kiếm</button>
                                </form>
                            </div>
                            <div className='main-serach__phone'>
                                <div className='serach-phone-icon'>
                                    <AiOutlinePhone />

                                </div>
                                <div className='serach-phone-text'>
                                    <p>0395590691</p>
                                    <span>Hỗ trợ 24/7</span>
                                </div>
                            </div>
                        </div>
                        <div className='main-cover'>
                            <div className='main-cover__text'>
                                <span>Trái cây tươi</span>
                                <h2>
                                    Rau quả
                                    <br />
                                    Sạch 100%
                                </h2>
                                <p>Miễn Phí giao hàng tận nơi</p>
                                <Link to='' className='main-cover__link'>Mua ngay</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Header)