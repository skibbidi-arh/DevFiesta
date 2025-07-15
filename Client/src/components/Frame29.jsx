import React from 'react'
import '../layouts/Frame.css'

const Frame29 = () => {
return (
    <div>

      <div className='hostbody'>
            <div className='hostheading'>
              <h1 className='hh'>Enter Credentials to join your first Hackathon</h1>
            </div>
      </div>
        <div className='formpart'>
            <form className='formbody'>
                <div>
                <h2 className='flex align-top text-[50px]'>Register</h2>
                </div>
                  <div className='flex flex-row gap-20'>
                       <div className='leftform'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor='first'>First Name</label>
                                <input type='text' id='first' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor='last'>Last Name</label>
                                <input type='text' id='last' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor='email'>Email</label>
                                <input type='text' id='email' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor='mobile'>Mobile </label>
                                <input type='text' id='mobile' />
                            </div>
                      </div>
                      <div className='rightform'>
                          <div className='flex flex-col gap-2'>
                                  <label htmlFor='textarea'>Why do you want to join?</label>
                                  <input type='text' id='textarea' />
                            </div>
                      </div>
                  </div>
                   
                  <div className='buttondivs'>
                      <input className='bg-blue-500 w-40 p-2 gap-2 rounded-md align-middle text-center' value={'Save'} id='save'></input>
                      <button className='bg-zinc-400 w-40 p-2 gap-2 rounded-md align-middle text-center' id='cancel'>cancel</button>
                  </div>
            </form>
        </div>
    </div>
  );
};

export default Frame29