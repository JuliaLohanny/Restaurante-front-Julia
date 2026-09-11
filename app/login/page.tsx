"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Swal from "sweetalert2"

export default function Login() {

    const router = useRouter()

    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    function entrar() {
        if (usuario === "admin" && senha === "123456") {
            localStorage.setItem("admin_logado", "true")

            router.push("/admin")
            return
        }

        Swal.fire({
            title: "Login inválido",
            text: "Usuário ou senha incorretos",
            icon: "error",
            confirmButtonText: "Tentar novamente"
        })
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

                <h1 className="mb-8 text-center text-gray-500">
                    Área administrativa
                </h1>

                <p className="mb-8 text-center text-gray-500">
                    Faça login para acessar o painel
                </p>

                <div>
                    <label>Usuário</label>

                    <input
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        placeholder="Digite seu usuário"
                        className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mt-4">
                    <label>Senha</label>

                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="Digite sua senha"
                        className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    onClick={entrar}
                    className="mt-6 w-full cursor-pointer rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-800"
                >
                    Entrar
                </button>

            </div>
        </main>
    )
}
