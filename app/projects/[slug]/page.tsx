import TransportDemo from "@/components/projects/TransportDemo";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const financialCharts = [
  {
    title: "Historical Performance",
    description:
      "Cumulative returns of AAPL, MSFT, NVDA, and the weighted portfolio over the analyzed period.",
    image: "/projects/financial-market-analytics/performance.png",
  },
  {
    title: "Stock Return Correlations",
    description:
      "Correlation analysis of daily returns to explore how the selected stocks move in relation to one another.",
    image: "/projects/financial-market-analytics/correlation.png",
  },
  {
    title: "Risk and Return",
    description:
      "A comparison of annualized risk and return for the analyzed assets.",
    image: "/projects/financial-market-analytics/risk_return.png",
  },
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  const isFinancial =
    project.slug === "financial-market-analytics";

  return (
    <main className="min-h-screen bg-[#050505] px-6 pb-32 pt-32 text-white md:px-10">
      <div className="mx-auto max-w-5xl">
        {/* Back */}
        <Link
          href="/#work"
          className="mb-16 inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        {/* Header */}
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <span className="text-xs uppercase tracking-[0.25em] text-white/30">
            Project {project.number}
          </span>
          <span className="text-xs uppercase tracking-[0.25em] text-white/30">
            {project.category}
          </span>
        </div>

        <h1 className="max-w-4xl text-4xl font-medium tracking-tight md:text-6xl">
          {project.title}
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/50">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-105"
          >
            <ExternalLink size={17} />
            View on GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>

        {isFinancial ? (
          <>
            {/* Overview */}
            <section className="mt-24 border-t border-white/10 pt-12">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
                01 / Overview
              </p>

              <h2 className="text-2xl font-medium md:text-3xl">
                Understanding financial data through Python
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-white/50">
                This project analyzes historical stock market data
                from Apple (AAPL), Microsoft (MSFT), and NVIDIA
                (NVDA). It combines data collection, financial
                calculations, portfolio modeling, visualization,
                and automated testing in a Python workflow.
              </p>
            </section>

            {/* Methodology */}
            <section className="mt-20 border-t border-white/10 pt-12">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
                02 / Methodology
              </p>

              <h2 className="text-2xl font-medium md:text-3xl">
                From market data to analysis
              </h2>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {[
                  {
                    number: "01",
                    title: "Data Collection",
                    text: "Retrieve historical stock prices using yfinance.",
                  },
                  {
                    number: "02",
                    title: "Financial Analysis",
                    text: "Calculate daily returns, cumulative returns, volatility, and correlations.",
                  },
                  {
                    number: "03",
                    title: "Portfolio Modeling",
                    text: "Analyze a weighted portfolio with 40% AAPL, 30% MSFT, and 30% NVDA, assuming daily rebalancing.",
                  },
                  {
                    number: "04",
                    title: "Validation and Outputs",
                    text: "Generate charts and CSV files, and verify calculations through automated tests.",
                  },
                ].map((step) => (
                  <div
                    key={step.number}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-7"
                  >
                    <span className="text-xs text-white/25">
                      {step.number}
                    </span>

                    <h3 className="mt-5 text-lg font-medium">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/45">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Results */}
            <section className="mt-20 border-t border-white/10 pt-12">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
                03 / Results
              </p>

              <h2 className="text-2xl font-medium md:text-3xl">
                Historical portfolio metrics
              </h2>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    value: "+27.68%",
                    label: "Total portfolio return",
                  },
                  {
                    value: "1.28%",
                    label: "Daily volatility",
                  },
                  {
                    value: "0.106%",
                    label: "Mean daily return",
                  },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-7"
                  >
                    <p className="text-3xl font-medium tracking-tight md:text-4xl">
                      {metric.value}
                    </p>

                    <p className="mt-4 text-sm text-white/40">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-6 text-white/30">
                Historical dataset analyzed on October 13, 2026.
                These observations are not investment forecasts.
              </p>
            </section>

            {/* Charts */}
            <section className="mt-20 border-t border-white/10 pt-12">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
                04 / Visualizations
              </p>

              <h2 className="text-2xl font-medium md:text-3xl">
                Exploring the results
              </h2>

              <div className="mt-10 space-y-10">
                {financialCharts.map((chart) => (
                  <div key={chart.title}>
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white p-3">
                      <Image
                        src={chart.image}
                        alt={chart.title}
                        width={1400}
                        height={900}
                        className="h-auto w-full object-contain"
                      />
                    </div>

                    <h3 className="mt-5 text-lg font-medium">
                      {chart.title}
                    </h3>

                    <p className="mt-2 max-w-3xl text-sm leading-7 text-white/45">
                      {chart.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Limitations */}
            <section className="mt-20 border-t border-white/10 pt-12">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
                05 / Limitations
              </p>

              <h2 className="text-2xl font-medium md:text-3xl">
                Scope and assumptions
              </h2>

              <ul className="mt-8 space-y-4 text-sm leading-7 text-white/50">
                <li>
                  Historical performance does not predict future returns.
                </li>
                <li>
                  Transaction costs, taxes, and slippage are not modeled.
                </li>
                <li>
                  Portfolio weights are assumed to be maintained through
                  daily rebalancing.
                </li>
                <li>
                  Market data availability depends on Yahoo Finance.
                </li>
                <li>
                  The risk-return indicator is not a Sharpe ratio.
                </li>
              </ul>
            </section>
          </>
                ) : project.slug === "smart-file-organizer" ? (
          <>
            {/* Overview */}
            <section className="mt-24 border-t border-white/10 pt-12">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
                01 / Overview
              </p>

              <h2 className="text-2xl font-medium md:text-3xl">
                Making file management more efficient
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-white/50">
                Smart File Organizer is a Python command-line tool
                designed to scan directories, analyze file metadata,
                and organize files by extension.
                It brings together file processing, statistics,
                JSON export, and automated organization in a
                modular application.
              </p>
            </section>

            {/* Workflow */}
            <section className="mt-20 border-t border-white/10 pt-12">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
                02 / Workflow
              </p>

              <h2 className="text-2xl font-medium md:text-3xl">
                How it works
              </h2>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {[
                  {
                    number: "01",
                    title: "Scan",
                    text: "Read a target directory and collect information about its files.",
                  },
                  {
                    number: "02",
                    title: "Analyze",
                    text: "Identify file extensions, calculate file sizes, and generate statistics.",
                  },
                  {
                    number: "03",
                    title: "Organize",
                    text: "Group and sort files into folders based on their extensions.",
                  },
                  {
                    number: "04",
                    title: "Export",
                    text: "Save file metadata in JSON format for further use.",
                  },
                ].map((step) => (
                  <div
                    key={step.number}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-7"
                  >
                    <span className="text-xs text-white/25">
                      {step.number}
                    </span>

                    <h3 className="mt-5 text-lg font-medium">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/45">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Architecture */}
            <section className="mt-20 border-t border-white/10 pt-12">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
                03 / Architecture
              </p>

              <h2 className="text-2xl font-medium md:text-3xl">
                Modular Python design
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-white/50">
                The application is divided into dedicated modules
                for scanning, file organization, statistics,
                exporting, and command-line interaction.
                This structure separates responsibilities and
                makes the code easier to understand and maintain.
              </p>

              <div className="mt-10 grid gap-3 md:grid-cols-2">
                {[
                  ["cli.py", "Command-line interface"],
                  ["scanner.py", "Directory scanning"],
                  ["models.py", "File data structures"],
                  ["organizer.py", "File grouping logic"],
                  ["sorter.py", "File organization"],
                  ["statistics.py", "File statistics"],
                  ["exporter.py", "JSON metadata export"],
                  ["main.py", "Application entry point"],
                ].map(([file, description]) => (
                  <div
                    key={file}
                    className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4"
                  >
                    <span className="font-mono text-sm text-white/80">
                      {file}
                    </span>

                    <span className="text-right text-xs text-white/35">
                      {description}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Features */}
            <section className="mt-20 border-t border-white/10 pt-12">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
                04 / Features
              </p>

              <h2 className="text-2xl font-medium md:text-3xl">
                Core functionality
              </h2>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {[
                  "Directory scanning",
                  "File extension detection",
                  "File size calculation",
                  "File statistics",
                  "Extension-based grouping",
                  "JSON metadata export",
                  "Automatic file organization",
                  "Command-line interface",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="rounded-xl border border-white/10 px-5 py-4 text-sm text-white/60"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </section>

            {/* Testing */}
            <section className="mt-20 border-t border-white/10 pt-12">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
                05 / Testing
              </p>

              <h2 className="text-2xl font-medium md:text-3xl">
                Automated validation
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-white/50">
                The project includes automated tests using pytest.
                Tests are organized around scanning, file
                organization, and metadata exporting.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/30">
                  Test modules
                </p>

                <div className="space-y-3 font-mono text-sm text-white/60">
                  <p>tests/test_scanner.py</p>
                  <p>tests/test_organizer.py</p>
                  <p>tests/test_exporter.py</p>
                </div>
              </div>
            </section>
          </>
                ) : project.slug === "transport-company-system" ? (
          <>
            {/* Overview */}
            <section className="mt-24 border-t border-white/10 pt-12">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
                01 / Overview
              </p>

              <h2 className="text-2xl font-medium md:text-3xl">
                A role-based transport management application
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-white/50">
                Transport Company System is a Flutter web
                application designed to demonstrate transport
                management workflows through three role-based
                interfaces: Admin, Driver, and Customer.
                The system covers delivery requests, assignments,
                driver management, and shipment tracking.
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Admin",
                    text: "Manage delivery requests, assignments, drivers, vehicles, and tracking.",
                  },
                  {
                    title: "Driver",
                    text: "Access driver operations and delivery progress.",
                  },
                  {
                    title: "Customer",
                    text: "Access customer delivery information and shipment progress.",
                  },
                ].map((role) => (
                  <div
                    key={role.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                  >
                    <h3 className="text-lg font-medium">
                      {role.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/45">
                      {role.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Interactive demo */}
            <TransportDemo />

            {/* Features */}
            <section className="mt-20 border-t border-white/10 pt-12">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
                03 / Key features
              </p>

              <h2 className="text-2xl font-medium md:text-3xl">
                Core application workflows
              </h2>

              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {[
                  "Role-based dashboards",
                  "Delivery request management",
                  "Driver and vehicle management",
                  "Delivery assignments",
                  "Shipment progress tracking",
                  "Delivery status updates",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="rounded-xl border border-white/10 px-5 py-4 text-sm text-white/60"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </section>

            {/* Engineering */}
            <section className="mt-20 border-t border-white/10 pt-12">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
                04 / Engineering
              </p>

              <h2 className="text-2xl font-medium md:text-3xl">
                Software design and testing
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-white/50">
                Developed with Flutter and Dart, this project
                applies role-based interface design and modular
                application structure. It was developed as part
                of a software engineering workflow covering
                requirements, design, implementation, and testing.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="font-medium">
                    Software design
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    Requirements specification, system design,
                    interface development, and role-specific
                    workflows.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="font-medium">
                    Testing
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/45">
                    Flutter testing and manual verification
                    of the deployed web application.
                  </p>
                </div>
              </div>
            </section>
          </>
        ) : null}

        {/* Bottom navigation */}
        <div className="mt-24 border-t border-white/10 pt-10">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            All projects
          </Link>
        </div>
      </div>
    </main>
  );
}