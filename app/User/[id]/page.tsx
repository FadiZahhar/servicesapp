import Single from "@/components/single/Single";
import "./user.scss";
import { singleUser } from "@/lib/data";
import BackEndLayout from "@/components/layouts/BackEndLayout";
const User = () => {

return(
    <BackEndLayout>
    <div className="user">
        <Single {...singleUser} />
    </div>
    </BackEndLayout>
)

}

  

export default User;