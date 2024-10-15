import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit } from "lucide-react";

const DashboardDetail = ({ user }) => {
  return (
    <div className="grid w-full grid-cols-1 gap-10 md:gap-0 md:px-16 md:grid-cols-4">
      <div className="w-full h-auto bg-red-500 md:col-span-3">
        <h2 className="my-10 text-2xl font-bold md:text-4xl">{user.name}</h2>{" "}
        <Tabs defaultValue="home">
          <TabsList>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="max-w-xl p-6 mt-12 rounded-lg bg-zinc-900">
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
      <div className="w-full pl-8 bg-blue-600 border rounded-lg md:border-0 md:border-l border-zinc-800">
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
