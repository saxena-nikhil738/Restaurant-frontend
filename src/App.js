import { Route, Routes, useParams } from "react-router";
import "./App.css";
import AddNew from "./Components/AddNew/AddNew";
import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import EditRestaurant from "./Components/EditRestaurant/EditRestaurant";

function App() {
  const { id } = useParams();
  console.log(id);

  return (
    <div class="App">
      <Header />
      <Home />
      {/* <AddNew /> */}
      <Routes>
        <Route path="/add-new-restaurant" element={<AddNew />} />
        <Route path="/edit-restaurant/:id" element={<EditRestaurant />} />
      </Routes>
    </div>
  );
}

export default App;
