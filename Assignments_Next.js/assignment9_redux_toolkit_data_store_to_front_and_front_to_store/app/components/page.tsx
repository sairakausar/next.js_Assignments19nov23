'use client'

import Store from "@/store/store"
import { Provider } from "react-redux"
import ServiceSlice from "@/store/slices/serviceSlice"


const PageUseClient = () => {
    return (
      <div>
            <Provider store={Store}>
            <ServiceSlice />
            </Provider>,
      </div>
    );
}
export default PageUseClient