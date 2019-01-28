# Discovery UI Assessment

* Open /discovery-react/dist/index.html in a browser

* Installation steps (in terminal from the project folder):
	1. npm install
	2. npm run dev (to build in dev environment) and open /discovery-react/dist_dev/index.html
	2. npm run prod (to build in prod environment) and open /discovery-react/dist/index.html

* Screen recording (just in case)
	https://drive.google.com/open?id=1uklBurjh2jey5HyP4OMd7EswqbC83ncE		
		

* Project structure:
	1. The component code is located in
		/src/components/SignUpForm/
	2. Component's container (connected to Redux store)
		/src/components/App/
	3. Actions and Reducer
		/src/actions/main
		/src/reducers/main
	4. App messaging system	
		/src/components/Confirmation/

* Here I would like to describe the difference between the specification and the implementation
	1. Instead of implementing error messages as a part of the component the component sends messages to global application messaging system via Redux. 
	So the messaging/confirmation system and the signup form are different components which can communicate through action dispatching
	2. After entering an email and validation it sends the email address to the server to make sure it is not already subscribed. If the email is already in the list the component state won't be changed. If you see "This email address is already in the list" message just try another email address. Of course it's just simulation
	3. The SignUpForm component does not make any API calls. It dispatches requests for API and it changes its state ONLY in accordance with global app state changes (depending on API call responses). So the component is updated as a part of Redux data/event flow
