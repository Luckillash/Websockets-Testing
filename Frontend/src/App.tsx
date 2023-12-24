import './App.scss'

function App() {

    const socket = new WebSocket('ws://localhost:8080')

    socket.onmessage = ({ data }) => {
  
      console.log(data)
  
    }

	return (

		<>

			<Menu />

			<main style={{ width: "100vw", display: "flex", justifyContent: 'center', placeItems: "center"}}>

				<div style={{ display: "flex", flexDirection: "column", width: "60vw", gap: 14 }}>

					<div style={{ backgroundColor: "#616161", width: "100%", height: "60vh"}}>

						Mensajes
						
					</div>

					<textarea style={{ height: "20vh" }} />

					{/* <button onClick={() => socket.send(JSON.stringify({ message: 'Hola', meta: 'join', sala: 'as'}))}>Unirse a la sala</button> */}

				</div>

			</main>

		</>




	)

}

function Menu () {

	return (

		<header>

			<nav className="menu--left">

				<div className="menuToggle">

					<input type="checkbox"/>

					<span></span>

					<span></span>

					<span></span>

					<ul className="menuItem">

						<li><a href="#">Sala 1</a></li>

						<li><a href="#">Sala 2</a></li>

						<li><a href="#">Sala 3</a></li>

						<li><a href="#">Sala 4</a></li>

						<li><a href="#">Sala 5</a></li>

					</ul>

				</div>

			</nav>

		</header>


	)

}

export default App
