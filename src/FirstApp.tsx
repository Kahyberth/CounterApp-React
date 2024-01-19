import PropTypes from 'prop-types'

export default function FirstApp({ title }: { title: string }) : JSX.Element {
  return (
    <><h1>{ title }</h1></>
  )
}


FirstApp.propTypes = {
  title : PropTypes.string.isRequired
}

