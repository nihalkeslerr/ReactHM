import fetch from "node-fetch";
import axios from "axios";



async function getData(Number) {

    const {data:users }= await axios("https://jsonplaceholder.typicode.com/users/"+ Number);

    const {data:posts }= await axios("https://jsonplaceholder.typicode.com/posts?id="+ Number);

  //  console.log("user: ",users,posts);
  //  console.log("Post: ",posts);
  const array=[users,posts];
  console.log(array);
    console.log("Bu bir deneme değişikliğidir.");

}


export default getData;
