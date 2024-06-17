import { useEffect, useState } from "react";
import AccountOverview from "./AccountOverview";
import EditProfile from "./EditProfile";
import { supabase } from "../../../../utils/supabaseClient";

interface UserProps {
  created_at: string;
  email: string;
  id: number;
  name: string;
  userId: string;
  phone: string;
}
const Profile = () => {
  const [editStatus, setEditStatus] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserProps[]>([])

  const id = localStorage.getItem("id")

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("users").select("*").eq("userId", id);

      if (error) {
        console.log(error);
        return [];
      }

      setUserData(data as UserProps[]);
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
