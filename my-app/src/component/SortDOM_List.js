import React ,{useState,useEffect} from 'react'
import '../css/SortDOM.css'
function SortDOM_List(props) {

const [sortState,setSortState]=useState(false)
const [sortName,setSortName]=useState("")
let Sort_List=[]

function getSortEnName(val){
    switch (val){
        case '特小':
            val='tiny'
            break
        case '稍小':
            val='small'
            break
        case '中':
            val='medium'
            break
        case '稍大':
            val='big'
            break
        case '大':
            val='bigger'
            break
        case '特大':
            val='biggest'
            break
        case '細長':
            val='thin'
            break
        case '背鰭':
            val='fin'
            break
        default:
            break
    }
    return val
}


function checkStateSort(val){
    if(sortName==val){
        console.log(123)
        setSortState(true)
    }else{
        console.log(456)
        setSortState(false)
    }
}
useEffect(()=>{
    setSortName(getSortEnName(props.data))
},[])

const noChoose={
    backgroundColor:'#999',
}

const choose={
    backgroundColor:'#0a8',
}
useEffect(()=>{
    // console.log('props.sortChoose',props.sortChoose,sortName)
    if(props.sortChoose==sortName){
        setSortState(true)
    }else{
        setSortState(false)
    }
},[props.sortChoose])

    return (
        <>
        
        <label htmlFor={getSortEnName(props.data)} className="sort-text">
        <div className="sort-list-box" style={sortState?choose:noChoose}>{props.data}
                <input type="radio" name="theShadow" id={getSortEnName(props.data)} className="sort-input-box" onClick={(e)=>{
                    checkStateSort(props.getChoose(e))
                }}
                />
        </div>
        
        </label>
            
        </>
    )
}

export default SortDOM_List
