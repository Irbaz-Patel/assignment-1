import CarList from "./components/CarList";
import "./index.css"
import Car1 from"./components/car1.jpg"
import Car2 from"./components/car2.jpg"
import Car3 from"./components/car3.jpg"
import Car4 from"./components/car4.jpg"
import Car5 from"./components/car5.jpg"
import Car6 from"./components/car6.jpg"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const carData = [
    { id: 1, name: "Toyota RAV4",people:"4 People",km:"6.1km/1-litre",auto:"Automatic",dollar:"$440 / month",year:"2020",oil:"Hybrid",img:Car1 },
    { id: 2, name: "BMW 3 Series",people:"4 People",km:"8.2km/1-litre",auto:"Automatic",dollar:"$350 / month",year:"2019",oil:"Gasoline",img:Car2},
    { id: 3, name: "Volkswagen T-Cross",people:"4 People",km:"5.3km/1-litre",auto:"Automatic",dollar:"$400 / month",year:"2020",oil:"Gasoline",img:Car3 },
    { id: 4, name: "Cadlillac Escalade",people:"4 People",km:"7.7km/1-litre",auto:"Automatic",dollar:"$620 / month",year:"2020",oil:"Gasoline",img:Car4 },
    { id: 5, name: "BMW 4 Series GTI",people:"4 People",km:"7.6km/1-litre",auto:"Automatic",dollar:"$530 / month",year:"2021",oil:"Gasoline",img:Car5 },
    { id: 6, name: "BMW 4 Series",people:"4 People",km:"7.2km/1-litre",auto:"Automatic",dollar:"$490 / month",year:"2019",oil:"Gasoline",img:Car6 },
    { id: 7, name: "Crysta",people:"4 People",km:"7.2km/1-litre",auto:"Automatic",dollar:"$290 / month",year:"2019",oil:"Gasoline",img:Car1 },
    { id: 8, name: "Audi",people:"4 People",km:"7.2km/1-litre",auto:"Automatic",dollar:"$190 / month",year:"2019",oil:"Gasoline",img:Car5 },
    { id: 9, name: "Creta",people:"4 People",km:"7.2km/1-litre",auto:"Automatic",dollar:"$590 / month",year:"2019",oil:"Gasoline",img:Car4 },
    { id: 10, name: "Mercedes",people:"4 People",km:"7.2km/1-litre",auto:"Automatic",dollar:"$390 / month",year:"2019",oil:"Gasoline",img:Car3 },
   
  ];

  const initialCars=[];
  for (let id = 1; id <= 60; id++) {
    const carIndex = id % carData.length; // Loop through carData array
    const car = { ...carData[carIndex] ,id};
    initialCars.push(car);
  }

  return (
    <Router>
      <Routes>
     <Route
      path="/"
      element={
        <>
          <CarList cars={initialCars} />
        </>
      }
     />
       <Route exact path="/page/:pageNumber" 
       element={
        <>
        <CarList cars={initialCars} />
        </>
       }
        />
      </Routes>
    </Router>

  );
}

export default App;
