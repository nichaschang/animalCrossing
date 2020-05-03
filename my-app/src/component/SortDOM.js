import React ,{useState,useEffect} from 'react'
import SortDOM_List from './SortDOM_List'
import '../css/SortDOM.css'

function SortDOM(props) {

const [sortChoose,setSortChoose]=useState(null)


   let sortNameBox=["特小","稍小","中","稍大","大","特大","細長","背鰭",]

    function getChoose(e){
        setSortChoose(e.target.id)
        // console.log('sortChoose',sortChoose)
        return e.target.id
    }

    // useEffect(()=>{
    //     console.log('sortChoose',sortChoose)
    // },[sortChoose])

    

   let sortBoxDOM=[]
   sortNameBox.map((v,i)=>{
    
    sortBoxDOM.push(
        <>
            <SortDOM_List data={v} getChoose={(e)=>getChoose(e)}
                sortChoose={sortChoose}
            />
            
        </>
    )
    
   })
   

    return (
        <>
        <div className="sort-box">
            {sortBoxDOM}
        </div>
        </>
    )
}

export default SortDOM
