import { useState } from "react";

const INIT_INPUT = {
  name: "",
  country: "",
  bio: "",
  birthday: "",
  gender: "",
  agree: false,
  skills: [],
};

const Inputs = () => {
  const [inputs, setInputs] = useState(INIT_INPUT);
  const { name, country, bio, birthday, agree, skills } = inputs;

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleCheckBox = (event) => {
    setInputs({ ...inputs, agree: event.target.checked });
  };

  const handleSkillChange = (event) => {
    if (event.target.checked) {
      setInputs({ ...inputs, skills: [...inputs.skills, event.target.value] });
    } else {
      const skills = inputs.skills.filter(
        (skill) => skill !== event.target.value
      );
      setInputs({ ...inputs, skills });
    }
  };

  return (
    <div>
      {/* step -01  */}
      <h1>Working With Forms in React</h1>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Amir kahn sumon"
        onChange={handleChange}
      />
      <br />
      <br />
      <select name="country" onChange={handleChange} value={country}>
        <option value="">Select Your country</option>
        <option value="bangladesh">Bangladesh</option>
        <option value="pakistan">Pakistan</option>
        <option value="india">India</option>
        <option value="China">China</option>
        <option value="nepal">Nepal</option>
      </select>
      <br />
      <br />
      <textarea
        name="bio"
        value={bio}
        placeholder="tell me about yourself"
        onChange={handleChange}
      ></textarea>
      <br />
      <input
        type="date"
        name="birthday"
        placeholder="birthday"
        onChange={handleChange}
        value={birthday}
      />
      <br />

      {/* step- 02  */}
      <div>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="other"
          onChange={handleChange}
        />
        Other
      </div>

      {/* step-04  */}
      <div>
        Skills: <br />
        <input
          type="checkbox"
          name="skills"
          value="java"
          checked={skills.includes("java")}
          onChange={handleSkillChange}
        />
        Java
        <input
          type="checkbox"
          name="skills"
          value="javascript"
          checked={skills.includes("javascript")}
          onChange={handleSkillChange}
        />
        Javascript
        <input
          type="checkbox"
          name="skills"
          value="python"
          checked={skills.includes("python")}
          onChange={handleSkillChange}
        />
        python
        <input
          type="checkbox"
          name="skills"
          value="GoLang"
          checked={skills.includes("GoLang")}
          onChange={handleSkillChange}
        />
        GoLang
      </div>

      {/* step-03  */}
      <div>
        <input
          type="checkbox"
          name="agree"
          checked={agree}
          onChange={handleCheckBox}
        />
        I agree to All the terms and condition
      </div>
      <button onClick={() => console.log(inputs)}>Show Data</button>
    </div>
  );
};

export default Inputs;
