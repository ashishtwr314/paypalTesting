import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() =>{
    window.paypal.use(["login"], function (login) {
      login.render({
        appid:
          "AanVnamMomULAsaXI2SWQJpBgUTTJ0VWvK9KVVwZSTDDGXL9DcfWC7Z9Oo192Qj6sFTO_obRwnWNH5FB",
        scopes: "openid",
        containerid: "lippButton",
        responseType: "code",
        locale: "en-us",
        buttonType: "LWP",
        buttonShape: "pill",
        buttonSize: "lg",
        fullPage: "true",
        returnurl: "https://v2.staging-lyfeapps.com/paypalauth/",
      });
    });
  }, [])
  return (
    <div className="App">
     <span id="lippButton"></span>
    </div>
  );
}

export default App;
