import React ,{useState,useEffect} from 'react'
import Handle_place_list from './Handle_place_list'
import {Handle_AnimalPlaceInfo,Handle_AnimalShowPlaceInfo,Handle_AnimalShowPlaceArrInfo} from '../util/Handle_AnimalInfo'

function Handle_place(props) {

// console.log('Handle_place',props)


const [getplace,setGetplace]=useState([]) //存取生物ID
const [placeArr,setPlaceArr]=useState([]) //存取要顯示的場所名稱
const [placeName,setPlaceName]=useState([]) //取得所有場所名稱

// props.animalInfo.map((v,i)=>{
//     let placeIdx=placeName.findIndex(e=>e==v.showPlace)
//     let newData=[]
//     if(placeIdx==-1){
//         newData.push(v.id)
//     }
//     setPlaceName(newData)
// })


useEffect(()=>{
    setPlaceName(Handle_AnimalPlaceInfo(props.animalInfo))
},[props.animalInfo])

// useEffect(()=>{
//     console.log('placeName',placeName)
// },[placeName])



//取得地方名稱  尚未完成 - 要將生物ID 跟要顯示的地方ARR 處理完成
useEffect(()=>{
    props.setShowPlace(Handle_AnimalShowPlaceInfo(props.animalInfo,placeArr))
    // console.log('placeArr',placeArr)
    // console.log(props)
},[placeArr])

function handle_ShowplaceName(e){
    setPlaceArr(Handle_AnimalShowPlaceArrInfo(e.target.value,placeArr))
}


    //月份DOM
    let placeBox=[]
    placeName.map((v,i)=>{
        placeBox.push(
            <>
               <Handle_place_list 
                   data={v}
                   handle_ShowplaceName={(e)=>handle_ShowplaceName(e)}
               />
            </>
        )
    })
            
        

    return (
        <>
            {placeBox}
        </>
    )
}

export default Handle_place
