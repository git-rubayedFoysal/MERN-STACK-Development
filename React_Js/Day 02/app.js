// const element = (
//   <div>
//     <h1 id="title">Hello World!</h1>
//     <h2>This is JSX</h2>
//   </div>
// );

// React Component
// function App(courses) {
//   return (
//     <ul>
//       {courses.map((c) => (
//         <li>{c}</li>
//       ))}
//     </ul>
//   );
// }

function Header({ name, style }) {
  return <h1 style={style}>{name} Welcome To BD Election Website.</h1>;
}

function Main({ user, style }) {
  return (
    <div style={style}>
      <h1>Name: {user.name}</h1>
      <h2>
        {user.age > 18 ? "You eligible for vote" : "Not eligible for vote"}
      </h2>
      <h3>Current City: {user.city}</h3>
    </div>
  );
}

function Footer({ style }) {
  return <h1 style={style}>Thank You For Visiting Our Website.</h1>;
}

function App() {
  return (
    <>
      <Header
        name="Foysal"
        style={{ backgroundColor: "crimson", padding: "10px" }}
      />

      <Main
        user={{ name: "Rubayed Ahmed Foysal", age: 23, city: "Kushtia" }}
        style={{
          backgroundColor: "seagreen",
          padding: "10px",
          height: "50vh",
        }}
      />

      <Footer
        style={{
          backgroundColor: "coral",
          padding: "10px",
        }}
      />
    </>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
