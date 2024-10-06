import { motion } from "framer-motion";
import React, { FC, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Input from "../../defaults/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../defaults/Loader";
import { UserProps } from ".";
import { pb } from "../../../../utils/pocketbaseClient";

interface ProfileProps {
  editStatus: boolean;
  setEditStatus: React.Dispatch<React.SetStateAction<boolean>>;
  userData: UserProps | null;
}

const EditProfile: FC<ProfileProps> = ({
  editStatus,
  setEditStatus,
  userData,
}) => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    emailAddress: "",
    oldPassword: "",
    newPassword: "",
    retypePassword: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleProfileUpdate = async () => {
    setLoading(true);

    const updatedProfile = {
      name:
        userDetails.firstName === "" && userDetails.lastName === ""
          ? userData?.name
          : `${userDetails.firstName} ${userDetails.lastName}`,
      email:
        userDetails.emailAddress === ""
          ? userData?.email
          : userDetails.emailAddress,
      phone:
        userDetails.mobileNumber === ""
          ? userData?.phone
          : userDetails.mobileNumber,
      updated: new Date().toISOString(),
    };

    if (
      userDetails.firstName === "" &&
      userDetails.lastName === "" &&
      userDetails.emailAddress === "" &&
      userDetails.mobileNumber === ""
    ) {
      return;
    } else {
      try {
        const updatedRecord = await pb
          .collection("users")
          .update(userData?.id as unknown as string, {
            name: updatedProfile.name,
            email: updatedProfile.email,
            phone: updatedProfile.phone,
            updated: updatedProfile.updated,
          });

        setLoading(false);
        toast.success("Profile Updated!", {
          position: "top-center",
          theme: "light",
          autoClose: 1500,
          hideProgressBar: true,
          draggable: true,
        });

        setTimeout(() => {
          window.location.reload();
        }, 2500);

        return updatedRecord;
      } catch (error) {
        console.error(error);
        setLoading(false);
        return [];
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <ToastContainer />
      <div className="">
        <div className="flex lg:block space-x-3">
          <button
            className="block lg:hidden"
            onClick={() => setEditStatus(!editStatus)}
          >
            <FaArrowLeft />
          </button>
          <h2 className="lg:text-[26px] text-[20px] font-bold font-mono lg:text-[#808080] lg:pb-6">
            Update Profile
          </h2>

          <button
            className="hidden lg:block"
            onClick={() => setEditStatus(!editStatus)}
          >
            <FaArrowLeft />
          </button>
        </div>

        <div className="lg:w-[70%] w-[100%]">
          <div className="flex justify-between space-x-10">
            <Input
              type="text"
              label="First Name"
              fullBorder
              value={userDetails.firstName}
              onChange={(e) =>
                setUserDetails({ ...userDetails, firstName: e.target.value })
              }
            />
            <Input
              type="text"
              label="Last Name"
              fullBorder
              value={userDetails.lastName}
              onChange={(e) =>
                setUserDetails({ ...userDetails, lastName: e.target.value })
              }
            />
          </div>
          <div className="flex justify-between space-x-10 mt-3">
            <Input
              type="number"
              label="Mobile Number"
              fullBorder
              value={userDetails.mobileNumber}
              onChange={(e) =>
                setUserDetails({ ...userDetails, mobileNumber: e.target.value })
              }
            />
            <Input
              type="text"
              label="Email Address"
              fullBorder
              value={userDetails.emailAddress}
              onChange={(e) =>
                setUserDetails({ ...userDetails, emailAddress: e.target.value })
              }
            />
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleProfileUpdate}
              className="bg-[#6eb356] mt-6 hover:bg-[#fa961e] transition-colors duration-500 ease-in-out text-[#fff] h-[40px] w-[160px] flex items-center justify-center font-semibold rounded-lg"
            >
              {loading ? <Loader /> : "Update Profile"}
            </button>
          </div>
        </div>

        <div className="lg:w-[70%] w-[100%]">
          <h2 className="lg:text-[26px] text-[20px] font-bold font-mono lg:text-[#808080] pt-16 mb-6 lg:mb-0">
            Change Password
          </h2>
          <div className="flex justify-between space-x-10">
            <Input type="text" label="Email Address" fullBorder />
            <Input type="password" label="Old Password" fullBorder />
          </div>
          <div className="flex justify-between space-x-10 mt-3">
            <Input type="password" label="New Password" fullBorder />
            <Input type="password" label="Re-type Password" fullBorder />
          </div>

          <div className="flex justify-end">
            <button className="bg-[#6eb356] mt-6 hover:bg-[#fa961e] transition-colors duration-500 ease-in-out text-[#fff] py-2 px-6 font-semibold rounded-lg">
              Update Password
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EditProfile;
