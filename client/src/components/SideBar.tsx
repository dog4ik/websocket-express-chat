import { FaRedo } from "react-icons/fa";
import { Link } from "react-router-dom";
import { selectClients, setClients, useClientsQuery } from "../store";
type ChatProps = {
  name: string;
};
const Chat = ({ name }: ChatProps) => {
  return (
    <Link
      to={`/chats/${name}`}
      className="w-full h-20 flex justify-between px-5 items-center hover:bg-neutral-700 transition-colors duration-200 cursor-pointer"
    >
      <span>{name}</span>
    </Link>
  );
};
const SideBar = () => {
  const clientQuery = useClientsQuery(undefined);
  if (!clientQuery.data) return null;
  return (
    <div className="h-screen overflow-y-auto w-80 bg-neutral-800">
      <div className="h-20 bg-neutral-900 px-5 gap-5 flex items-center">
        <span className="text-3xl">Chats</span>
        <div
          className=" cursor-pointer p-2"
          onClick={() => clientQuery.refetch()}
        >
          <FaRedo size={20} />
        </div>
      </div>
      <div className="flex flex-col divide-y divide-neutral-700">
        {clientQuery.data?.clients.map((client) => (
          <Chat name={client} key={client} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
