import { Button } from "@/components/ui/button";
import img from "../../public/boy-pic.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";

const bookData = [
  {
    id: 1,
    label: "18 MB একজন মুসলমানের জীবনে ২৪ ঘণ্টা",
    mb: "18MB",
    link: "/",
  },
  {
    id: 1,
    label: "18 MB একজন মুসলমানের জীবনে ২৪ ঘণ্টা",
    mb: "18MB",
    link: "/",
  },
];

const linkData = [
  {
    id: 1,
    label: "Book",
    href: "/",
  },
  {
    id: 2,
    label: "Courses",
    href: img,
  },
];

const Dashboard = () => {
  return (
    <>
      <section className="flex ">
        <div className="border-r bg-gray-100 h-screen w-1/5">
          {linkData.map((data) => (
            <div key={data.id} className="bg-green-200 ">
              <Link
                className="w-full block hover:bg-slate-500 px-6 py-3"
                href={data.href}
              >
                {data.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="container mx-auto">
          <div className="flex gap-4 mt-8">
            {bookData.map((data) => (
              <div key={data.id}>
                <Card>
                  <CardHeader>
                    <Image
                      className="w-[100%] h-[15rem] object-cover rounded-lg"
                      src={img}
                      alt="img"
                    />
                    <CardTitle>{data.label}</CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent>{/* <p>{data.mb}</p> */}</CardContent>
                  <CardFooter>
                    <a download href="logo.svg" className="block w-full">
                      <Button className="w-full">Dwonload now</Button>
                    </a>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Dashboard;
