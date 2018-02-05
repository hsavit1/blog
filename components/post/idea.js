export default ({ children }) => (
    <div className="wrap">
      <b>💡 Idea</b>
      <div className="content">{ children }</div>
      <style jsx>{`

        b {
          // margin-top: 25px;
          margin-bottom: 15px;
        }

        .wrap {
          display: flex;
          flex-direction: column;
          margin-bottom: 25px;
          padding: 10px;
          background: #ffffe6;
          line-height: 20px;
        }
  
        .content {          
          // margin-top: 25px;
          margin-bottom: 0px;
          display: inline;
          font-style: oblique;
        }
      `}</style>
    </div>
  )
  