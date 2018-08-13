import React from 'react'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: '1rem',
        }}
      >
        <p>
          Written by <strong>The Chosen Stance Team</strong>.
        </p>
      </div>
    )
  }
}

export default Bio