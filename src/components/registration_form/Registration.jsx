export default function Registration(){
    return(
        <>
        <div className="registration-container">
            <h2>Registration Form</h2>
        <form>  
            <label className = "name" for="fname" > Name:</label><br />
            <input className="name2" type="text" id="name" name="name" /><br/><br/>
            <label className="email1" for="email" >Email:</label><br/>
            <input className="email2" type="email" id="email" name="email" /><br/><br/> 
            <label className="password1" for="password" >Password:</label><br/>
            <input className="password2" type="password" id="password" name="password" /><br/><br/>
            <input className="submit" type="submit" value="Submit" />
        </form>
        </div>
        </>

    )

}