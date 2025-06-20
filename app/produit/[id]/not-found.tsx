import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold">Produit non trouvé</h2>
      <p className="text-gray-500">
        Le produit que vous cherchez n'existe pas.
      </p>
      <Link href="/">Retour à la page d'accueil</Link>
    </div>
  );
}
