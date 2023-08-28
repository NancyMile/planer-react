const message = ({ children, type }) => {
  return (
      <div className={`alerta ${type}`}>
          {children}
      </div>
  )
}

export default message