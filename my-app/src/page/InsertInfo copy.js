import React,{useState,useEffect} from 'react'
import '../css/main.css'
import '../css/InsertInfo.css'
import {getMonth} from '../util/ForTime'
import Handle_hour_list from '../component/Handle_hour_list'
import { Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {newAnimalInfo} from '../action/index'
function InsertInfo(props){

    const [monthArr,setMonthArr]=useState([])
    const [timeArr,setTimeArr]=useState([])
    const [formVal,setFormVal]=useState({sort:"魚類"})
    const [error,setError]=useState(['image','name','generalPrice','showPlace','showMonth','showTime'])
    const [alldayForTime,setAlldayForTime]=useState(false)

    //處理月份
    function handle_month(e){
        let checkedState=e.target.checked
        let newValue=e.target.value
        let newData

        //確認勾選狀態
        if(checkedState){
           newData=[...monthArr,newValue]
        }else{
            newData=monthArr.filter(e=>e!==newValue)
        }
        newData=newData.sort(function compareNumbers(a, b) {
            return a - b;
          })
        setMonthArr(newData)
        setFormVal({...formVal,showMonth:newData})

        //確認是否清除錯誤訊息
        let getKey

        if(newData.length!==0){
            getKey=error.filter(e=>e!=='showMonth')
        }else{
            getKey=[...error,'showMonth']
        }
        setError(getKey)
    }


    //處理時間
    function handle_time(e){
        let checkedState=e.target.checked
        let newValue=e.target.value
        // let getName=e.target.name
        console.log('checkedState',checkedState)
        let newData

        if(e.target.id=='All-day'){
            newData=[]
            for (let i=1;i<=24;i++){
                newData.push(i.toString())
            }
        }else{
            //確認勾選狀態
            if(checkedState){
                newData=[...timeArr,newValue]  
            }else{
                setAlldayForTime(false)
                newData=timeArr.filter(e=>e!==newValue)
            }

        }

        newData=newData.sort(function compareNumbers(a, b) {
            return a - b;
          })
        setTimeArr(newData)
        setFormVal({...formVal,showTime:newData})

        //確認是否清除錯誤訊息
        let getKey

        if(newData.length!==0){
            getKey=error.filter(e=>e!=='showTime')
        }else{
            getKey=[...error,'showTime']
        }
        setError(getKey)
    }



    //月份DOM
    let monthBox=[]
    for(let i=1;i<=12;i++){
        let monthName=getMonth(i)
        monthBox.push(
            <>
            <div>
                <input type="checkbox" value={i} id={monthName} onClick={(e)=>handle_month(e)}/>
                <label htmlFor={monthName}><span>{i<10?`0${i}月`:`${i}月`}</span></label>
            </div>
            </>
        )
    }

    //時間DOM
    let hoursBox=[]
        for(let i=1;i<=24;i++){
            hoursBox.push(
                <>
                   <Handle_hour_list data={i} onClick={(e)=>handle_time(e)} alldayForTime={alldayForTime}/>
                </>
            )
        }

        useEffect(()=>{
           console.log('timeArr',timeArr) 
        },[timeArr])


    //設定送出得內容
  function getForm(e){
        const getName=e.target.name
        let getVal=e.target.value
        //如果內容為空 則加入錯誤訊息
        if(getVal==""){
            let findIdx=error.findIndex(e=>e==getName)
            if(findIdx==-1){
                setError([...error,getName])
            }
            
        }else{
            let newData=error.filter(e=>e!==getName)
            setError(newData)
            
            //針對img處理
            if(getName=="image"){
                getVal= e.target.files[0].name
            }
        }

        switch (getName){
            case 'sort':
                setFormVal({...formVal,sort:getVal})            
                break
            case 'image':
                setFormVal({...formVal,image:getVal})            
                break
            case 'name':
                setFormVal({...formVal,name:getVal})            
                break
            case 'generalPrice':
                setFormVal({...formVal,generalPrice:getVal})            
                break
            case 'showPlace':
                setFormVal({...formVal,showPlace:getVal})            
                break
            default:
                break
        }
        
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




    //render ---------------------------------------
    return (
        <>
        <div className="insertInfo-content-box">
        <table className="insertInfo-box">
            <tr>
                <th>
                    <span>生物種類</span>
                </th>
                <td>
                    <select name="sort" onBlur={(e)=>getForm(e)}>
                        <option value="魚類">魚類</option>
                        <option value="蟲類">蟲類</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th>
                    <span>生物名稱</span>
                </th>
                <td>
                    <input type="text" name="name" onBlur={(e)=>getForm(e)}/>
                </td>
            </tr>
            <tr>
                <th>
                    <span>出現場所</span>
                </th>
                <td>
                    <input type="text" name="showPlace" onBlur={(e)=>getForm(e)}/>
                </td>
            </tr>
            <tr>
                <th>
                    <span>出現月份</span>
                </th>
                <td className="flex-row">
                    {monthBox}
                    <input type="hidden" value={monthArr} name="showMonth" />
                </td>
            </tr>
            <tr>
                <th>
                    <p>出現時間/時</p>
                    <label htmlFor="All-day">
                        <span>全天</span> 
                    </label>
                    <input type="checkbox" checked={alldayForTime} id="All-day" onChange={(e)=>{
                        setAlldayForTime(!alldayForTime)
                        handle_time(e)
                    }}/>
                </th>
                <td className="flex-row">
                    {hoursBox}
                    <input type="hidden" value={timeArr} name="showTime" />
                </td>
            </tr>
            <tr>
                <th>
                    <span>售價</span>
                </th>
                <td>
                    <input type="text" name="generalPrice" onBlur={(e)=>getForm(e)}/>
                </td>
            </tr>
            <tr>
                <th>
                    <span>展示大小</span>
                </th>
                <td>
                    <input type="text"/>
                </td>
            </tr>
            <tr>
                <th>
                    <span>上傳圖片</span>
                </th>
                <td>
                    <input type="file" name="image" onChange={(e)=>getForm(e)}/>
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