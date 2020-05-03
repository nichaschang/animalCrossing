import React ,{useEffect,useState}from 'react'
import {Handle_AnimalSortInfo} from '../util/Handle_AnimalInfo'

function Illustrate_sort(props){

const [sortNameBox,setSortNameBox]=useState([])

const [checkSortState,setCheckSortState]=useState(false)

//沒選擇的狀態
const noChoose={
    backgroundColor:'#999',
}

//選擇的狀態
const choose={
    backgroundColor:'#0a8',
    border:'3px solid #0c8',
    opacity:'0.85'
}

useEffect(()=>{
    setSortNameBox(Handle_AnimalSortInfo(props.animalInfo))
    
},[props.animalInfo])

let sortNameDOM=[]
    // useEffect(()=>{
    //     console.log('sortNameBox',sortNameBox)
    // },[sortNameBox])

    if(sortNameBox.length>0){
        sortNameBox.map((v,i)=>{
            sortNameDOM.push(
            <label className="sort-list" style={checkSortState?choose:noChoose} htmlFor={v}><span>{v}</span>
            <input type="checkbox" className="sort-list-input" value={v} id={v}
            />
    </label>
            )
        })
    }

    

    return (
        <>
        
        {sortNameDOM}
        </>
    )
}
export default Illustrate_sort
