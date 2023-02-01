import { useSelector } from "react-redux";
import "./App.css";
import { Registration } from "./component/Registration.jsx";
import { Login } from "./component/Login.jsx";

function App() {
  const products = useSelector((state) => state.products);
  const users = useSelector((state) => state.users);

  return (
    <div className="App">
      {products.map((product) => (
        <div key={product.id}>
          {" "}
          {product.name} - {product.price}{" "}
        </div>
      ))}

      {users.map((user) => (
        <div key={user.id}>
          {" "}
          {user.name} - {user.username}{" "}
        </div>
      ))}
      <Registration />
      <Login />
    </div>
  );
}

export default App;
