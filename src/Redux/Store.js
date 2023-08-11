import { legacy_createStore } from "redux"
import { basicReducer } from "./Reducer"

const mystore = legacy_createStore(basicReducer)

export default mystore