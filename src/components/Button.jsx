
const Button=({text,className,onClick})=>{
return(
  <button className={`${className}`} onClick={onClick}>
<h1>{text}</h1>
  </button>
)
}
export default Button;