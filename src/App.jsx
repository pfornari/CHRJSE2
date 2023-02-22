import Header from "./components/Header/Header.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <ItemListContainer saludo="Bienvenido a ShopCart" />
      </Layout>
    </div>
  );
}

export default App;
