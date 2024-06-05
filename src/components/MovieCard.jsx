import React from "react";
import { useState } from "react";

function MovieCard() {

  const [hide, sethide] = useState("false")

  return (
    <div
      className="card bg-base-100 shadow-xl image-full m-10 w-48"
      style={{ height: "300px" }}
    >
      {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_4').showModal()}>WishList</button>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop" style={{maxWidth: "100vw"}}>
          <button>close</button>
        </form>
      </dialog>

      <dialog id="my_modal_4" className="modal">
        <div className='modal-box w-8/12 max-w-5xl flex flex-row' style={{justifyContent: "space-between"}}>
          <div className="flex flex-row" style={{justifyContent: "space-between", width: "24rem"}}>
          <select className="select select-primary w-full max-w-xs">
            <option disabled selected>Select A Playlist</option>
            <option>Game of Thrones</option>
            <option>Lost</option>
            <option>Breaking Bad</option>
            <option>Walking Dead</option>
          </select>
            <button className="btn" onClick={() => {document.getElementById('my_modal_4').close()} }>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </button>
          </div>
          <button className="btn btn-secondary" onClick={()=>document.getElementById('my_modal_5').showModal()}>Make New WishList</button>
        </div>
        <form method="dialog" className="modal-backdrop mx-14" style={{maxWidth: "100vw"}}>
          <button>close</button>
        </form>
      </dialog>

      <dialog id="my_modal_5" className="modal">
        <div className="modal-box w-8/12 max-w-5xl flex flex-row" style={{justifyContent: "space-between"}}>
          <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
          <button onClick={() => {document.getElementById('my_modal_5').close()} } className="btn btn-outline btn-primary">Submit</button>
        </div>
        <form method="dialog" className="modal-backdrop" style={{maxWidth: "100vw"}}>
          <button>close</button>
        </form>
      </dialog>

      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          style={{ objectFit: "cover" }}
        />
      </figure>
      <div className="card-body w-full flex flex-col space-y-40 ">
        <h2 className="card-title">Spider Man</h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div className="card-actions justify-end">
          <button
            className="btn btn-sm btn-primary"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            WishList
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;