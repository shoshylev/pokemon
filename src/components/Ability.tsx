import { useParams } from "react-router-dom";

export default function Ability({displayName}:{displayName?:string}) {
  const { name } = useParams();
  return <div>{name || displayName}</div>;
}
