import FormPackage from "@/components/Forms/FormPackage";
import BackEndLayout from "@/components/layouts/BackEndLayout";

export default function Packages() {
    return(<BackEndLayout>
        <div className="packages">
            <FormPackage />
        </div>
    </BackEndLayout>)
}