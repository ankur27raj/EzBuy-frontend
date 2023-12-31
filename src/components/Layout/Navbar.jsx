import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../static/data'
import styles from '../../styles/styles'

const Navbar = ({active}) => {
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
         {
            navItems && navItems.map((i,index) => (
                <div className="flex">
                    <Link to={i.url}
                    className={`${active === index + 1 ? "text-[#17dd1f] hover:text-[#0aa912] transition-colors" : "text-[#000000] 800px:text-[#ffffff] hover:text-[#e5e5e5] transition-colors"} pb-[30px] 800px:pb-0 font-semibold px-6 cursor-pointer`}

                    >
                    {i.title}
                    </Link>
                </div>
            ))
         }
    </div>
  )
}

export default Navbar
