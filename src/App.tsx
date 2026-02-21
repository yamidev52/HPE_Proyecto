import React from "react";

type AccountItem = {
  id: string;
  name: string;
  code: string;
  industry: string;
  location: string;
  reason: { level: "critico" | "alto" | "medio" | "bajo"; text: string };
  score: number;
  logo: React.ReactNode;
};

const accounts: AccountItem[] = [
  {
    id: "1",
    name: "Healthcare",
    code: "MX-23244",
    industry: "SALUD",
    location: "MONTERREY, MÉXICO",
    reason: { level: "critico", text: "Crítico: Alerta de Fin de Vida (EOSL) en Servidores Gen9" },
    score: 99,
    logo: (
      <div className="h-10 w-10 rounded-xl bg-emerald-50 grid place-items-center border border-emerald-100">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-emerald-600">
          <path
            d="M10 3h4a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v4h-2V11H4v10h8v2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2V5a2 2 0 0 1 2-2Zm2 2h-2v2h2V5Zm8 10h4v2h-4v4h-2v-4h-4v-2h4v-4h2v4Z"
            fill="currentColor"
          />
        </svg>
      </div>
    ),
  },
  {
    id: "2",
    name: "Banorte",
    code: "MX-23123",
    industry: "FINANZAS",
    location: "GUADALAJARA, MÉXICO",
    reason: { level: "alto", text: "Alta propensión de renovación de Almacenamiento (Q3)" },
    score: 98,
    logo: (
      <div className="h-10 w-10 rounded-xl bg-red-50 grid place-items-center border border-red-100">
        <div className="h-6 w-6 rounded-md bg-red-600" />
      </div>
    ),
  },
  {
    id: "3",
    name: "Lenovo",
    code: "MX-34234",
    industry: "TECNOLOGÍA",
    location: "TOLUCA, MÉXICO",
    reason: { level: "alto", text: "Expansión de GreenLake Cloud detectada: Nuevos nodos" },
    score: 97,
    logo: (
      <div className="h-10 w-10 rounded-xl bg-red-50 grid place-items-center border border-red-100">
        <div className="px-2 py-1 rounded bg-red-600 text-white text-[10px] font-bold">Lenovo</div>
      </div>
    ),
  },
  {
    id: "4",
    name: "Aeromexico",
    code: "MX-20455",
    industry: "TRANSPORTE",
    location: "CDMX, MÉXICO",
    reason: { level: "medio", text: "Visita recurrente a documentación técnica de Alletra MP" },
    score: 94,
    logo: (
      <div className="h-10 w-10 rounded-xl bg-indigo-50 grid place-items-center border border-indigo-100">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-indigo-700">
          <path d="M3 19V5h8l2 2h8v12H3Zm2-2h14V9h-6.17L10.83 7H5v10Z" fill="currentColor" />
        </svg>
      </div>
    ),
  },
  {
    id: "5",
    name: "Liverpool",
    code: "MX-21424",
    industry: "RETAIL",
    location: "SANTA FÉ, MÉXICO",
    reason: { level: "bajo", text: "Crecimiento de datos inesperado detectado (+35% YoY)" },
    score: 93,
    logo: (
      <div className="h-10 w-10 rounded-xl bg-fuchsia-50 grid place-items-center border border-fuchsia-100">
        <div className="h-6 w-6 rounded-md border-2 border-fuchsia-600" />
      </div>
    ),
  },
];

function reasonColor(level: AccountItem["reason"]["level"]) {
  if (level === "critico") return { bar: "bg-red-600", text: "text-red-600", dot: "bg-red-500" };
  if (level === "alto") return { bar: "bg-amber-500", text: "text-amber-600", dot: "bg-amber-500" };
  if (level === "medio") return { bar: "bg-emerald-600", text: "text-emerald-700", dot: "bg-emerald-600" };
  return { bar: "bg-zinc-400", text: "text-zinc-700", dot: "bg-zinc-400" };
}

