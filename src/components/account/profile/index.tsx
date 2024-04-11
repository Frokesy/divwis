import { useState } from "react";
import AccountOverview from "./AccountOverview";
import EditProfile from "./EditProfile";

const Profile = () => {
  const [editStatus, setEditStatus] = useState<boolean>(false);
  return (
    <div>
      {editStatus ? (
        <EditProfile editStatus={editStatus} setEditStatus={setEditStatus} />
      ) : (
        <AccountOverview editStatus={editStatus} setEditStatus={setEditStatus} />
      )}
    </div>
  );
};

export default Profile;
