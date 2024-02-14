import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbars from './Pages/Navbars';
import Series from "./Pages/Series";
import Movies from "./Pages/Movies";
import Hero from "./Pages/Hero";
import Auth from "./Pages/Auth";
import { useUser } from "@clerk/clerk-react";
import { SignedOut } from "@clerk/clerk-react"

function App() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  return (
    <main className="relative">
      <Router>
        <SignedOut>
          <Auth />
        </SignedOut>
        {isSignedIn ?
          <>
            <Navbars />
            <Routes>
              <Route path="/" element={<Auth />} />
              <Route path="/home" element={<Hero />} />
              <Route path="/series" element={<Series />} />
              <Route path="/movies" element={<Movies />} />
            </Routes>
          </>
          : null}
      </Router>
    </main>
  );
}

export default App
