import React, { FormEventHandler, useState } from 'react';
import { z } from 'zod';


const Form = () => {
	const [data, setData] = useState({});
	let [errors, setErrors] = useState([]);
	const schema = z.object({
		// name: z.string().trim().nonempty('Please provide reason').max(512, { message: "Reason can not be more than 512 characters" }),
		// name: z.number().max(512, { message: "Reason can not be more than 512 characters" }),
		name: z.string({
			required_error:"Please enter your Name",
			received_error: "Name"
		}).refine((name)=>{
			if (name instanceof String) {
				return name;
			}
			return null;
		}, {
			message: "Name must be String"
		}),
		email: z.string({
			required_error:"Please enter your Email",
		}).email({
			message: "Please enter your valid Email"
		}).nonempty("Please enter your Email"),
		password: z.string({
			required_error:"Please enter your Password",
		}).length(8, {message: "Password must be 8 digits longer"})
		.nonempty("Please enter your Password"),
		// contact: z.number({
		// 	required_error:"Please enter your Contact",
		// 	invalid_type_error: "Contact must be Numbers",
		// 	received_error: "contact"
		// })
		contact: z.string({
			required_error:"Please enter your Contact",
		}).refine((contact)=>{
			if (contact instanceof Number) {
				return contact;
			}
			return Number(contact);
		}, {
			message: "Contact must be Numbers"
		})
		// .length(10, {message: "Contact must be 10 digits longer"})
		.refine((contact)=>{
			if (contact.length == 10) {
				return contact;
			}
			return null;
		}, {
			message: "Contact must be 10 digits longer"
		}),
		// .nonempty("Please enter your Contact : "),
		days: z.number().or(z.string().trim().refine((data) => !isNaN(Number(data)), {
	                message: 'Please provide a valid number for days',
	            })
	        )
	        .refine((data) => data !== undefined && data !== null && data !== '', {
	            message: 'Please provide days',
	        }),
	});
	const onChange = (event, key) => setData({...data, key: event.target.value});
	const onSubmit : FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		try{
			schema.parse(data);
		} catch (error) {
			setErrors(JSON.parse(error));
			// setErrors(error);
			// console.error(JSON.parse(error));
			// console.log(error.ZodError);
		}
		// const user = schema.parse(data);
	}
	// console.log(errors.message)
	// errors.map((error)=>console.log(error));
	// console.log(Array.isArray(errors));
	// console.log(typeof data.name);
	return(
		<div className="Form" onSubmit={onSubmit}>
			<form>
				<div className="row g-3 align-items-center mb-2">
					<div className="col-auto">
						<label htmlFor="name" className="col-form-label">Name : </label>
					</div>
					<div className="col-auto">
						<input type="text" id="name" className="form-control" value={data.name} onChange={(event) => setData({...data, name: event.target.value})} />
						{errors.map((error, key) => <span key={key} className="text-danger">{error.path == 'name' ? error.message : ''}</span>)}
					</div>
				</div>
				<div className="row g-3 align-items-center mt-2">
					<div className="col-auto">
						<label htmlFor="email" className="col-form-label">Email : </label>
					</div>
					<div className="col-auto">
						<input type="text" id="email" className="form-control" value={data.email} onChange={(event) => setData({...data, email: event.target.value})} />
						{errors.map((error, key) => <span key={key} className="text-danger">{error.path == 'email' ? error.message : ''}</span>)}
					</div>
				</div>
				<div className="row g-3 align-items-center mt-2">
					<div className="col-auto">
						<label htmlFor="password" className="col-form-label">Password : </label>
					</div>
					<div className="col-auto">
						<input type="password" id="password" className="form-control" value={data.password} onChange={(event) => setData({...data, password: event.target.value})} />
						{errors.map((error, key) => <span key={key} className="text-danger">{error.path == 'password' ? error.message : ''}</span>)}
					</div>
				</div>
				<div className="row g-3 align-items-center mt-2">
					<div className="col-auto">
						<label htmlFor="contact" className="col-form-label">Contact : </label>
					</div>
					<div className="col-auto">
						<input type="text" id="contact" className="form-control" value={data.contact} onChange={(event) => setData({...data, contact: event.target.value})} />
						{errors.map((error, key) => <span key={key} className="text-danger">{error.path == 'contact' ? error.message : ''}</span>)}
					</div>
				</div>
				<div className="row g-3 align-items-center mt-2">
					<div className="col-auto">
						<label htmlFor="days" className="col-form-label">Days : </label>
					</div>
					<div className="col-auto">
						<input type="text" id="days" className="form-control" value={data.days} onChange={(event) => setData({...data, days: event.target.value})} />
						{errors.map((error, key) => <span key={key} className="text-danger">{error.path == 'days' ? error.message : ''}</span>)}
					</div>
				</div>
				<div className="g-3 align-items-center mt-2">
					<button type="submit" className="btn btn-primary">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default Form;