import {useState} from "react";
import User from "../../img/user.png";
import Phone from "../../img/phone.png";
import Company from "../../img/company.png";
import Email from "../../img/email.png"
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
								<a href="#"></a>
							</div>
						</div>
					</form>
					<form onSubmit={(e) => e.preventDefault()} className={`form-step ${step === 3 ? 'active' : ''}`}>
						{/* Your Form Step 3 Content */}
					</form>
					<form onSubmit={(e) => e.preventDefault()} className={`form-step ${step === 4 ? 'active' : ''}`}>
						{/* Your Form Step 4 Content */}
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