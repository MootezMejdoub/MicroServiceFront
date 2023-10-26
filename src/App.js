import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./Components/HomePage";
import { LoginForm } from "./Components/Login/loginForm";
import { RegisterForm } from "./Components/Register/registerForm";
import { UserProfile } from "./Components/User/userProfile";
import { UserTable } from "./Components/User/userTable";
import Ticket from './Components/Ticket/Ticket';
import TicketBack from './Components/admin/TicketBack';
import MyTicket from "./Components/Ticket/MyTicket";
import EventList from './Components/Event/EventList';
import EventCreate from './Components/Event/EventCreate';
import EventUpdate from './Components/Event/EventUpdate';
import EventSearch from './Components/Event/EventSearch';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/users" element={<UserTable />} />
        <Route path="/Ticket" element={<Ticket/>}></Route>
       <Route path="/TicketBack" element={<TicketBack/>}></Route>
       <Route path="/myTickets" element={<MyTicket/>}></Route>
        <Route path="/eventlist" element={<EventList />} />
        <Route path="/EventCreate" element={<EventCreate />} />
        <Route path="/EventUpdate" element={<EventUpdate />} />
        <Route path="/EventSearch" element={<EventSearch />} />

       
      </Routes>
    </div>
  );
}

export default App;
