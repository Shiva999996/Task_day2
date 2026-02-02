import Toggle from "../../src/components/Toggle";

function SettingsPage() {
  return (
    <div>
      <h2>Settings</h2>

      <Toggle>
        {({ on, toggle }) => (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button onClick={toggle}>
              {on ? "Disable notifications" : "Enable notifications"}
            </button>

            <span>Status: {on ? "ON" : "OFF"}</span>
          </div>
        )}
      </Toggle>
    </div>
  );
}

export default SettingsPage;
