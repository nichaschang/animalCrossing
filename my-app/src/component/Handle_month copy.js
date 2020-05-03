import React ,{useState,useEffect} from 'react'
import {getMonth} from '../util/Handle_ShowMonthTime'
import {handle_Showtime} from '../util/Handle_Showtime'
import Handle_month_List from './Handle_month_List'
import '../css/Handle_month.css'

function Handle_month(props) {

const [checkMonthState,setCheckMonthState]=useState(false)
// console.log(props)

function hadleInfo(obj){
    props.setMonthArr(obj.newData)
    props.setFormVal(obj.newObj)
    props.setError(obj.newErr)
}


const noChoose={
    backgroundColor:'#999',
}

const choose={
    backgroundColor:'#0a8',
}

function test(e){
    console.log('1111111111111111111111111',e.target.parentNode)
    let parentNode=e.target.parentNode
    if(e.target.checked){
        parentNode.style
    }
}


    //月份DOM
    let monthBox=[]
    for(let i=1;i<=12;i++){
        let monthName=getMonth(i)
        monthBox.push(
            <>
             <label className="month-list" style={choose} htmlFor={monthName}><span>{i<10?`0${i}月`:`${i}月`}</span>
                <div >
                    <input type="checkbox" className="month-list-input" value={i} id={monthName} onClick={(e)=>{
                    hadleInfo(handle_Showtime(e,props.monthArr,props.error,props.formVal,'showMonth')) 
                    test(e)
                    }}
                    />
                </div> 
            </label>
            </>
        )
    }

    return (
        <>
            {monthBox}
        </>
    )
}

export default Handle_month
