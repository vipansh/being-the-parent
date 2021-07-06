// import logo from './logo.svg';
import './App.css';
import { FormProvider } from './context/FormContext';
import Homepage from './layouts/Homepage';

function App() {
  return (
    <div className="text-gray-800">
      <FormProvider>
        <Homepage />
      </ FormProvider>
    </div>
  );
}

export default App;
