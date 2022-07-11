import React from 'react'
import './Profile.css'

function Profile() {
  return (
    <div>
      <div class="content">
      <div class="form">
        <div class="form_head">
          <h2>Edit Profile</h2>
        </div>
        <form action="" class="edit">
          <input type="text" name="first_name" id="first" placeholder="First name"  className='input' />

          <input type="text" name="first_name" id="last" placeholder="Last name" className='input' />

          <input type="text" name="first_name" id="email" placeholder="Email" className='input' />

          <input type="text" name="first_name" id="contact" placeholder="Contact" className='input' />

          <input type="submit" value="Save" className="button" />
        </form>
        <div class="form_head">
          <h2>Reset Password</h2>
        </div>
        <form action="" class="pass">
          <input type="password" name="pass" id="pass" placeholder="Password" className='input' />

          <input type="password" name="pass2" id="pass2" placeholder="Confirm password" className='input' />

          <input type="submit" value="Reset" className="button" />
        </form>
      </div>
      <div class="profile_pic">
        <img src="/images/default.png" alt="" srcset="" />
        <h3>Edit</h3>
      </div>
    </div>
  </div>
  )
}

export default Profile