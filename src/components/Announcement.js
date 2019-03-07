import React from 'react'
import{connect} from 'react-redux'


 export const Announcement = ({announcement})=>{


  return(
    <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">

    <div className="card-block">
      <blockquote className="card-blockquote">

         <p>Hey</p>
      </blockquote>
    </div>
    <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"

          >
            Like
          </button>
          <button
            type="button"
            className="btn btn-secondary"
          >
            Dislike
          </button>
          <button
            type="button"
            className="btn btn-danger"
          >

            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Likes:   Dislikes: </div>
      </div>
    </div>
    </div>




  )
}
