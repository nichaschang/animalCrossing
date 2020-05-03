
//呼叫資料
export const getAnimalMap = value => {
    return async dispatch => {
      const request = new Request(
        `http://localhost:5500/home`,
        {
          method: 'GET',
          credentials: 'include',
        }
      )
      const res = await fetch(request)
      const data = await res.json()
      // await console.log('data',data)
      dispatch(getAnimalInfo(data))
    }
  }

  export const getAnimalInfo=val=>({type:"GET_ANIMAL",value:val})

//新增資料

export const newAnimalInfo=val=>{

    return async dispatch =>{
      const request=new Request(
        `http://localhost:5500/insertNewInfo`,
        {
          method:'POST',
          credentials:'include',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
          body:JSON.stringify(val)
        }
      )
      const res = await fetch(request)
      const data = await res.json()
      // await console.log(data)
    }
}

