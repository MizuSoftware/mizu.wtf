<script>
	import { OnMount } from 'fractils';

	import '../app.css';
	import Navbar from '../components/layout/Navbar.svelte';
	import Footer from '../components/layout/Footer.svelte';
</script>

<OnMount>
	<Navbar />

	<slot />

	<Footer />
</OnMount>
