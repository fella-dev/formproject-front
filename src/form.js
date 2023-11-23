import { API_URL } from "./config";

function FormPage() {
  async function form(e) {
    e.preventDefault();
    const userInfo = {
      firstName: e.target.firstName.value,
      lastName: e.target.firstName.value,
      age: e.target.age.value,
      country: e.target.country.value,
    };
    if (userInfo) {
      alert("thank you we have received your infos");
    }
    e.target.reset();
    const res = await fetch(API_URL + "/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    });
  }

  return (
    <form onSubmit={form}>
      <div>
        <label htmlFor="firstname">First Name:</label>
        <input type="text" id="firstname" name="firstname" />
      </div>
      <div>
        <label htmlFor="lastname">Last Name:</label>
        <input type="text" id="lastname" name="lastname" />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input type="text" id="age" name="age" />
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <input type="text" id="country" name="country" />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default FormPage;
