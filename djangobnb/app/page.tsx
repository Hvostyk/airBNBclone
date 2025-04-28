import Image from "next/image";
import Categories from "./components/Categories";
import PropertyList from "./components/properties/PropertyList";
export default function Home() {
  return (
    <div className="navbar-container w-full px-6">
      <Categories/>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <PropertyList/>
      </div>
    </div>
  );
}
