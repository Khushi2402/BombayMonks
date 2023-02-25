import { Header } from 'antd/es/layout/layout';
import React, { useState } from 'react'
import {BsInstagram, BsWhatsapp, BsTwitter} from 'react-icons/bs'

const Contact = () => {

  const [userData, setUserData] = useState({
    email: ""
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value});
  };

  //connect with firebase
  const submitData = async(event) => {
    event.preventDefault();
    const { email } = userData;
    const res = fetch('https://bombay-monks-8bccc-default-rtdb.firebaseio.com/userDataRecords.json', 
    {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body:JSON.stringify({
        email
      }),
    });

    if(res) {
      setUserData({
        email: ""
      })
    }
  }

  return (
    <div name='contact'>
      <h1 className='text-2xl pt-10'>Contact Us</h1>
      <div className='grid md:grid-cols-3 divide-x divide-black pt-10'>
        <div>
            <h1 className='text-xl font-normal pb-2'>PHONE</h1>
            <p className='font-bold pb-6'>+91 9777908891 </p>
        </div>
        <div>
            <h1 className='text-xl font-normal pb-2'>E-MAIL</h1>
            <p className='font-bold pb-6'>bombaymonks@gmail.com</p>
        </div>
        <div>
            <h1 className='text-xl font-normal pb-2'>SOCIALS</h1>
            <div className=' flex justify-center'>
              <a href='https://instagram.com/bombaymonksentertainment?igshid=YmMyMTA2M2Y='>
                <BsInstagram className='px-2 w-10 h-10 cursor-pointer'/>
              </a>
              <a href='https://wa.me/9777908891?text='>
                <BsWhatsapp className='px-2 w-10 h-10 cursor-pointer'/>
              </a>
            </div>
        </div>
        
      </div>
      <div className='flex  justify-center pt-10 pb-10'>
      <div className='bg-slate-100 rounded-lg border border-slate-800 p-10 w-3/4'>
            <div className='flex flex-col items-center space-y-4'>
                <h1 className='text-xl font-semibold'>Subscribe to our Newsletter</h1>
                <p className=''>Subscribe to our Newsletter to get updates on all the exclusive events</p>
                <form method='POST'>
                  <div className='pb-2'>
                    <input text='text' 
                    name="email"
                    placeholder='Your email address' 
                    value={userData.email}
                    onChange={postUserData}
                    className=' border-2 rounded-xl w-48 px-2'></input>
                  </div>
                  <button className='rounded-xl' onClick={submitData}>Subscribe</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

{/*

<p className='text-sm  underline underline-offset-auto hover:font-semibold cursor-pointer'>No thanks</p>
*/}