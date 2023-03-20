import React, {useState} from "react"
import Title from "./Title"
import GirlPic from "./girl.jpg"

export default function LikePhotoApp(){
    
    const [isLiked, setLike] = useState(false)
    const [count, setCount] = useState(0)
    
    const changeLike = ()=> {
        if (!isLiked){
            setLike(true)
            setCount(prevCount => prevCount + 1)}
        else {
            setLike(false)
            setCount(prevCount => prevCount - 1)}
    }
    return(
        <div>
            <Title text="Like Photo App"/>
            <h2 className="text_center">Likes: {count} </h2>
            <div style={{width: "200px", margin: "0 auto", borderRadius: "5px", border: "none"}}>
            
                <div style={{display: "flex", justifyContent: "space-around", alignItems: "center",padding: "10px 0", background: "rgba(0,0,0,.4)"}}>
                    <i className="fa fa-smile-o" aria-hidden="true"></i>
                    <small>Cute Gal</small>
                </div>
                
                <img onDoubleClick={changeLike} style={{width: "100%", margin: "0", cursor:"pointer"}} src={GirlPic}/>
                
                <div style={{display: "flex", justifyContent: "space-around", alignItems: "center",padding: "10px 0", background: "rgba(0,0,0,.4)", marginTop: "-5px"}}>
                    <i className="fa fa-comments" aria-hidden="true"></i>
                   { isLiked ? <i onClick={changeLike} className="fa fa-heart" aria-hidden="true"></i> :
                    <i onClick={changeLike} className="fa fa-heart-o" aria-hidden="true"></i>}
                </div>
                
            </div>
        </div>
    )
}