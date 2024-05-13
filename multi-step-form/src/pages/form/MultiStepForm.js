import {useState} from "react";
import User from "../../img/user.png";
import Phone from "../../img/phone.png";
import Company from "../../img/company.png";
import Email from "../../img/email.png";
import Development from "../../img/development.png"
import Design from "../../img/design.png"
import Marketing from "../../img/marketing.png"
import Other from "../../img/other.png"
import Radio from "../../img/radio.svg"
import Radioactive from "../../img/radioactive.svg"
import Submit from "../../img/submit.svg"

const MultiStepForm = () => {
	const [step, setStep] = useState(1);

	const nextStep = () => {
		setStep(step + 1);
	};

	const prevStep = () => {
		setStep(step - 1);
	};

	return (
		<div className="multi-step-form">
			<div className="header">
				<h2>Get a project quote</h2>
				<p>Please fill the form below to receive a quote for your project.<br/> Feel free to add as much detail
					as needed.</p>
			</div>
			<div className="form-content">
				<div className="progress-bar">
					<div className={`step ${step >= 1 ? 'active' : ''}`}>1</div>
					<div className={`bar bar-1 ${step === 1 ? 'half' : step > 1 ? 'filled' : ''}`}></div>
					<div className={`step ${step >= 2 ? 'active' : ''}`}>2</div>
					<div className={`bar bar-2 ${step === 2 ? 'half' : step > 2 ? 'filled' : ''}`}></div>
					<div className={`step ${step >= 3 ? 'active' : ''}`}>3</div>
					<div className={`bar bar-3 ${step === 3 ? 'half' : step > 3 ? 'filled' : ''}`}></div>
					<div className={`step ${step >= 4 ? 'active' : ''}`}>4</div>
				</div>
				<div className="divider"></div>
				<div className="form-container">
					<div className={`header ${step === 1 ? 'active' : ''}`}>
						<h2>Contact details</h2>
						<p>Please fill your information so we can get in touch with you.</p>
					</div>
					<div className={`header ${step === 2 ? 'active' : ''}`}>
						<h2>Our services</h2>
						<p>Please select which service you are interested in.</p>
					</div>
					<div className={`header ${step === 3 ? 'active' : ''}`}>
						<h2>What’s your project budget?</h2>
						<p>Please select the project budget range you have in mind.</p>
					</div>

					<form onSubmit={(e) => e.preventDefault()} className={`form-step ${step === 1 ? 'active' : ''}`}>
						{/* Your Form Step 1 Content */}
						<div className="grid">
							<div className="input-container">
								<label htmlFor="name">Name</label>
								<div className="position-absolute">
									<input id="name" type="text" name="name" placeholder="John Carter"/>
									<img src={User} alt="User"/>
								</div>
							</div>
							<div className="input-container">
								<label htmlFor="email">Email</label>
								<div className="position-absolute">
									<input id="email" type="email" name="email" placeholder="Email address"/>
									<img src={Email} alt="Email"/>
								</div>
							</div>
							<div className="input-container">
								<label htmlFor="phone">Phone Number</label>
								<div className="position-absolute">
									<input id="phone" type="phone" name="phone" placeholder="(123) 456 - 7890"/>
									<img src={Phone} alt="Phone"/>
								</div>
							</div>
							<div className="input-container">
								<label htmlFor="company">Company</label>
								<div className="position-absolute">
									<input id="company" type="company" name="company" placeholder="Company name"/>
									<img src={Company} alt="Company"/>
								</div>
							</div>
						</div>
					</form>
					<form onSubmit={(e) => e.preventDefault()} className={`form-step ${step === 2 ? 'active' : ''}`}>
						{/* Your Form Step 2 Content */}
						<div className="grid">
							<div className="input-container">
								<a href="#"><img src={Development} alt="Development"/><span>Development</span></a>
							</div>
							<div className="input-container">
								<a href="#"><img src={Design} alt="Web Design"/><span>Web Design</span></a>
							</div>
							<div className="input-container">
								<a href="#"><img src={Marketing} alt="Marketing"/><span>Marketing</span></a>
							</div>
							<div className="input-container">
								<a href="#"><img src={Other} alt="Other"/><span>Other</span></a>
							</div>
						</div>
					</form>
					<form onSubmit={(e) => e.preventDefault()} className={`form-step ${step === 3 ? 'active' : ''}`}>
						<div className="grid">
							<div className="input-container">
								<a href="#"><img src={Radio} alt="Radio"/><span>$5.000 - $10.000</span></a>
							</div>
							<div className="input-container">
								<a href="#"><img src={Radio} alt="Radio"/><span>$10.000 - $20.000</span></a>
							</div>
							<div className="input-container">
								<a href="#"><img src={Radio} alt="Radio"/><span>$20.000 - $50.000</span></a>
							</div>
							<div className="input-container">
								<a href="#"><img src={Radio} alt="Radio"/><span>$50.000 +</span></a>
							</div>
						</div>
					</form>
					<form onSubmit={(e) => e.preventDefault()} className={`form-step ${step === 4 ? 'active' : ''}`}>
						<div className="container">
							<div>
								<img src={Submit} alt="Submit"/>
							</div>
							<div className="header active">
								<h2>Submit your quote request</h2>
								<p>Please review all the information you previously typed in the past steps, and if all
									is okay, submit your message to receive a project quote in 24 - 48 hours.</p>
							</div>
							<button onClick={nextStep} className="next">Submit</button>
						</div>
					</form>
				</div>
			</div>
			<div className="button-container">
				<button onClick={prevStep} className="prev">Previous step</button>
				<button onClick={nextStep} className="next">Next step</button>
			</div>
		</div>
	);
};

export default MultiStepForm;