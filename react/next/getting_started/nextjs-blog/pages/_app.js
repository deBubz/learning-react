import "../styles/global.css";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
// this will be the top-lebel component which will be common across
// all different pages
// You can use this component to keep state when navigating between pages
