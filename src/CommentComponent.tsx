import React ,{Component, useState} from "react";

export interface Comment {
  id: number;
  comment: string;
  children?: Comment[];
}
interface CommentComponentProps {
  comment: Comment;
}
export default function CommentComponent(props:CommentComponentProps) {

const [isVisible, setIsVisible] = useState(true);
const [childComments, setChildComments] = useState<Comment[]>(props?.comment?.children || []);
const [replyText, setReplyText] = useState<string>("");

const handleReply = () =>{
    if(replyText.trim()){
        const newComment:Comment = {
            comment:replyText,
            children:[],
            id:0,
        };
        setChildComments([...childComments,newComment]);
        setReplyText("");

    }
 }
  return (
    <div>
      <p>{props.comment?.comment}</p>
      <textarea
        className=""
        value={replyText}
        onChange={(e)=>setReplyText(e.target.value)}
        rows={2}
        cols={50}
        placeholder="Type something"
      ></textarea>
    <br></br>
      <button className="reply-bttton" onClick={handleReply}>Reply</button>
<br></br>
      <button 
        className="toggle-button"
        onClick={ ()=> setIsVisible(!isVisible)}>
            {isVisible ? `Hide Comments` : `Show Comments`}
        </button>
        
        {
            isVisible && childComments.length > 0 && (
                <div>
                    {
                        childComments.map((childComment) => (
                            <CommentComponent key={childComment.id} comment={childComment}/>
                        ))
                    }
                </div>
            )
        }
        
    </div>
  );
}
