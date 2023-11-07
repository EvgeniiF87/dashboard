import { NotificationProps } from "./types"
import "./Notification.css"

const Notification = ({Icon, color="red", number}: NotificationProps) => {

  return (
    <div className="box">
      <Icon/>
      <span style={{backgroundColor: color}} className={`number ${color}`}>{number}</span>
    </div>
  )
}

export default Notification