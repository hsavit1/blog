export default ({ children }) => (
    <h1>
      <a href="#">{ children }</a>
      <style jsx>{`
        h1 {
          font: 28px Helvetica Neue, Helvetica,
            Arial, "Lucida Grande", sans-serif;
          font-weight: 500;
          margin-bottom: 10px;
        }
  
        a {
          background-color: #FF4484;
          color: #fff;
          text-decoration: none;
        }
  
        a:hover {
          background-color: #665f55;
          color: #fff;
        }
        `}</style>
    </h1>
  )
  