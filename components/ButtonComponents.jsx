import Link from "next/link";

export default function DashboardLinkButton({link}) {
  return (
    <Link
      href={link}
      className="px-4 py-3 rounded-lg hover:scale-105 transition-all bg-cyan-700 text-white w-[92px]"
    >
      View All
    </Link>
  );
}
