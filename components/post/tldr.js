export default ({ children }) => (
  <div className="wrap">
    <b>tl;DR:</b>
    {' '}
    <div className="content">{ children }</div>
    <style jsx>{`

      b {
        font-size: 20px;
      }

      .wrap {
        margin-bottom: 25px;
        padding: 15px;
        background: #eee;
        line-height: 22px;
      }

      .content {
        display: inline;
        font-style: oblique;
        font-size: 16px;
      }
    `}</style>
  </div>
)
