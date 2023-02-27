import React from 'react'

function MyComponent() {
  const [instance, setInstance] = React.useState(null)

  React.useEffect(() => {
    if (!instance) {
      setInstance(new MySingleton())
    }
  }, [instance])

  return <div>{instance ? instance.message : 'Loading...'}</div>
}

function MySingleton() {
  if (MySingleton.instance) {
    return MySingleton.instance
  }

  this.message = 'Hello, Singleton!'
  MySingleton.instance = this

  return this
}

export default MyComponent
