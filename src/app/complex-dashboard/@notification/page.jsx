import Card from "@/app/Ui/Card";
import Link from "next/link";
import React from "react";

const Notification = () => {
  return (
    <Card>
      Notification <Link className='text-blue-500'  href="/complex-dashboard/archived"> Archievd</Link>{" "}
    </Card>
  );
};

export default Notification;
