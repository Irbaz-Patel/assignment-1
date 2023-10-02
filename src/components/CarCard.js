import React from 'react'


const CarCard = ({car}) => {

  return (
  <>
   <div className="card" style={{ width: "18rem", height: "25rem", backgroundColor: "#e3f2fd" }}>
    <img
      src={car.img}
      className="card-img-top mx-auto d-block"
      alt="..."
      style={{ width: 277, height: 170, borderRadius: "1rem", marginTop: 10 }}
    />
    <div className="card-body">
      <h5
        className="card-title"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
         {car.name}{" "}
        <span className="badge text-bg-light" style={{ fontSize: 11 }}>
         {car.year}
        </span>
      </h5>
      <br />
      <p className="card-text" style={{ fontSize: 14 }}>
        <svg
          style={{ color: "rgb(50, 147, 226)" }}
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-users"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
        </svg>
        {car.people}
        <svg
          style={{ color: "rgb(50, 147, 226)", marginLeft: 71 }}
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-charging-pile"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 7l-1 1" />
          <path d="M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3" />
          <path d="M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14" />
          <path d="M9 11.5l-1.5 2.5h3l-1.5 2.5" />
          <path d="M3 20l12 0" />
          <path d="M4 8l10 0" />
        </svg>
        {car.oil}
      </p>
      <p className="card-text " style={{ fontSize: 14 }}>
        <svg
          style={{ color: "rgb(50, 147, 226)" }}
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-speedtest"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5.636 19.364a9 9 0 1 1 12.728 0" />
          <path d="M16 9l-4 4" />
        </svg>
        {car.km}
        <svg
          style={{ color: "rgb(50, 147, 226)", marginLeft: 42 }}
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-steering-wheel"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M12 14l0 7" />
          <path d="M10 12l-6.75 -2" />
          <path d="M14 12l6.75 -2" />
        </svg>
       {car.auto}
      </p>
      <hr />
      <p className="card-text" style={{ fontSize: 14 }}></p>
      <h5 style={{ display: "contents" }}>$440</h5> /month
      <svg
        type="submit"
        style={{ marginLeft: 25 }}
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-heart-filled"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215"></path>
      </svg>
      <button type="button" className="btn btn-info mx-1">
        Rent now
      </button>
      <p />
    </div>
  </div>  
  </>
  
  )
}

export default CarCard
