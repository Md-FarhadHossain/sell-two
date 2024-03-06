import { Button } from "@/components/ui/button";
import img from '../../public/boy-pic.jpg'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

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
              <Link className="w-full block hover:bg-slate-500 px-6 py-3" href={data.href}>{data.label}</Link>
            </div>
          ))}
        </div>

        <div className="container mx-auto">
          <div>
            <Table>
              {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Number</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>MB</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell> */}

                {bookData.map((data, index) => (
                  <TableRow key={data.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{data.label}</TableCell>
                    <TableCell className="font-semibold">{data.mb}</TableCell>
                    <TableCell className="text-right">
                      <a href="../../public/hellopdf" download ><Button>Download now</Button></a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
};
export default Dashboard;
