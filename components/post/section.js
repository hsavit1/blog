export default ({ children }) => (
    <div className="wrap">
      <div className="content">{ children }</div>
      <style jsx>{`

        .wrap {
          margin-bottom: 25px;
          padding: 4px;
          background: #f04949;
          line-height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
  
        .content {          
          // margin-top: 25px;
          // margin-bottom: 100px;
          display: inline;
          font-style: oblique;
        }
      `}</style>
    </div>
  )
  