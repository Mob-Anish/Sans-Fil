import "./timer.css";

const timer = () => {
  const now = new Date();

  return (
    <div className="timer--container">
      <h1>Scheduler</h1>
      <form>
        <div className="input-field">
          <label htmlFor="date"></label>
          <input type={"text"} name="date" className="date" placeholder="Enter your time👈..."/>
        </div>
        <div className="input-field">
          <label htmlFor="pin"></label>
          <input type={"text"} name="date" className="date" placeholder="Enter your time👈..."/>
        </div>
        OnorOff
        Recurring
        <button type={"submit"}>Submit</button>
      </form>
    </div>
  );
};

export default timer;
