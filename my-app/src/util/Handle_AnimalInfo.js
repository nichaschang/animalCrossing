
//處理生物資訊的JS檔

//處理時間排序
export const forCompareTime=(data,timeType)=>{
  let newArr=data.split(',')
  // console.log(newArr)
  newArr.sort(function(a, b) {
  return a - b;
});
if(timeType=='time'){
  if(newArr.length==24){
    newArr='(全天)'
  }else{
    newArr=newArr.toString()
  }
}else{
  if(newArr.length==12){
    newArr='(全年)'
  }else{
    newArr=newArr.toString()
  }
}
return newArr
}

//判斷要顯示的生物ID
export const Handle_AnimalShowInfo=(data,showMonth,showTime,showPlaceArr)=>{
    let newData=[]
  //代表沒有選擇任何月份 && 時間的條件
if(showMonth.length===0 && showTime.length===0 && showPlaceArr.length===0){
    newData=data
  
}else{
  //有選擇月份 && 時間的條件
  //將原始所有資料做比對 找出符合的生物ID
  let originData=data
  originData.map((v,i)=>{
    //針對月份確認生物ID
    let monthidx=showMonth.findIndex(e=>e==v.id)
    //針對時間確認生物ID
    let timeidx=showTime.findIndex(e=>e==v.id)
    //針對出現地點確認生物ID
    let placeidx=showPlaceArr.findIndex(e=>e==v.id)
    
    if(showMonth.length===0){
      // 沒有選擇月份的條件
    //   console.log('第1條件')

      //第一個條件 M=0 T=0 P=1
      if(showTime.length===0){
        if(placeidx!==-1){
        //   console.log('第1條件-1')
          newData.push(v)
        }
      }else if(showPlaceArr.length===0){
        //第二個條件 M=0 T=1 P=0
        if(timeidx!==-1){
        //   console.log('第1條件-2')
          newData.push(v)
        }
      }else{
        //第三個條件 M=0 T=1 P=1
        if(timeidx!==-1 && placeidx!==-1){
        //   console.log('第1條件-3')
          newData.push(v)
        }
      }
      
    }else if(showTime.length===0){
      //沒有選擇時間的條件
    //   console.log('第2條件')
      //如果時間沒有條件 0 則針對月份做處理

      //第一個條件 M=0 T=0 P=1
      if(showMonth.length===0){
        if(placeidx!==-1){
        //   console.log('第2條件-1')
          newData.push(v)
        }
      }else if(showPlaceArr.length===0){
        //第二個條件 M=1 T=0 P=0
        if(monthidx!==-1){
        //   console.log('第2條件-2')
          newData.push(v)
        }
      }else{
        //第三個條件 M=1 T=0 P=1
        if(monthidx!==-1 && placeidx!==-1){
        //   console.log('第2條件-3')
          newData.push(v)
        }
      }

    }else if(showPlaceArr.length===0){
      // 沒有選擇地點的條件
    //   console.log('第3條件')
      //針對地點
      //第一個條件 M=1 T=0 P=0
      if(showTime.length===0){
        if(monthidx!==-1){
        //   console.log('第3條件-1')
          newData.push(v)
        }
      }else if(showMonth.length===0){
        //第二個條件 M=0 T=1 P=0
        if(timeidx!==-1){
        //   console.log('第3條件-2')
          newData.push(v)
        }
      }else{
        //第三個條件 M=1 T=1 P=0
        if(monthidx!==-1 && timeidx!==-1){
        //   console.log('第3條件-3')
          newData.push(v)
        }
      }

    }else{
      // 地點 月份 時間皆有選擇的條件
        //第三個條件 M=1 T=1 P=1
        if(monthidx!==-1 && timeidx!==-1 && placeidx!==-1){
        //   console.log('第4條件-1')
          newData.push(v)
        }
    }

  })
    }
    return (
        newData
    )
}


//取得分類名稱
export const Handle_AnimalSortInfo =(data)=>{
    //分類
    let sortBox=[]
    data.map((v,i)=>{
        let idx=sortBox.findIndex(e=>e==v.sort)

        if(idx===-1){
            sortBox.push(v.sort)
        }
    })

    return (
        sortBox
    )
}

//取得地方名稱
export const  Handle_AnimalPlaceInfo =(data)=>{
    //分類
    let placeBox=[]
    data.map((v,i)=>{
        let idx=placeBox.findIndex(e=>e==v.showPlace)

        if(idx===-1){
            placeBox.push(v.showPlace)
        }
    })

    return (
        placeBox
    )
}

//取得地方名稱  尚未完成 - 要將生物ID 跟要顯示的地方ARR 處理完成
export const  Handle_AnimalShowPlaceInfo =(data,placeArr)=>{
    //分類
    let placeBox=[]
    data.map((v,i)=>{
        let idx=placeArr.findIndex(e=>e==v.showPlace)

        if(idx!==-1){
            placeBox.push(v.id)
        }
    })

    return (
        placeBox
    )
}

//取得地方名稱  尚未完成 - 要將生物ID 跟要顯示的地方ARR 處理完成
export const  Handle_AnimalShowPlaceArrInfo =(newValue,placeArr)=>{


    //分類
    let placeBox=[]
    let idx=placeArr.findIndex(e=>e==newValue)

    //判斷是要新增或是刪除場所條件
    if(idx===-1){
        placeBox=[...placeArr,newValue]
    }else{
        let delIdx=placeArr.filter(e=>e!==newValue)
        placeBox=delIdx
    }
    // console.log('placeBox',placeBox)

    return (
        placeBox
    )
}



//處理要顯示的 月份/時間 生物ID
export const Handle_AnimalShowTimeInfo = (data,getTimeArr,timeType)=>{
    //data 等於所有生物資料
    //getMonth 等於要顯示的月份
    let MonthIndexBox=[]
    let handleTimeArr=[]
    getTimeArr.map((val,idx)=>{
        data.map((v,i)=>{
            //判斷處理的是時間還是月份
            if(timeType=="time"){
                handleTimeArr=v.showTime.split(',')

            }else{
                handleTimeArr=v.showMonth.split(',')
            }
            
            //確認丟入的 時間/月份 是否存在arr裡面
                let checkidx=handleTimeArr.findIndex(e=>e==val)
                // //存在的話 丟入生物id值
                if(checkidx!==-1){
                    let checkMonthIndex=MonthIndexBox.findIndex(e=>e==v.id)
                    if(checkMonthIndex==-1){
                        MonthIndexBox.push(v.id)
                    }
                        
                }
            })
    })
            
    return (MonthIndexBox)
}

//處理要顯示的時間陣列
export const Handle_AnimalTimeArr=(idx,data)=>{
    let checkIdx=data.findIndex(e=>e==idx)
    let newData=[]
    if(checkIdx==-1){
    newData=[...data,idx]
    }else{
    let delIdx=data.filter(e=>e!==idx)
    newData=delIdx
    }

    return newData
}

// 用於價格排序將中文改成英文,讓DOM的ID使用英文
export const Handle_AnimalpriceSortNameInfo=(value)=>{
  let newValue
  switch (value) {
    case '預設':
      newValue='default'
      break;
    case '小至大':
      newValue='sTob'
      break;
    case '大至小':
      newValue='bTos'
      break;
    default:
      break;
  }
  return newValue

}