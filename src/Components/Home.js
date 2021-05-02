import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setStartEmployees } from "../Actions/EmployeeAction";
import { startSetCustomers } from "../Actions/CustomerAction";
import { startSetDepartment } from "../Actions/DepartmentAction";
import { set_Start_Tickets } from "../Actions/TicketAction";
import Carousel  from '../Components/Carousel'
import Helpdesk from './Helpdesk.jpeg'
import ticketMaster from './ticketMaster.jpeg'
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faFileContract } from '@fortawesome/free-solid-svg-icons'
function Home() {
	let dispatch = useDispatch();
	useEffect(() => {
		dispatch(startSetCustomers());
		dispatch(setStartEmployees());
		dispatch(startSetDepartment());
		dispatch(set_Start_Tickets());
	}, []);
	return (
		<div className="homePage">
			<div className="section2">
				<h1
					style={{
						color: "#3467FE",
						fontFamily: "sans-serif",
						fontWeight: "initial",
						fontSize: "revert"
					}}
				>
					TicketMaster
				</h1>
			</div>
      <Carousel/>
      <div className="aboutUs">
        <h1>About Us</h1>
        <h2>Who We Are</h2>
        <h3>Put all your customer support interactions in one place, so communication is seamless, personal, and efficient–which means more productive employees and satisfied customers.</h3>
      </div>
      <div className="section3">
       <img src={Helpdesk}/>
       <div >
       <p>Support Services</p>
       <p> <FontAwesomeIcon icon={faStar} /> Get going in minutes</p>
       <p><FontAwesomeIcon icon={faStar} />Easier than your inbox</p>
       <p><FontAwesomeIcon icon={faStar} />Report metrics that count</p>
       </div>
      </div>
      <div className="section4">
      <div className="contents" >
       <p className="supportResource">Support Resources</p>
       <p className="content1"><FontAwesomeIcon icon={faFileContract} />Don’t lose track of a conversation with your customer. Experience less back and forth and more resolved tickets.</p>
       <p className="content2"><FontAwesomeIcon icon={faFileContract} />Gain visibility into the metrics that matter to your business. Improve performance by catching bottlenecks before they happen.</p>
       <p className="content3"> <FontAwesomeIcon icon={faFileContract} /> It’s easy to get started. No setup time or installation required with our cloud-based offering. Get to done faster with time-saving tools like ticket views, approval workflows, and automation -- all out-of-the-box.</p>

      </div>
       <img src={ticketMaster}/>
      </div>
      <div className="contactUs">
      <h1>Contact Us</h1>
        <h2>500 Terry Francois Street San Francisco, CA 94158</h2>
        <h3>tripathy.alipriya94@gmail.com</h3>
        <h3>123-456-7890</h3>
      </div>
       
		</div>

  
	);
}
export default Home;
