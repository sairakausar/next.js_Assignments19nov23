import React, { useContext } from 'react'
import {any_props} from '@/components/A_com'
const D_com = () => {
    const a = useContext(any_props);
  return <div>D_com {a}</div>;
}

export default D_com