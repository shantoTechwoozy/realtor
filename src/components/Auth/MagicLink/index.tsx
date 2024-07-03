"use client";
import { useState } from "react";
import Loader from "@/components/Common/Loader";

const MagicLink = () => {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);

  
 

  return (
    <form>
      <div className="mb-[22px]">
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
          className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-dark-6 focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white dark:focus:border-primary"
        />
      </div>
      <div className="mb-9">
        <button
          type="submit"
          className="flex w-full cursor-pointer items-center justify-center rounded-md border border-primary bg-primary px-5 py-3 text-base text-white transition duration-300 ease-in-out hover:bg-blue-dark"
        >
          Send Magic Link {loader && <Loader />}
        </button>
      </div>
    </form>
  );
};

export default MagicLink;
