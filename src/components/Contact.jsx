const Contact = () => {
	return (
		<div className="container">
			<div>
				<h1>Contact</h1>
				<p>
					I would love to hear about your project and how I could help. Please
					fill in the form, and I&apos;ll get back to you as soon as possible.
				</p>
			</div>
			<form>
				<input type="text" id="name" name="name" placeholder="NAME" />
				<input type="text" id="email" name="email" placeholder="EMAIL" />
				<textarea
					id="w3review"
					name="w3review"
					rows="4"
					cols="50"
					placeholder="MESSAGE"
				></textarea>
				<button type="submit">Send message</button>
			</form>
		</div>
	);
};

export default Contact;
