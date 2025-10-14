"use client";
import { logout } from "@/components/api/useSession";
import { useRouter } from "next/navigation";

export default function LogoutButton({ className = "", children = "Cerrar Sesión" }) {
  const router = useRouter();

  const handleLogout = () => {
    // Confirmar antes de cerrar sesión
    if (window.confirm("¿Estás seguro de que quieres cerrar sesión?")) {
      logout();
      router.push('/');
    }
  };

  return (
    <button 
      onClick={handleLogout}
      className={`btn btn-outline-danger ${className}`}
      type="button"
    >
      {children}
    </button>
  );
}
