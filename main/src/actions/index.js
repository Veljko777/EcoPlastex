import posts from "../apis/posts"
import {FETCH_POSTS, CREATE_CONTACT} from "./types"

export const fetchPosts =()=>  async dispatch=>{
    const response = await posts.get("/data");
    dispatch({type:FETCH_POSTS, payload:response.data.proizvodi})
}

export const createContact=formValues=>async(dispatch)=>{
    const response=await posts.post("/contact",{formValues})
    .then(()=>
        document.querySelector(".message").classList.add('messageinfo')
    )
    .then(()=>setTimeout(function(){
        document.querySelector(".message").classList.remove('messageinfo');
    }, 5000))
    .catch(err=>{console.log(err)})
    dispatch({type:CREATE_CONTACT, payload:response})
    
}