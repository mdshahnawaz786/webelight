
export const basicReducer = (storeData={userRepo:[]}, action)=>{
    if(action.type === "userRepo"){
        return{
            ...storeData,
            userRepo:action.payload
        }
    }
    return storeData
}