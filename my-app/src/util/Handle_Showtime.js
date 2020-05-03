
export const handle_Showtime=(e,data,err,formVal,str,alcheck)=>{
 
    //所需參數
//目前有選取的時間 陣列 newData
// el 相關的值  checkedState & newValue
//str 判斷是全選還是單選
// error陣列
    let checkedState=e.target.checked
    let newValue=e.target.value
    let newData
    let newObj
    //確認勾選狀態
    if(e.target.id=='All-day'){
        newData=[]
        if(checkedState){
            for (let i=1;i<=24;i++){
                newData.push(i.toString())
            }
        }else{
            newData=[]
        }
        
    }else{
        //確認勾選狀態
        if(checkedState){
            let checkIndex=data.findIndex(e=>e==newValue)
            if(checkIndex==-1){
                console.log('inside Here')
                newData=[...data,newValue]  
            }else{
                if(alcheck){
                    newData=[newValue]  
                }else{
                    newData=data
                }
                
            }
            
        }else{
            newData=data.filter(e=>e!==newValue)
        }
    }

    newData=newData.sort(function compareNumbers(a, b) {
        return a - b;
      })

    //newObj
    newObj={...formVal,[str]:newData}

    //確認是否清除錯誤訊息
    let getKey
    let newErr
    //errArr
    if(newData.length!==0){
        newErr=err.filter(e=>e!==str)
    }else{
        if(str=='showMonth'){
            newErr=[...err,'showMonth']
        }else{
            newErr=[...err,'showTime']
        }
        
    }
    

    
    let allcheck=handle_timeState(newData)

    return {
        newData,newObj,newErr,allcheck
    }
}


export const handle_timeState=(newData)=>{
    let allcheck
    if(newData.length<24){
        allcheck=false
    }else{
        allcheck=true
    }
    return allcheck
}


