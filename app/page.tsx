"use client"

import { useState, useEffect } from "react";
import { SignOutButton } from "@/auth";
import PasswordCheckModal from "@/auth/components/PasswordCheckModal";
import {signInWithCredentials} from "@/auth/actions/index"; // Import the new validation function

const HomePage = () => {


  return (
    <main>
      <p>Vous êtes connectés.</p>
      <PasswordCheckModal></PasswordCheckModal>
      <SignOutButton />
    </main>
  );
};

export default HomePage;
