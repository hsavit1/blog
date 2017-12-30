export default ({ children }) => (
    <h1>
      { children }
      <style jsx>{`
        h1 {
          font: 16px Helvetica Neue, Helvetica,
            Arial, "Lucida Grande", sans-serif;
          font-weight: 500;
          margin-bottom: 10px;
        }  
      `}</style>
    </h1>
  )
  