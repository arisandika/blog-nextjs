import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit } from "lucide-react";

const DashboardDetail = ({ user }) => {
  return (
    <div className="grid w-full min-h-screen md:px-16 md:grid-cols-4">
      <div className="w-full col-span-3">
        <h2 className="my-10 text-4xl font-bold">{user.name}</h2>{" "}
        {/* Tampilkan nama user */}
        <Tabs defaultValue="home">
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="max-w-xl p-6 mt-12 rounded-lg bg-zinc-950">
          <div className="flex items-center mb-4 space-x-2">
            <div className="flex items-center justify-center w-8 h-8 text-white bg-green-700 rounded-full">
              {user.name.charAt(0)}
            </div>
            <span className="font-medium">{user.name}</span>
          </div>
          <h3 className="mb-4 text-xl font-bold">Reading list</h3>
          <p className="text-xs text-muted-foreground">No stories</p>
        </div>
      </div>
      <div className="w-full pl-8 border-l border-zinc-800">
        <div className="mt-10">
          <div className="flex items-center justify-center w-16 h-16 mb-5 text-xl text-white bg-green-700 rounded-full">
            {user.name.charAt(0)}
          </div>
          <h4 className="mb-2 font-medium">{user.name}</h4>
          <p className="text-sm text-muted-foreground">{user.email}</p>
          <Button variant="icon" className="justify-start p-0 mt-2">
            <Edit className="w-4 h-4 mr-2" />
            Edit profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardDetail;
