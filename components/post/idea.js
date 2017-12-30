export default ({ children }) => (
    <div className="wrap">
      <b>💡 Idea</b>
      {' '}
      <div className="content">{ children }</div>
      <style jsx>{`

        .b {
          // margin-top: 25px;
          // margin-bottom: 100px;
        }

        .wrap {
          margin-bottom: 25px;
          padding: 10px;
          background: #ffffe6;
          line-height: 20px;
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
  