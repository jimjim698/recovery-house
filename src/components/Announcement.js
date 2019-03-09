import React from 'react'
import{connect} from 'react-redux'


 export const Announcement = ({announcement, likeAnnouncement, dislikeAnnouncement, deleteAnnouncement})=>{


  return(
    <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">

    <div className="card-block">
      <blockquote className="card-blockquote">

         <p>{announcement.content}</p>
      </blockquote>
    </div>
    <div className="float-right">
        <div className="btn-group btn-group-sm" >
          <button
            type="button"
            className="btn btn-outline-primary "
            onClick={()=>{likeAnnouncement(announcement)}}

          >
            Like
          </button>
          <button
            type="button"
            className="btn btn-outline-danger "
            onClick={()=>dislikeAnnouncement(announcement)}
          >
            Dislike
          </button>

          <button
            type="button"
            className="btn btn btn-outline-dark"
            onClick={()=>{deleteAnnouncement(announcement)}}
          >

            <span aria-hidden="true">&times;</span>
          </button>

        </div>
        <div>Likes: {announcement.likes}  Dislikes:{announcement.dislikes} </div>
      </div>
    </div>
    </div>




  )
}
