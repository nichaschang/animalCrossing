import React ,{useEffect, useState} from 'react';
import '../css/Illustrate.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getAnimalMap} from '../action/index'
import Illustrate_Sort_header from '../component/Illustrate_Sort_header'
import {Handle_AnimalShowInfo,forCompareTime} from '../util/Handle_AnimalInfo'

function Illustrate(props) {
const [getanimalInfo,setGetanimalInfo]=useState([])
const [showMonth,setShowMonth]=useState([])
const [showTime,setShowTime]=useState([])
const [showPlaceArr,setShowPlaceArr]=useState([])
const [priceSort,setPriceSort]=useState([])

//取得資料庫資料
useEffect(() => {
  props.getAnimalMap()
}, [])


//資料庫的資料有獲取或更改則重新給 hook(getanimalInfo)值
useEffect(() => {
  setGetanimalInfo(props.animalInfo)
}, [props.animalInfo])

// useEffect(()=>{
// console.log('showPlaceArr',showPlaceArr)
// },[showPlaceArr])

// 處理 時間/月份要顯示的生物資訊
function handleShowIllutrate(){
  //所需資料
  // 月份 / 時間 /地點 的 Arr
  // 所有生物
  setGetanimalInfo(Handle_AnimalShowInfo(props.animalInfo,showMonth,showTime,showPlaceArr))

}

useEffect(()=>{
console.log('getanimalInfo',getanimalInfo)
},[getanimalInfo])

// showMonth / showTime有改變則代表要顯示的內容須更改
useEffect(() => {
  handleShowIllutrate()
}, [showMonth,showTime,showPlaceArr])


let animalInfoDOM=[]
//顯示的生物資訊
getanimalInfo.map((v,i)=>{
    let rootName
    if(v.sort=="魚類"){
      rootName="fish"
    }else{
      rootName="insect"
    }
    let animalInfobox=[]
    animalInfoDOM.push(
      <>
      <tbody className="Illustrate-tbody">
        <tr className="Illustrate-tbody-content">
          <td>
            <img src={`/image/${rootName}/${v.image}`}/>
          </td>
          <td>
            {v.name}
          </td>
          <td>
            {v.generalPrice}
          </td>
          <td>
            {v.showPlace}
          </td>
          <td className="wordWrap">
            {forCompareTime(v.showMonth,'month')}
          </td>
          <td className="wordWrap">
            {forCompareTime(v.showTime,'time')}
          </td>
          <td>
            {/* {v.boxSize} */}
            {v.id}
          </td>
          <td>
            {v.shadow}
          </td>
          <td>
            編輯
          </td>
        </tr>
      </tbody>
        

      </>
    )
  })  


  return (
    <>
    <Illustrate_Sort_header 
    animalInfo={props.animalInfo} 
    getanimalInfo={getanimalInfo}
    chooseShowMonth={(data)=>{
    setShowMonth(data)}
    }
    chooseShowTime={(data)=>{
    setShowTime(data)}
    }
    chooseShowPlace={(data)=>{
      setShowPlaceArr(data)}
    }
    chooseShowPriceSort={(data)=>{
      setPriceSort(data)
    }}
    
    />
      <table className="Illustrate-box">
          <thead>
            <tr className="thead">
                  <th>圖片</th>
                  <th>名稱</th>
                  <th>價格</th>
                  <th>出沒地點</th>
                  <th>出沒月份</th>
                  <th>出沒時間</th>
                  <th>放置尺寸</th>
                  <th>魚影尺寸</th>
                  <th>編輯</th>
              </tr>
          </thead>
            {animalInfoDOM}
        </table>
    </>
        
  );
}

// 告訴redux該怎麼對應它的store中的state到這個元件的props的哪裡
const mapStateToProps = store => {
    return {
      animalInfo:store.animalInfo
    }
  }
  
  //action
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        getAnimalMap
      },
      dispatch
    )
  }
export default connect(mapStateToProps, mapDispatchToProps)(Illustrate)

// export default Illustrate;
