"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
} from "lucide-react";

const accounts = [
  {
    role: "Admin",
    email: "admin@transport.com",
    password: "tasnim",
    description:
      "Manage delivery requests, drivers, vehicles, assignments, and shipment tracking.",
  },
  {
    role: "Driver",
    email: "driver@transport.com",
    password: "tasnim",
    description:
      "Explore the driver dashboard, assigned deliveries, and shipment progress.",
  },
  {
    role: "Customer",
    email: "client@transport.com",
    password: "tasnim",
    description:
      "Explore the customer dashboard and delivery information.",
  },
] as const;

type Role = (typeof accounts)[number]["role"];

export default function TransportDemo() {
  const [selectedRole, setSelectedRole] =
    useState<Role>("Admin");

  const [copied, setCopied] = useState<string | null>(
    null
  );

  const account =
    accounts.find((item) => item.role === selectedRole) ??
    accounts[0];

  async function copyText(value: string, field: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(field);
    } catch {
      setCopied(null);
    }
  }

  return (
    <section className="mt-20 border-t border-white/10 pt-12">
      {/* Header */}
      <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
        02 / Live demonstration
      </p>

      <h2 className="text-2xl font-medium md:text-3xl">
        Explore the application yourself
      </h2>

      <p className="mt-6 max-w-3xl leading-8 text-white/50">
        The application is available online. Select a
        demonstration role, copy its credentials, and explore
        the corresponding dashboard.
      </p>

      {/* Demo card */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
        {/* Role selection */}
        <div className="border-b border-white/10 p-5 md:p-7">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/30">
            Select a role
          </p>

          <div className="grid grid-cols-3 gap-2">
            {accounts.map((item) => (
              <button
                key={item.role}
                type="button"
                onClick={() => {
                  setSelectedRole(item.role);
                  setCopied(null);
                }}
                aria-pressed={selectedRole === item.role}
                className={`rounded-xl border px-3 py-3 text-sm transition-all duration-300 ${
                  selectedRole === item.role
                    ? "border-white bg-white text-black"
                    : "border-white/10 text-white/40 hover:border-white/30 hover:text-white"
                }`}
              >
                {item.role}
              </button>
            ))}
          </div>
        </div>

        {/* Credentials */}
        <div className="p-5 md:p-7">
          <h3 className="text-xl font-medium">
            {account.role} Dashboard
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/40">
            {account.description}
          </p>

          <div className="mt-8 space-y-4">
            {/* Email */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="mb-3 text-xs text-white/30">
                Demo email
              </p>

              <div className="flex items-center justify-between gap-3">
                <span className="min-w-0 break-all font-mono text-sm text-white/80">
                  {account.email}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    copyText(account.email, "email")
                  }
                  aria-label="Copy demo email"
                  className="shrink-0 rounded-lg border border-white/10 p-2 text-white/50 transition-colors hover:text-white"
                >
                  {copied === "email" ? (
                    <Check size={16} />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            </div>

            {/* Password */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="mb-3 text-xs text-white/30">
                Demo password
              </p>

              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm text-white/80">
                  {account.password}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    copyText(account.password, "password")
                  }
                  aria-label="Copy demo password"
                  className="shrink-0 rounded-lg border border-white/10 p-2 text-white/50 transition-colors hover:text-white"
                >
                  {copied === "password" ? (
                    <Check size={16} />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Live link */}
          <a
            href="https://transport-company-manage-d6a13.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-medium text-black transition-all hover:bg-white/85 sm:w-auto"
          >
            Launch live application
            <ArrowUpRight size={17} />
          </a>

          <p className="mt-5 text-xs leading-6 text-white/30">
            Demonstration accounts use fictional data and
            are intended for portfolio evaluation.
          </p>
        </div>
      </div>

      {/* Source code */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="https://github.com/Taslby/transport_company_system"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
        >
          View source code
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}