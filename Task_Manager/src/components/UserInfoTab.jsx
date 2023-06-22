/* eslint react/prop-types: 0 */
import { UserIcon } from "../assets/icons"

const UserInfo = () => {
    return (
        <div className='row4 text-center user-info'>
            <div className="col-2 user-icon" >
                <UserIcon />
            </div>
            <div className="col-10">
                User Name - Position
            </div>
        </div>
    )
}

export default UserInfo