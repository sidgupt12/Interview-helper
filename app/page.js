import { Button } from "@/components/ui/button";
import { UserButton } from "@stackframe/stack";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello from Siddhant</h1>
      <Button variant={'destructive'}>Hielp me</Button>
      <UserButton/>
    </div>
  );
}
