import "./App.css";

function App() {
  return (
    <>
      <Header name="Foysal" />

      <Main user={{ name: "Rubayed Ahmed Foysal", age: 23, city: "Kushtia" }} />

      <Footer />
    </>
  );
}

function Header({ name }) {
  return <h1 id="header">Hello {name}, Welcome To BD Election Website.</h1>;
}

function Main({ user }) {
  return (
    <div id="main">
      <h1>Name: {user.name}</h1>
      <h2>
        {user.age > 18 ? "You eligible for vote" : "Not eligible for vote"}
      </h2>
      <h3>Current City: {user.city}</h3>
    </div>
  );
}

function Footer() {
  return <h1 id="foot">Thank You For Visiting Our Website.</h1>;
}

export default App;
