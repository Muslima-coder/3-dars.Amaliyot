import { createContext, useState } from "react";
import toast from "react-hot-toast";

  const list = [
    {id:1, name:"Jamshid", surname:"Akramov", age:20, region:"Qoqon",  img:"https://picsum.photos/id/1/800/800"},
    {id:2, name:"Hamroz", surname:"Nuriddinov", age:19, region:"Samarqand", img:"https://picsum.photos/id/2/800/800"},
    {id:3, name:"Sarvar", surname:"A'zamov", age:18, region:"Surxondaryo",  img:"https://picsum.photos/id/3/800/800"},
    {id:4, name:"Ibrohimjon", surname:"Shukurullayev", age:18, region:"Toshkent",  img:"https://picsum.photos/id/4/800/800"},
    {id:5, name:"Ulug'bek", surname:"Raxmatullayev", age:20, region:"Toshkent",  img:"https://picsum.photos/id/5/800/800"},
    {id:6, name:"Ulug'bek", surname:"Jo'rayev", age:15, region:"Toshkent",  img:"https://picsum.photos/id/6/800/800"},
    {id:7, name:"Dilnoza", surname:"Rahmatullayeva", age:17, region:"Qashqadaryo",  img:"https://picsum.photos/id/7/800/800"},
    {id:8, name:"Muslima", surname:"Yoqubova", age:16, region:"Toshkent",  img:"https://picsum.photos/id/8/800/800"},
    {id:9, name:"Laylo", surname:"Ismatullayeva", age:16, region:"Toshkent",  img:"https://picsum.photos/id/9/800/800"},
    {id:10, name:"Nigora", surname:"Xasanova", age:19, region:"Toshkent",  img:"https://picsum.photos/id/10/800/800"},
    {id:11, name:"Abdulloh", surname:"Sultonmurodov", age:26, region:"Toshkent",  img:"https://picsum.photos/id/11/800/800"},
    {id:12, name:"Muhammadali", surname:"Rustambekov", age:17, region:"Toshkent",  img:"https://picsum.photos/id/12/800/800"},
    {id:13, name:"Raxmatulloh", surname:"Raxmatov", age:14, region:"Toshkent",  img:"https://picsum.photos/id/13/800/800"},
    {id:14, name:"Abduvahob", surname:"Mirzaaxmedov", age:19, region:"Toshkent",  img:"https://picsum.photos/id/14/800/800"},
    {id:15, name:"Mirzohamdam", surname:"To'lqinov", age:19, region:"Toshkent",  img:"https://picsum.photos/id/15/800/800"},
  ]

    export const Context = createContext();

    export const CounterContext = ({ children }) => {
        const [savedList, setSavedList] = useState([]);
        const [likedList, setLikedList] = useState([]);
        const localData = JSON.parse(localStorage.getItem("students"));
    const [students, setStudents] = useState(localData || list);


    //Save btn
    function savedBtn(item) {
    if (!savedList.find(user => user.id === item.id)) {
      setSavedList([...savedList, item]);
      toast.success("Student saved!");
    }
     else {
      toast.error("Already saved!");
    }
    }

    function sListBtn(){
       setStudents(savedList)
    }

    //Stop actions btn
  function stopActionsBtn() {
  setStudents(list);       
  setSavedList([]);   
  setLikedList([]);   
  localStorage.setItem("students", JSON.stringify(list)); 
  toast.success("All filters cleared!");
}



    //Like btn
    function likedBtn(item) {
    if (!likedList.find(user => user.id === item.id)) {
      setLikedList([...likedList, item]);
      toast.success("Student liked!");
    }
     else {
      toast.error("Already liked!");
    }
  }
     function lListBtn(){
      setStudents(likedList)
    }

    //add btn
   function addStudents(data){
  const updated = [...students, data];
  setStudents(updated);
  localStorage.setItem("students", JSON.stringify(updated));
}



      return (
        <Context.Provider value={{addStudents, students, savedList, savedBtn, sListBtn, lListBtn, likedList, likedBtn, stopActionsBtn }}>
            {children}
        </Context.Provider>
    );
};


