import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [items,setItems]=useState([])
  const [Grade,setGrade]=useState([{Grade:''}])
  const [RollNo,setRollNo]=useState("")
  
  useEffect(()=>{
    const fetchData=async()=>{
      const res= await fetch('http://localhost:4000')
      const data= await res.json()
      console.log(data)
      setItems(data.items)
    }
    fetchData();
  },[])

  const UpdateRollNo=(event)=>{
    console.log(RollNo)
    setRollNo(event.target.value)
  }

  const GetResult=()=>{
    setGrade((Grade)=>
      items.map(each=>
        (each.StudentRollNo===RollNo) ?
           (Grade)
        :Grade
      )
    )
    console.log(Grade)
  }

  return (
    <div className='WholeContainer'>
      <div className='InnerContainer'>
        <div className='Head'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/VVIT_Logo.png?20171107074358"/>
          <h1 className='SemesterName'> 1-2 Semester Result</h1>
        </div>
        <div className='hr1'>
        <hr className="hr" />
        </div>
        <div className='SearchForm'>
          <div className='firstPart'>
          <label className='labelText'>
            Student RollNo : 
          </label>
          <input type="text" className='InputRollNo' onChange={UpdateRollNo}/>
          </div>
          <button type="button" className='SubmitBtn' onClick={GetResult}>Submit</button>
        </div>
        
      </div>
    </div>
  )
}

export default App
