import { useContext } from "react"
import { Context } from "./context/Context"

const App = () => {
  const { students, savedList, savedBtn, sListBtn, lListBtn, likedList, likedBtn } = useContext(Context)

  return (
    <>
    <div className="p-20">
      <h1 className="font-bold text-[30px]  text-center text-white ">94-guruh a'zolari</h1>
      <div className="py-[30px] flex justify-center gap-[50px] items-center">
        <button onClick={() => sListBtn()} className="cursor-pointer hover:scale-[1.05] duration-300  w-[100px] p-2 text-white bg-violet-700 font-medium rounded-md ">Saved:({savedList.length})</button>
        <button onClick={() => lListBtn()} className="cursor-pointer hover:scale-[1.05] duration-300  w-[100px] p-2 text-white bg-orange-700 font-medium rounded-md ">liked: ({likedList.length})</button>
      </div>
      <ul className="flex flex-wrap justify-center gap-[90px] items-center">
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
            </div>
          </li>
        )}
      </ul>
    </div>
    </>
  )
}

export default App