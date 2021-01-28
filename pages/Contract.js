import Link from 'next/link'
const Contract = () => {
    return (
    <>

                <table id="Head">
                    <tr>

                        <Link href="/">Homepage</Link>

                        <Link href="/Gallery"> Gallery</Link>

                        <Link href="/Contract">Contract</Link>

                    </tr>
                </table>
                <table>
                    <tr>
                        <td>
                            <h1>Keettamook Khuntiphong</h1>
                            <h3>Student</h3>
                            <h2>Keettamook_k@cmu.ac.th</h2>
                        </td>
                        <th>
                            <img width="200px" src="imgsrc/5.png" alt="5" />
                        </th>
                    </tr>
                </table>
                <form>

                        <table border="1px" >
                            <tr id="greenY">
                                <td>
                                    <label for="subject" >Subject:</label>
                                </td>
                                <td>
                                    <input type="text" id="subject" name="subject" size="60px" />
                                </td>
                            </tr>
                            <tr id="blue">
                                <td>
                                    <label for="massage" >Massage:</label><br />
                                </td>
                                <td>
                                    <input type="text" id="massage" name="massage" size="60px" />
                                </td>
                            </tr>
                            <tr id="greenY">
                                <td>
                                    <label for="name" >Name:</label><br />
                                </td>
                                <td>
                                    <input type="text" id="name" name="name" size="60px" /><br />
                                </td>
                            </tr>
                            <tr id="blue">
                                <td>
                                    <label for="gender" >Gender:</label><br />

                                </td>
                                <td>
                                    <input type="radio" id="male" name="gender" value="male" />
                                    <label for="male">Male</label><br />
                                    <input type="radio" id="female" name="gender" value="female" />
                                    <label for="female">Female</label><br />
                                </td>
                            </tr>
                            <tr id="greenY">
                                <td>
                                    <label for="phone" >Phone:</label><br />
                                </td>
                                <td>
                                    <input type="text" id="phone" name="phone" size="60px" />
                                </td>
                            </tr>
                            <tr id="blue">
                                <td>
                                    <label for="email" >Email:</label><br />
                                </td>
                                <td>
                                    <input type="text" id="email" name="email" size="60px" />
                                </td>
                            </tr>


                        </table>
                        <input type="submit" value="Submit" />
                </form>
                
               
    </>

  )
}

export default Contract