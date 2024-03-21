"use client";

import PractitionerAppointment from "@/components/practitioners/PractitionerAppointment";
import { useAuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { isLoggedIn } = useAuthContext();

  const { push } = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      push("/auth/practitioner/sign-in");
    }
  }, [isLoggedIn]);

  // if (!isLoggedIn) {

  //   push("/auth/practitioner/sign-in");
  //   return null;
  // }
  return <PractitionerAppointment />;
}
