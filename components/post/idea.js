export default ({ children }) => (
    <div className="wrap">
      <b>💡 Idea</b>
      <div className="content">{ children }</div>
      <style jsx>{`

        b {
          // margin-top: 25px;
          margin-bottom: 15px;
          font-size: 18px;
        }

        .wrap {
          display: flex;
          flex-direction: column;
          margin-bottom: 25px;
          padding: 10px;
          background: #ffffe6;
          line-height: 24px;
        }
  
        .content {          
          // margin-top: 25px;
          margin-bottom: 0px;
          display: inline;
          font-style: oblique;
          font-size: 16px;
        }
      `}</style>
    </div>
  )
  