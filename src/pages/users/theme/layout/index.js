import { memo } from 'react'
import Header from '../header'
import Footer from '../footer'

const Layout = ({ children, ...props }) => {
    //Children là thứ duy nhất thay đổi
    return (
        <div {...props}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default memo(Layout)