export default function Header(props) {
  return (
    <div className="container">
      <div>
        <h1>Far Away</h1>
        <p>
          Your travel partner which never let yo forget your travel essential
        </p>
        <div className="inp-container">
          <form onSubmit={props.handleSubmit}>
            <input
              type="number"
              name="quant"
              value={props.quant}
              onChange={props.handleNumChange}
            />
            <input
              type="text"
              name=""
              id="item"
              value={props.desc}
              onChange={props.handleDescChange}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}
