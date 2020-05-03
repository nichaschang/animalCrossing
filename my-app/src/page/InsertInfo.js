import React,{useState,useEffect} from 'react'
import '../css/main.css'
import '../css/InsertInfo.css'
import {getMonth} from '../util/Handle_ShowMonthTime'
import Handle_hour_list from '../component/Handle_hour_list'
import { Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {newAnimalInfo} from '../action/index'
import {handle_Showtime} from '../util/Handle_Showtime'
import {Handle_Validation} from '../util/Handle_Validation'
import Handle_month from '../component/Handle_month'
import Handle_hour from '../component/Handle_hour'
import SortDOM from '../component/SortDOM'

function InsertInfo(props){

    const [monthArr,setMonthArr]=useState([])
    const [timeArr,setTimeArr]=useState([])
    const [formVal,setFormVal]=useState({sort:"魚類"})
    const [error,setError]=useState(['image','name','generalPrice','showPlace','showMonth','showTime'])
    const [alldayForTime,setAlldayForTime]=useState(false)



    const alldayForTimeStyle={
        fontWeight:alldayForTime?"bold":"normal",
        backgroundColor:alldayForTime?'#0a8':'#999',
        border:alldayForTime?'3px solid #0c8':'3px solid #999',

    }


    //模擬Formik
    function send(){
        let checkkey=Object.keys(formVal)
        let checkVal=Object.values(formVal)
                
        if(checkkey.length<7 || error.length!==0){
            console.log('不足夠',checkVal)
            console.log('checkkey',checkkey)
            alert('資料不完整')
            return false
        }else{
            props.newAnimalInfo(formVal)
            window.location.reload();
        }
    }

    //驗證格式
    function settingFormInfo(obj){
        console.log(obj)
        setError(obj.newError)
        setFormVal(obj.newData)
    }
    
    //處理勾選時間相關
    function hadleInfo(obj){
        setTimeArr(obj.newData)
        setFormVal(obj.newObj)
        setError(obj.newErr)
    }

    
    // useEffect(()=>{
    //     console.log('formVal',formVal)
    // },[formVal])

    // useEffect(()=>{
    //     console.log('error',error)
    // },[error])



    //render ---------------------------------------
    return (
        <>
        <div className="insertInfo-content-box">
        <table className="insertInfo-box">
            <tr>
                <th>
                    <span>生物種類</span>
                </th>
                <td className="flex-row">
                    <select className="insert-select" name="sort" onBlur={(e,err,forVal)=>settingFormInfo(Handle_Validation(e,error,formVal))}>
                        <option value="魚類">魚類</option>
                        <option value="蟲類">蟲類</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th>
                    <span>生物名稱</span>
                </th>
                <td className="flex-row">
                    <input type="text" className="input-box-style" name="name" onBlur={(e,err,forVal)=>settingFormInfo(Handle_Validation(e,error,formVal))}/>
                </td>
            </tr>
            <tr>
                <th>
                    <span>出現場所</span>
                </th>
                <td className="flex-row">
                    <input type="text" className="input-box-style" name="showPlace" onBlur={(e,err,forVal)=>settingFormInfo(Handle_Validation(e,error,formVal))}/>
                </td>
            </tr>
            <tr>
                <th>
                    <span>出現月份</span>
                </th>
                <td className="flex-row">
                    {/* {monthBox} */}
                    <Handle_month 
                    setFormVal={(val)=>setFormVal(val)}
                    formVal={formVal}
                    setError={(val)=>setError(val)}
                    error={error} 
                    setMonthArr={(val)=>setMonthArr(val)}
                    monthArr={monthArr}
                    />
                    <input type="hidden" value={monthArr} name="showMonth" />
                </td>
            </tr>
            <tr>
                <th>
                    <p>出現時間/時</p>
                    <label htmlFor="All-day" className="All-day-list" style={alldayForTimeStyle}>
                        <span>全天</span> 
                    <input type="checkbox" className="All-day-input" checked={alldayForTime} id="All-day" 
                        onChange={(e)=>{
                            setAlldayForTime(!alldayForTime)
                            hadleInfo(handle_Showtime(e,timeArr,error,formVal,'showTime'))
                        }}
                    />
                    </label>
                </th>
                <td className="flex-row">
                    {/* {hoursBox} */}
                    <Handle_hour 
                    setFormVal={(val)=>setFormVal(val)}
                    formVal={formVal}
                    setError={(val)=>setError(val)}
                    error={error} 
                    setTimeArr={(val)=>setTimeArr(val)}
                    timeArr={timeArr}
                    setAlldayForTime={(e)=>setAlldayForTime(e)}
                    alldayForTime={alldayForTime}
                    />
                    <input type="hidden" value={timeArr} name="showTime" />
                </td>
            </tr>
            <tr>
                <th>
                    <span>售價</span>
                </th>
                <td className="flex-row">
                    <input type="text" className="input-box-style"  name="generalPrice" onBlur={(e,err,forVal)=>settingFormInfo(Handle_Validation(e,error,formVal))}/>
                </td>
            </tr>
            <tr>
                <th>
                    <span>展示大小</span>
                </th>
                <td className="flex-row">
                    <input className="input-box-style" type="text"/>
                </td>
            </tr>
            <tr>
                <th>
                <span>影子大小</span>
                </th>
                <td>
                    <SortDOM />
                </td>
            </tr>
            <tr>
                <th>
                    <span>上傳圖片</span>
                </th>
                <td className="flex-row">
                    <input type="file" name="image" onChange={(e,err,forVal)=>settingFormInfo(Handle_Validation(e,error,formVal))}/>
                </td>
            </tr>
        </table>
        <button type="button" className="create-btn" onClick={()=>send()}>新增</button>
            
        </div>
        
        </>
    )
}


  //action
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        newAnimalInfo,
      },
      dispatch
    )
  }
export default connect(null, mapDispatchToProps)(InsertInfo)
// export default InsertInfo