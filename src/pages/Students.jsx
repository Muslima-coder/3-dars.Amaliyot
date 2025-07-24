import { useContext, useState } from "react"
import { Context } from "../context/Context";
import { Toaster } from "react-hot-toast"


const Students = () => {
  const { students, savedList,addStudents, savedBtn, sListBtn, lListBtn, likedList, likedBtn, stopActionsBtn, handleSearch, searchValue, deleteBtn } = useContext(Context)

  const [menuOpen, setMenuOpen] = useState(false);

  function handleCreate(e){
    e.preventDefault()
    const data = {
        id: students[students.length -1]?.id ? students[students.length -1].id +1 : 1,
        name:e.target.name.value,
        surname:e.target.surname.value ,
        age:e.target.age.value,
        region: e.target.region.value,
        img:e.target.image.value 
    }
    addStudents(data)
    setMenuOpen(false)
  }

  return (
    <div>
    <Toaster position="top-center" reverseOrder={false}/>
    <div className="containers p-5 py-7 relative">
      <h1 className="mx-auto font-bold text-[30px]  text-center text-white ">94-guruh a'zolari</h1>
      <label className="flex absolute top-7 right-20 items-center gap-5 w-[200px] p-2 text-white shadow-lg shadow-slate-500 rounded-md">
        <input className="searchInput  text-[16px] text-white font-medium outline-none border-none  w-[150px]" type="text" name="search" placeholder="Search " aria-label="Search "   value={searchValue}  onChange={handleSearch} />
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="h-7 w-7 bi bi-search-heart" viewBox="0 0 16 16">
        <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
        <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/>
      </svg>
    </label>
      <div className="py-[30px] flex justify-center gap-[50px] items-center">
      <button onClick={() => sListBtn()} className="shadow-md shadow-violet-900  cursor-pointer hover:scale-[1.05] duration-300  w-[100px] p-2 text-white bg-violet-700 font-medium rounded-md ">Saved:({savedList.length})</button>
      <button onClick={() => stopActionsBtn()} className=" hover:scale-[1.05] duration-300 w-[50px] rounded-md cursor-pointer py-1 bg-red-800 shadow-lg shadow-red-900 text-white font-medium text-[16px] ">
       <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x mx-auto" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        </svg>
      </button>
      <button onClick={() => lListBtn()} className="shadow-md shadow-orange-900 cursor-pointer hover:scale-[1.05] duration-300  w-[100px] p-2 text-white bg-orange-700 font-medium rounded-md ">liked: ({likedList.length})</button>
      </div>
        <button  onClick={() => setMenuOpen(true)} className="mx-auto mb-4 flex items-center justify-center gap-[3px] hover:scale-[1.05] duration-300 w-[130px] rounded-md cursor-pointer py-2 bg-gray-500 shadow-lg shadow-gray-700 text-white font-medium text-[16px] ">
          Create
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-add" viewBox="0 0 16 16">
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
            <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
          </svg>
        </button>

      <ul className="flex flex-wrap justify-center gap-[30px] items-center">
        {students.map(item =>
          <li key={item.id} className="w-[330px] shadow-lg shadow-blue-700 p-5 rounded-md ">
            <img className="mx-auto w-[300px] h-[250px] rounded-lg " src={item.img} alt="img" />
            <div className="justify-center flex items-center gap-[8px] pt-[10px] ">
              <p className="font-medium text-[18px] text-white ">{item.name}</p>
              <p className="font-medium text-[18px] text-white ">{item.surname}</p>
            </div>
              <p className="font-medium text-[18px] text-white text-center ">age: {item.age}</p>
              <p className="font-medium text-[18px] text-white  text-center">region: {item.region}</p>
            <div className="flex items-center justify-around py-5">
              <button onClick={() => savedBtn(item)} className="text-white cursor-pointer hover:scale-[1.3] duration-300 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bookmark-heart-fill" viewBox="0 0 16 16">
                  <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                </svg>
              </button>
              <button onClick={() => likedBtn(item)} className="text-white cursor-pointer hover:scale-[1.3] duration-300 ">
               <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
              </svg>
              </button>
              <button onClick={() => deleteBtn(item.id)} className="text-white cursor-pointer hover:scale-[1.3] duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-dash" viewBox="0 0 16 16">
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
              </svg>
              </button>
            </div>
          </li>
        )}
      </ul>
      <a className="absolute right-[-15px] bottom-2 w-[50px] h-[50px] border-gray-200 rounded-full bg-transparent text-white " href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="mx-auto bi bi-arrow-up-circle" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
        </svg>
      </a>
    </div>
    {/* Modal */}
        <div className={`${menuOpen ? "duration-300 flex items-center justify-center fixed top-0 bottom-0 left-0 right-0  backdrop-blur-[5px] z-100" : "hidden"}`}>
          <form onSubmit={handleCreate} autoComplete="off" className=" p-[20px] bg-slate-600 rounded-md space-y-4 w-[300px] text-center">
          <h2 className="text-[24px] font-bold text-white">Add Student</h2>
          <input className="w-full p-2 border-[1.5px] border-slate-400 rounded-[10px] outline-none focus:shadow-md shadow-slate-200 text-white" required type="text" placeholder="name" name="name" />
          <input className="w-full p-2 border-[1.5px] border-slate-400 rounded-[10px] outline-none focus:shadow-md shadow-slate-200 text-white" required type="text" placeholder="surname" name="surname" />
          <input className="w-full p-2 border-[1.5px] border-slate-400 rounded-[10px] outline-none focus:shadow-md shadow-slate-200 text-white" required type="number" placeholder="age" name="age" />
          <input className="w-full p-2 border-[1.5px] border-slate-400 rounded-[10px] outline-none focus:shadow-md shadow-slate-200 text-white" required type="text" placeholder="region" name="region" />
          <input className="w-full p-2 border-[1.5px] border-slate-400 rounded-[10px] outline-none focus:shadow-md shadow-slate-200 text-white" required type="text" placeholder="image URL" name="image" />
          <div className="flex justify-between">
            <button type="submit" onClick={() => setMenuOpen(false)} className="duration-300 cursor-pointer  bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Cancel</button>
            <button type="submit" className="duration-300 cursor-pointer bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">Add</button>
          </div>
          </form>
        </div>
    </div>
  );
};

export default Students;
