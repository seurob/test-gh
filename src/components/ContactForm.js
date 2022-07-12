import React, { useState } from "react";

const ContactForm = () => {

  const [name, setName] = useState(null)
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const [msgSent, setMsgSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/sendMail', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: name,
        userEmail: email,
        userMsg: msg
      })
    })
      .then(() => {
        setMsgSent(true)
        e.target.reset()
      })
      .catch(err => console.error(err))
    setTimeout(() => {
      setMsgSent(false)
    }, 4000)
  }

  return (
    <>
      <div class="container mt-3">
        <h2>Please, feel free to contact me</h2>
        <div className="position-section">
          <form action="" className="form" onSubmit={handleSubmit}>
            <div class="mb-3">
              <input type="text" placeholder="Name" name="name" className="form-control"
                required onChange={(e) => { setName(e.target.value) }} />
            </div>
            <div class="mb-3">
              <input type="email" placeholder="Email" name="email" className="form-control"
                required onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div class="mb-3">
              <textarea placeholder="Your message" name="msg" className="form-control"
                required onChange={(e) => { setMsg(e.target.value) }} ></textarea>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" type="submit" disabled={!name || !email || !msg}> Send a message </button>
            </div>
          </form>
        </div>

        <div class={`success-blk ${msgSent ? '' : 'd-none'}`}>
          <br /><p class="text-success"><b>The message has been sent: </b></p>
          <ul class="list-group">
            <li class="list-group-item list-group-item-success">Date:</li>
            <li class="list-group-item">{name}</li>
            <li class="list-group-item">{email}</li>
            <li class="list-group-item">{msg}</li>
          </ul>
        </div><br />
      </div>
    </>
  );
}

export default ContactForm;