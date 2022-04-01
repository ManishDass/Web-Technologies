import React,{useState} from 'react'

export default function Student(props) {

  const [status, setStatus] = useState("\u274C")
  const [lastName, setLastName] = useState("")
  const [hiddenStatus, setHideenStatus] = useState(true)

  function verification()
  {
      setStatus("\u2714");
  }

  function print(param) //it could be anything param or lol
  {
    setLastName(param.target.value);
  }

  function showHide() //it could be anything param or lol
  {
    if(hiddenStatus === true)
    {
      setHideenStatus(false);
    }
    else
    {
    setHideenStatus(true);
    }
  }

  function submitData(e)
  {
    console.log(tAndc, bio, gender)
    e.preventDefault();
  }

  const [tAndc, settAndc] = useState(false);
  const [bio, setbio] = useState(null);
  const [gender, setgender] = useState(null);

  function clearData(e)
  {
    settAndc = '';
    setbio = '';
    setgender = '';

  }

  return (
    <main>
    <div class='mx-16 my-6'>
        <input className='myData' type='text' placeholder='Enter Your Last Name' onChange={print}></input>
        <p>Student Name: {props.name} {lastName}  -  {status}</p>
        { hiddenStatus? <p>Password: Kumarghat </p> : null }
        <button className='showHideButton' onClick={showHide} >Show/Hide</button> <br/>
        <button className='verificationButton' onClick={verification}>Submit</button>
    </div>

    <hr/>
     
    <div className='mx-16 my-16'>
      <h2>Enter Your Details</h2>
        <form>
          <input className='myData' type='text' onChange={(e)=>setbio(e.target.value)} ></input>
          <br/> <br/>
          <select onChange={(e)=>setgender(e.target.value)}>
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select> <br/> <br/>
          <input type='checkbox' onChange={(e)=>settAndc(e.target.checked)} /> Accept Terms Conditions <br/>
          <button type='submit' className='verificationButton' onClick={submitData}>Submit</button>
          <button type='submit' className='verificationButton mx-5' onClick={clearData}>Clear</button>

        </form>
    </div>
    </main>

  )
}
