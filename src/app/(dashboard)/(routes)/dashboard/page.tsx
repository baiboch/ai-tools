import {UserButton} from "@clerk/nextjs";

const DashboardPage = () => {
    return (
        <div>
            <UserButton afterSignOutUrl={"/"}/>
            <p>Dashboard</p>
        </div>
    )
}
export default DashboardPage;
