'use client'
import React, { useContext } from 'react'
import {any_props} from '@/components/A_com'

const B_com = () => {
const coming_props = useContext(any_props);

    return <div className={coming_props}>B_com {coming_props}</div>;
}
export default B_com