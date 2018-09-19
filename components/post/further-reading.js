export default ({ children, title }) => (
    <div className="wrap">
      <b>{title ? title : "Further Reading"}</b>
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
          padding: 15px;
          border-style: solid;
          border-width: 4px;
          border-color yellow;
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
  