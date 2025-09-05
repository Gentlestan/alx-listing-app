import React from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to ALX Listing App</h1>
      <Card title="Sample Property" description="This is a placeholder listing." />
      <div className="mt-4">
        <Button label="Book Now" onClick={() => alert("Booking...")} />
      </div>
    </div>
  );
}
