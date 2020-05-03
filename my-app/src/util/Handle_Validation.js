export const Handle_Validation = (e,error,formVal)=>{
    console.log(e)
    console.log(error)
    console.log(formVal)
    const getName=e.target.name
    let getVal=e.target.value
    let newError
    let newData
    //如果內容為空 則加入錯誤訊息
    if(getVal==""){
        let findIdx=error.findIndex(e=>e==getName)
        if(findIdx==-1){
            newError=[...error,getName]
        }else{
            newError=error
        }
        
    }else{
        newError=error.filter(e=>e!==getName)
        
        //針對img處理
        if(getName=="image"){
            getVal= e.target.files[0].name
        }
    }

    newData={...formVal,[getName]:getVal}
    // console.log('error',error)
    // console.log('formVal',formVal)
    return {
        newError,
        newData
    }
    
}