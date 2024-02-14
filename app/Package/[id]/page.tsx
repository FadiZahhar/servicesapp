import Single from "@/components/single/Single";
import "./package.scss";
import { singleProduct } from "@/lib/data";
import BackEndLayout from "@/components/layouts/BackEndLayout";
const Package = () => {

return(
    <BackEndLayout>
    <div className="user">
        <Single {...singleProduct} />
    </div>
    </BackEndLayout>
)

}

export default Package;