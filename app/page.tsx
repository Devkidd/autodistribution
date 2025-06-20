import { Autocomplete } from "./components/Autocomplete";

export default function HomePage() {
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold">Product Search Autocomplete</h1>
      {/* Your autocomplete component goes here */}
      <Autocomplete />
    </main>
  );
}
