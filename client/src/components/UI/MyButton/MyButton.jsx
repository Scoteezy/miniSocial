import classes from './MyButton.module.css'
const MyButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.mybutton}>
        {children}
    </button>
  )
}

export default MyButton
