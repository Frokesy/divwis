import { useEffect, useState } from "react";
import AccountOverview from "./AccountOverview";
import EditProfile from "./EditProfile";
import { pb } from "../../../../utils/pocketbaseClient";

export interface UserProps {
  created: string;
  email: string;
  id: string;
  name: string;
  phone: string;
}
const Profile = () => {
  const [editStatus, setEditStatus] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserProps | null>(null)

  const id = localStorage.getItem("id")

  useEffect(() => {
    const fetchData = async () => {
      const record = await pb.collection('users').getOne(id as string, {
        expand: 'relField1,relField2.subRelField',
      });
      setUserData(record as unknown as UserProps)
    }

    fetchData()
  }, [id])

  return (
    <div>
      {editStatus ? (
        <EditProfile editStatus={editStatus} setEditStatus={setEditStatus} userData={userData} />
      ) : (
        <AccountOverview editStatus={editStatus} setEditStatus={setEditStatus} userData={userData} />
      )}
    </div>
  );
};

export default Profile;
