import { useState, useEffect, Fragment } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post/[id]";
import "./App.css";
import Header from "./components/Header";

function App() {

	return (
		<Fragment>
			<Header />
			<Routes>
				<Route path="/" element={<Home  />} />
				<Route path="/post/:id" element={<Post />} />
			</Routes>
		</Fragment>
	);
}

export default App;
