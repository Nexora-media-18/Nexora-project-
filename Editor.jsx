export default function Editor() {
  return (
    <div style={{ padding: 40 }}>

      <h1>Homepage Editor</h1>

      <input
        style={{ width: "100%" }}
        placeholder="Hero Title"
      />

      <br /><br />

      <textarea
        style={{
          width: "100%",
          height: "150px"
        }}
        placeholder="Hero Description"
      />

      <br /><br />

      <button>Save Changes</button>

    </div>
  );
}