export default function DashboardFixed() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* TOPBAR */}
      <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-4 px-4 lg:px-6">
          {/* brand */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-black tracking-tight">HPE</div>
              <div className="h-8 w-px bg-zinc-200" />
            </div>
            <div className="hidden text-lg font-semibold sm:block">Account Intelligence</div>
          </div>

          {/* search */}
          <div className="ml-2 hidden flex-1 items-center lg:flex">
            <div className="relative w-full max-w-xl">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M10.5 3a7.5 7.5 0 1 0 4.7 13.3l3.5 3.5 1.4-1.4-3.5-3.5A7.5 7.5 0 0 0 10.5 3Zm0 2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <input
                placeholder="Buscar..."
                className="h-11 w-full rounded-xl border border-zinc-200 bg-zinc-50 pl-10 pr-3 text-sm outline-none focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>

          {/* right actions */}
          <div className="ml-auto flex items-center gap-2">
            <IconButton title="Modo oscuro">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M21 15.5A8.5 8.5 0 0 1 8.5 3a7 7 0 1 0 12.5 12.5Z" fill="currentColor" />
              </svg>
            </IconButton>
            <IconButton title="Notificaciones">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22Zm7-6V11a7 7 0 0 0-5-6.7V3a2 2 0 1 0-4 0v1.3A7 7 0 0 0 5 11v5l-2 2v1h20v-1l-2-2Z"
                  fill="currentColor"
                />
              </svg>
            </IconButton>
            <IconButton title="Configuración">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19.14 12.94a7.7 7.7 0 0 0 .06-.94 7.7 7.7 0 0 0-.06-.94l2.03-1.58a.6.6 0 0 0 .14-.77l-1.92-3.32a.6.6 0 0 0-.73-.26l-2.39.96a7.8 7.8 0 0 0-1.63-.94l-.36-2.54A.6.6 0 0 0 13.7 1h-3.4a.6.6 0 0 0-.59.5l-.36 2.54c-.58.22-1.12.52-1.63.94l-2.39-.96a.6.6 0 0 0-.73.26L1.68 7.7a.6.6 0 0 0 .14.77l2.03 1.58c-.04.31-.06.62-.06.94s.02.63.06.94L1.82 14.52a.6.6 0 0 0-.14.77l1.92 3.32c.16.28.5.39.8.26l2.39-.96c.5.41 1.05.72 1.63.94l.36 2.54c.05.29.3.5.59.5h3.4c.29 0 .54-.21.59-.5l.36-2.54c.58-.22 1.12-.52 1.63-.94l2.39.96c.3.12.64.02.8-.26l1.92-3.32a.6.6 0 0 0-.14-.77l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5Z"
                  fill="currentColor"
                />
              </svg>
            </IconButton>

            <div className="ml-2 hidden h-9 w-px bg-zinc-200 sm:block" />

            <div className="hidden items-center gap-2 sm:flex">
              <div className="h-9 w-9 overflow-hidden rounded-full bg-zinc-200" />
            </div>
          </div>
        </div>
      </header>

      {/* BODY: sidebar + content */}
      <div className="mx-auto flex max-w-[1400px]">
        {/* SIDEBAR (solo desktop) */}
        <aside className="hidden w-68 shrink-0 border-r border-zinc-200 bg-white lg:block">
          <div className="p-5"> 
            <div className="text-xs font-semibold text-zinc-500">DASHBOARD</div>

            <nav className="mt-3 space-y-1">
              <SideItem active label="Análisis Diario" icon={<GridIcon />} />
              <SideItem label="Cuentas" icon={<TableIcon />} />
              <SideItem label="Perfil de Cuenta 360°" icon={<Circle360Icon />} />
              <SideItem label="Recomendaciones" icon={<BulbIcon />} />
              <SideItem label="Historial del Análisis" icon={<ClockIcon />} />
            </nav>

            <div className="mt-10 text-xs font-semibold text-zinc-500">CONFIGURACIONES</div>
            <nav className="mt-3 space-y-1">
              <SideItem label="Configuración" icon={<GearIcon />} />
              <SideItem label="Mi Perfil" icon={<UserIcon />} />
            </nav>
          </div>
        </aside>

        {/* MAIN */}
        <main className="min-w-0 flex-1">
          <div className="px-4 py-8 lg:px-8">
            {/* Title */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Buenos días, Alex.</h1>
                <p className="mt-2 text-sm text-zinc-600">
                  Aquí tienes tu hoja de ruta estratégica para hoy, 28 de febrero del 2026.
                </p>
              </div>

              <button className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 active:translate-y-px">
                ✨ Nuevo análisis
              </button>
            </div>

            {/* KPIs */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <KpiCard
                iconBg="bg-emerald-50 border-emerald-100"
                icon={<DocCheckIcon className="text-emerald-600" />}
                value="5"
                label="CUENTAS PRIORIZADAS"
              />
              <KpiCard
                iconBg="bg-violet-50 border-violet-100"
                icon={<BoltIcon className="text-violet-600" />}
                value="12"
                label="OPORTUNIDADES DETECTADAS"
              />
              <KpiCard
                iconBg="bg-sky-50 border-sky-100"
                icon={<CalendarIcon className="text-sky-600" />}
                value="7"
                label="ANÁLISIS ESTA SEMANA"
              />
            </div>

            {/* Section header */}
            <div className="mt-10 flex items-end justify-between gap-4">
              <h2 className="text-xl font-semibold">Cuentas para contactar hoy</h2>
              <a className="text-sm font-semibold text-emerald-700 hover:underline" href="#">
                VER TODAS LAS CUENTAS →
              </a>
            </div>

            {/* Rows */}
            <div className="mt-4 space-y-3">
              {accounts.map((a) => {
                const c = reasonColor(a.reason.level);

                return (
                  <div key={a.id} className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                    <div className={`absolute left-0 top-0 h-full w-1.5 ${c.bar}`} />

                    <div className="grid gap-4 p-4 lg:grid-cols-[420px_1fr_180px] lg:items-center lg:gap-6 lg:p-5">
                      {/* left */}
                      <div className="flex min-w-0 items-center gap-4">
                        {a.logo}
                        <div className="min-w-0">
                          <div className="truncate text-lg font-semibold">{a.name}</div>
                          <div className="text-xs text-zinc-500">ID: #{a.code}</div>

                          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-500">
                            <span className="inline-flex items-center gap-1.5">
                              <BuildingIcon />
                              {a.industry}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <PinIcon />
                              {a.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* reason */}
                      <div className="min-w-0">
                        <div className="text-[11px] font-semibold tracking-wide text-zinc-400">MOTIVO DE PRIORIZACIÓN</div>
                        <div className="mt-1 flex items-start gap-2 text-sm font-semibold">
                          <span className={`mt-1 inline-block h-2.5 w-2.5 rounded-full ${c.dot}`} />
                          <span className={`break-words ${c.text}`}>{a.reason.text}</span>
                        </div>
                      </div>

                      {/* score */}
                      <div className="flex items-center justify-between gap-4 lg:justify-end">
                        <div className="text-right">
                          <div className="text-[11px] font-semibold tracking-wide text-zinc-400">SCORE</div>
                          <div className="text-3xl font-semibold text-emerald-700">{a.score}</div>
                        </div>
                        <button className="h-10 rounded-xl bg-emerald-600 px-4 text-sm font-semibold text-white hover:bg-emerald-700 active:translate-y-px">
                          Ver detalles
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="h-10" />
          </div>
        </main>
      </div>
    </div>
  );
}

/* ---- UI helpers ---- */

function IconButton({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <button
      title={title}
      className="grid h-10 w-10 place-items-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 active:translate-y-px"
    >
      {children}
    </button>
  );
}

function SideItem({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <a
      href="#"
      className={[
        "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium",
        active ? "bg-emerald-50 text-emerald-800" : "text-zinc-700 hover:bg-zinc-50",
      ].join(" ")}
    >
      <span
        className={[
          "grid h-8 w-8 place-items-center rounded-lg border",
          active ? "border-emerald-100 bg-white" : "border-zinc-200 bg-white",
        ].join(" ")}
      >
        {icon}
      </span>
      <span className="truncate">{label}</span>
    </a>
  );
}

function KpiCard({
  icon,
  iconBg,
  value,
  label,
}: {
  icon: React.ReactNode;
  iconBg: string;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div className={`h-12 w-12 rounded-2xl border grid place-items-center ${iconBg}`}>{icon}</div>
        <div className="min-w-0">
          <div className="text-4xl font-semibold leading-none">{value}</div>
          <div className="mt-1 text-xs font-semibold tracking-wide text-zinc-500">{label}</div>
        </div>
      </div>
    </div>
  );
}

/* ---- tiny icons ---- */
function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-emerald-700">
      <path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z" fill="currentColor" />
    </svg>
  );
}
function TableIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-zinc-700">
      <path
        d="M4 5h16a2 2 0 0 1 2 2v2H2V7a2 2 0 0 1 2-2Zm-2 6h20v6H2v-6Zm0 8h20v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1Z"
        fill="currentColor"
      />
    </svg>
  );
}
function Circle360Icon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-zinc-700">
      <path
        d="M12 2a10 10 0 1 0 9.95 11H19l3.5-3.5L26 13h-2.05A12 12 0 1 1 12 0v2Zm-4 8h3.5a2.5 2.5 0 1 1 0 5H9v-2h2.5a.5.5 0 1 0 0-1H8V10Zm10 5h-4v-5h4v2h-2v1h2v2Z"
        fill="currentColor"
      />
    </svg>
  );
}
function BulbIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-zinc-700">
      <path
        d="M9 21h6v-1H9v1Zm3-20a7 7 0 0 0-4 12.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-3.26A7 7 0 0 0 12 1Zm3 11.5-.5.35V17h-5v-4.15l-.5-.35A5 5 0 1 1 15 12.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-zinc-700">
      <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 5h-2v6l5 3 1-1.73-4-2.27V7Z" fill="currentColor" />
    </svg>
  );
}
function GearIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-zinc-700">
      <path
        d="M19.14 12.94c.04-.31.06-.62.06-.94s-.02-.63-.06-.94l2.03-1.58-.98-1.7-2.39.96c-.5-.41-1.05-.72-1.63-.94L13.8 3h-3.6L9.83 5.74c-.58.22-1.12.52-1.63.94l-2.39-.96-.98 1.7 2.03 1.58c-.04.31-.06.62-.06.94s.02.63.06.94L4.83 14.52l.98 1.7 2.39-.96c.5.41 1.05.72 1.63.94L10.2 21h3.6l.37-2.74c.58-.22 1.12-.52 1.63-.94l2.39.96.98-1.7-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-zinc-700">
      <path
        d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4.42 0-8 2-8 4.5V21h16v-2.5C20 16 16.42 14 12 14Z"
        fill="currentColor"
      />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-zinc-400">
      <path
        d="M3 21V3h12v18H3Zm14 0v-8h4v8h-4ZM6 6h2v2H6V6Zm0 4h2v2H6v-2Zm0 4h2v2H6v-2Zm4-8h2v2h-2V6Zm0 4h2v2h-2v-2Zm0 4h2v2h-2v-2Z"
        fill="currentColor"
      />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-zinc-400">
      <path
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
function DocCheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 2h7l5 5v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm7 1.5V8h4.5L14 3.5ZM9 14l1.8 1.8L15 11.6l1.4 1.4-5.6 5.6L7.6 15.4 9 14Z"
        fill="currentColor"
      />
    </svg>
  );
}
function BoltIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" fill="currentColor" />
    </svg>
  );
}
function CalendarIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 2h2v2h6V2h2v2h3a2 2 0 0 1 2 2v15a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2h3V2Zm14 8H3v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V10Z"
        fill="currentColor"
      />
    </svg>
  );
}
