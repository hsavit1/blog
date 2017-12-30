export default ({ children }) => (
    <div className="wrap">
      <b>The Big Question</b>
      {' '}
      <div className="content">{ children }</div>
      <style jsx>{`

        .b {
          // margin-top: 25px;
          // margin-bottom: 100px;
        }

        .wrap {
          margin-bottom: 25px;
          padding: 15px;
          background: #e6f2ff;
          line-height: 20px;
        }
  
        .content {          
          // margin-top: 25px;
          // margin-bottom: 100px;
          display: inline;
          // font-style: oblique;
        }
      `}</style>
    </div>
  )
  