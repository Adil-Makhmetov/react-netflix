import './newuser.scss';

export default () => {
  return (
    <div className="new-user">
      <h1 className="new-user__title">New User</h1>
      <form className='new-user__form'>
        <div className="new-user__item">
          <label>Username</label>
          <input type="text" placeholder='john'/>
        </div>
        <div className="new-user__item">
          <label>Full Name</label>
          <input type="text" placeholder='John Smith'/>
        </div>
        <div className="new-user__item">
          <label>Email</label>
          <input type="text" placeholder='john@gmail.com'/>
        </div>
        <div className="new-user__item">
          <label>Password</label>
          <input type="password" placeholder='password'/>
        </div>
        <div className="new-user__item">
          <label>Phone</label>
          <input type="text" placeholder='+1 234 56 67'/>
        </div>
        <div className="new-user__item">
          <label>Address</label>
          <input type="text" placeholder='USA | Los-Angeles'/>
        </div>
        <div className="new-user__item">
          <label>Gender</label>
          <div className="new-user__gender">
            <input type="radio" name="gender" id="male" value="male"/>
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female"/>
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="new-user__item">
          <label>Active</label>
          <select className="new-user__select" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="new-user__action">Create</button>
      </form>
    </div>
  )
}