import React ,{useState,useEffect} from 'react'
import '../css/Handle_month.css'

function Handle_month_List(props) {

//更改是否會確認使用 並藉此改變style樣式
const [checkMonthState,setCheckMonthState]=useState(false)

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


function getMonthState(e){
    setCheckMonthState(e.target.checked)
    props.catchMonthValue(e)
}

    let monthListDOM=
    (
        <>
            <label className="month-list" style={checkMonthState?choose:noChoose} htmlFor={props.monthName}><span>{props.data<10?`0${props.data}月`:`${props.data}月`}</span>
                    <input type="checkbox" className="month-list-input" value={props.data} id={props.monthName}
                        onClick={(e)=>{
                            getMonthState(e)
                        }}
                    />
            </label>
        </>
    )
            
    return (
        <>
            {monthListDOM}
        </>
    )
}

export default Handle_month_List
