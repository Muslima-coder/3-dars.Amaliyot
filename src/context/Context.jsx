import { createContext, useState } from "react";

  const students = [
    {id:1, name:"Jamshid", surname:"Akramov", age:20, region:"Qoqon", isLiked:false, isBasket:false,  img:"https://picsum.photos/id/1/800/800"},
    {id:2, name:"Hamroz", surname:"Nuriddinov", age:19, region:"Samarqand", isLiked:false, isBasket:false, img:"https://picsum.photos/id/2/800/800"},
    {id:3, name:"Sarvar", surname:"A'zamov", age:18, region:"Surxondaryo", isLiked:false, isBasket:false,  img:"https://picsum.photos/id/3/800/800"},
    {id:4, name:"Ibrohimjon", surname:"Shukurullayev", age:18, region:"Toshkent", isLiked:false, isBasket:false,  img:"https://picsum.photos/id/4/800/800"},
    {id:5, name:"Ulug'bek", surname:"Raxmatullayev", age:20, region:"Toshkent", isLiked:false, isBasket:false,  img:"https://picsum.photos/id/5/800/800"},
    {id:6, name:"Ulug'bek", surname:"Jo'rayev", age:15, region:"Toshkent", isLiked:false, isBasket:false,  img:"https://picsum.photos/id/6/800/800"},
    {id:7, name:"Dilnoza", surname:"Rahmatullayeva", age:17, region:"Qashqadaryo", isLiked:false, isBasket:false,  img:"https://picsum.photos/id/7/800/800"},
    {id:8, name:"Muslima", surname:"Yoqubova", age:16, region:"Toshkent", isLiked:false, isBasket:false,  img:"https://picsum.photos/id/8/800/800"},
    {id:9, name:"Laylo", surname:"Ismatullayeva", age:16, region:"Toshkent", isLiked:false, isBasket:false,  img:"https://picsum.photos/id/9/800/800"},
    {id:10, name:"Nigora", surname:"Xasanova", age:19, region:"Toshkent", isLiked:false, isBasket:false,  img:"https://picsum.photos/id/10/800/800"},
    {id:11, name:"Abdulloh", surname:"Sultonmurodov", age:26, region:"Toshkent", isLiked:false, isBasket:false,  img:"https://picsum.photos/id/11/800/800"},
    {id:12, name:"Muhammadali", surname:"Rustambekov", age:17, region:"Toshkent", isLiked:false, isBasket:false,  img:"https://picsum.photos/id/12/800/800"},
    {id:13, name:"Raxmatulloh", surname:"Raxmatov", age:14, region:"Toshkent", isLiked:false, isBasket:false,  img:"https://picsum.photos/id/13/800/800"},
    {id:14, name:"Abduvahob", surname:"Mirzaaxmedov", age:19, region:"Toshkent", isLiked:false, isBasket:false,  img:"https://picsum.photos/id/14/800/800"},
    {id:15, name:"Mirzohamdam", surname:"To'lqinov", age:19, region:"Toshkent", isLiked:false, isBasket:false,  img:"https://picsum.photos/id/15/800/800"},
  ]

export const Context = createContext();

export const CounterContext = ({ children }) => {
    const [likedCount, setLikedCount] = useState(0);
    const [savedCount, setSavedCount] = useState(0);

  function likedBtn() {
        let findObj = students.find(item => item.id == id)
        findObj.isLiked = !findObj.isLiked
        setLikedCount(likedCount + 1);
    }


    function savedBtn() {
        setSavedCount(savedCount + 1);
    }

    return (
        <Context.Provider value={{ likedBtn, savedBtn, likedCount, savedCount, students }}>
            {children}
        </Context.Provider>
    );
};


