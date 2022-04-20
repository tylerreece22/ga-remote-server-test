<script>
	// Import the functions you need from the SDKs you need
	import { initializeApp } from "firebase/app";
	import { getAnalytics } from "firebase/analytics";
	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries

	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	const firebaseConfig = {
		apiKey: "AIzaSyCIneXr4eeq1mWP7UTqH3cyJdjCf3Pfcqc",
		authDomain: "ga-server-test.firebaseapp.com",
		projectId: "ga-server-test",
		storageBucket: "ga-server-test.appspot.com",
		messagingSenderId: "443284951214",
		appId: "1:443284951214:web:d017976e10ccd757c91d3f",
		measurementId: "G-LZYBQQWKBZ"
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const analytics = getAnalytics(app);

	export let name;

	const handleClick = () => {
		console.log('submitted event to function')
		gtag('event', 'click', {data: 'super important click data'})
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<button on:click={handleClick}>click me</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
