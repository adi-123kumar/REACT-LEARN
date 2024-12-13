import { useState } from "react";

export default function LikeButton(){
 let [isLiked,setIsLiked] = useState(false);

    function likedButton(){
            setIsLiked(!isLiked);
    }
    return(
        <div>
         <span>Like</span> <span><i class="fa-regular fa-heart" onClick={likedButton}></i></span>
        </div>
    );
}