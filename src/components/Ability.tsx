import { useParams } from "react-router-dom";

export default function Ability({displayName}:{name?:string}) {
  const { name } = useParams();
  return <div>{name || displayName}</div>;
}
