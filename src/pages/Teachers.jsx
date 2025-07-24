
import { useContext, useState } from "react";
import { TeachersContext } from "../context/TeachersContext";

const Teachers = () => {
  const { teachers, addTeacher, deleteTeacher} = useContext(TeachersContext);

  const [menuOpen, setMenuOpen] = useState(false);

  function handleCreate(e) {
    e.preventDefault();
    const newTeacher = {
      id: teachers[teachers.length - 1]?.id + 1 || 1,
      name: e.target.name.value,
      surname: e.target.surname.value,
      age: e.target.age.value,
      region: e.target.region.value,
      img: e.target.image.value,
    };
    addTeacher(newTeacher);
    setMenuOpen(false);
  }

  return (
    <div className="p-5 relative">
      <h2 className="text-3xl font-bold text-purple-700 text-center mb-6">Teachers</h2>
      <button onClick={() => setMenuOpen(true)}  className="mb-8 mx-auto flex items-center justify-center gap-2 hover:scale-105 duration-300 w-[150px] rounded-md cursor-pointer py-2 bg-purple-700 shadow-lg text-white font-medium" >
        Create Teacher
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-add" viewBox="0 0 16 16">
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
            <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
          </svg>
      </button>

      <ul className="flex flex-wrap justify-center gap-[30px] items-center">
        {teachers.map((item) => (
          <li key={item.id} className="w-[330px] shadow-lg shadow-blue-700 p-5 rounded-md">
            <img className="mx-auto w-[300px] h-[250px] rounded-lg" src={item.img} alt="img" />
            <div className="justify-center flex items-center gap-[8px] pt-[10px]">
              <p className="font-medium text-[18px] text-white">{item.name}</p>
              <p className="font-medium text-[18px] text-white">{item.surname}</p>
            </div>
            <p className="font-medium text-[18px] text-white text-center">Age: {item.age}</p>
            <p className="font-medium text-[18px] text-white text-center">Region: {item.region}</p>
            <div className="flex items-center justify-around py-5">
              <button onClick={() => editTeacher(item)} className="text-white hover:scale-125 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
               </svg>
              </button>
              <button className="text-white hover:scale-125 duration-300">
                 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                 <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
               </svg>
              </button>
              <button onClick={() => deleteTeacher(item.id)} className="text-white hover:scale-125 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-dash" viewBox="0 0 16 16">
                 <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                 <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
               </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal */}
      <div className={`${menuOpen ? "duration-300 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 backdrop-blur-[3px] z-50" : "hidden"}`}>
        <form onSubmit={handleCreate} autoComplete="off" className="p-5 bg-slate-600 rounded-md space-y-4 w-[300px] text-center">
          <h2 className="text-xl font-bold text-white">Add Teacher</h2>
          <input name="name" required placeholder="Name" className="w-full p-2 rounded outline-none text-white bg-slate-500" />
          <input name="surname" required placeholder="Surname" className="w-full p-2 rounded outline-none text-white bg-slate-500" />
          <input name="age" required type="number" placeholder="Age" className="w-full p-2 rounded outline-none text-white bg-slate-500" />
          <input name="region" required placeholder="Region" className="w-full p-2 rounded outline-none text-white bg-slate-500" />
          <input name="image" required placeholder="Image URL" className="w-full p-2 rounded outline-none text-white bg-slate-500" />
          <div className="flex justify-between">
            <button type="button" onClick={() => setMenuOpen(false)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Cancel</button>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Teachers;

