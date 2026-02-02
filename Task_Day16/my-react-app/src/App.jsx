import { useState } from "react";
import Modal from "./components/Modal";
import LoginPage from "./pages/login/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import PasswordField from "./components/PasswordField";
import "./App.css";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="app">
     
      <header className="app-header">
        <button onClick={() => setOpen(true)}>Open Modal</button>
      </header>

     
      <main className="app-main">
        <div className="content-wrapper">
          <section className="section">
            <LoginPage />
          </section>

          <section className="section">
            <SettingsPage />
          </section>

          <section className="section">
            <PasswordField />
          </section>
        </div>
      </main>

      {/* Modal */}
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>Close the page</h2>
        <div className="modal-actions">
          <button
            className="button-secondary"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default App;
