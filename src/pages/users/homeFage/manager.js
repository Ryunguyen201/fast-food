import caterogy1 from 'D:/Phu/fast-food/src/assets/users/img/caterogys/caterogy-1.jpg';
import caterogy2 from 'D:/Phu/fast-food/src/assets/users/img/caterogys/caterogy-2.jpg';
import caterogy3 from 'D:/Phu/fast-food/src/assets/users/img/caterogys/caterogy-3.jpg';
import caterogy4 from 'D:/Phu/fast-food/src/assets/users/img/caterogys/caterogy-4.jpg';
import caterogy5 from 'D:/Phu/fast-food/src/assets/users/img/caterogys/caterogy-5.jpg';
import featured1 from 'D:/Phu/fast-food/src/assets/users/img/featured/featured-1.jpg';
import featured2 from 'D:/Phu/fast-food/src/assets/users/img/featured/featured-2.jpg';
import featured3 from 'D:/Phu/fast-food/src/assets/users/img/featured/featured-3.jpg';
import featured4 from 'D:/Phu/fast-food/src/assets/users/img/featured/featured-4.jpg';
import featured5 from 'D:/Phu/fast-food/src/assets/users/img/featured/featured-5.jpg';
import featured6 from 'D:/Phu/fast-food/src/assets/users/img/featured/featured-6.jpg';
import featured7 from 'D:/Phu/fast-food/src/assets/users/img/featured/featured-7.jpg';
import featured8 from 'D:/Phu/fast-food/src/assets/users/img/featured/featured-8.jpg';

export const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const sliderItems = [
    {
        img: caterogy1,
        name: 'Cam tươi',
    },
    {
        img: caterogy2,
        name: 'Hoa quả khô',
    },
    {
        img: caterogy3,
        name: 'Rau củ tươi',
    },
    {
        img: caterogy4,
        name: 'Sữa hộp',
    },
    {
        img: caterogy5,
        name: 'Thịt bò',
    },
]

export const featProduct = {
    all: {
        title: 'Toàn bộ',
        products: [
            {
                img: featured1,
                name: 'Thịt bò nạt',
                price: '20000',
            },
            {
                img: featured2,
                name: 'Chuối',
                price: '17000',
            },
            {
                img: featured3,
                name: 'Ổi',
                price: '25000',
            },
            {
                img: featured4,
                name: 'Dưa Hấu',
                price: '44200',
            },
            {
                img: featured5,
                name: 'Nho tím',
                price: '120000',
            },
            {
                img: featured6,
                name: 'Hamburger',
                price: '56000',
            },
            {
                img: featured7,
                name: 'Xoài',
                price: '47000',
            },
            {
                img: featured8,
                name: 'Táo',
                price: '53000',
            },
        ],
    },
    freshMeal: {
        title: 'Thịt tươi',
        products: [
            {
                img: featured1,
                name: 'Thịt bò nạt',
                price: '4000',
            },
        ]
    },
    fruits: {
        title: 'Trái cây',
        products: [
            {
                img: featured2,
                name: 'Chuối',
                price: '17000',
            },
            {
                img: featured3,
                name: 'Ổi',
                price: '25000',
            },
            {
                img: featured4,
                name: 'Dưa Hấu',
                price: '44200',
            },
            {
                img: featured5,
                name: 'Nho tím',
                price: '120000',
            },
            {
                img: featured7,
                name: 'Xoài',
                price: '47000',
            },
            {
                img: featured8,
                name: 'Táo',
                price: '53000',
            },
        ]
    },
    fastFood: {
        title: 'Thức ăn nhanh',
        products: [
            {
                img: featured6,
                name: 'Hamburger',
                price: '56000',
            },
        ]
    }
}