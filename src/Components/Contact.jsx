
const Contact = () => {
  return (
    <div id='contact'>
        <h1>CONTACT US</h1>
        <form>
            <input type="text" placeholder='Full Name' required/>
            <input type="text" placeholder='Type Your Email'required/>
            <textarea placeholder='Write here.....' name='message'></textarea>text
            <input type="submit" value='send'/>
        </form>

    </div>
  )
}

export default Contact
