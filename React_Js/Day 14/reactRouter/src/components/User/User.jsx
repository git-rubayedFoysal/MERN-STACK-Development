import { useParams } from "react-router";

function User() {
  const { id } = useParams();
  return (
    <div className="bg-gray-600 text-white p-5 text-center text-3xl font-bold h-50">
      User : {id}
    </div>
  );
}

export default User;
