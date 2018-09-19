import format from 'comma-number'
import React from 'react'

export default class Meta extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      highlight: false
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.views !== nextProps.views) {
      if (this.raf) return
      if (this.state.highlight) {
        // reset the animation
        this.setState({ highlight: false }, () => {
          this.raf = requestAnimationFrame(() => {
            this.raf = null
            this.setState({ highlight: true })
          })
        })
      } else {
        this.setState({ highlight: true })
      }
    }
  }

  render () {
    const { date, views } = this.props
    const { highlight } = this.state
    return (
      <div>
        { date } – {' '}
        {
          <span className={ highlight && 'highlight' }>
            { format(views) } views
          </span>
        }
        <style jsx>{`
          div {
            margin-bottom: 40px;
            color: #777;
          }

          .highlight {
            animation-name: highlight;
            animation-duration: 2s;
            animation-fill-mode: forwards;
          }

          @keyframes highlight {
            0% {
              background-color: yellow;
            }
            50% {
              background-color: #fff;
            }
            100% {
              background-color: yellow;
            }
          }
        `}</style>
      </div>
    )
  }
}
